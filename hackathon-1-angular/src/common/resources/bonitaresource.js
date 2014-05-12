'use strict';

/* Module declaration for BonitaResource */
/*
 This module offers a factory to encapsulate the definition of resources.
 */
angular.module('bonitaResource', [])
    .factory('bonitaResource', ['$http', '$q', '$filter', function ($http, $q, $filter) {

        function BonitaResourceFactory(item, url, params) {


            var defaultParams = params || {};

            var thenFactoryMethod = function (httpPromise, successcb, errorcb, isArray) {
                var scb = successcb || angular.noop;
                var ecb = errorcb || angular.noop;

                return httpPromise.then(function (response) {
                    var result;
                    if (isArray) {
                        result = [];
                        for (var i = 0; i < response.data.length; i++) {
                            result.push(new Resource(response.data[i]));
                        }
                    } else {
                        //I would be better to check for 404 HTTP response status, in case of resource not found...
                        if (response.data === " null ") {
                            return $q.reject({
                                code: 'resource.notfound',
                                collection: item
                            });
                        } else {
                            result = new Resource(response.data);
                        }
                    }
                    scb(result, response.status, response.headers, response.config);
                    return result;
                }, function (response) {
                    ecb(undefined, response.status, response.headers, response.config);
                    return undefined;
                });
            };

            var Resource = function (data) {
                angular.extend(this, data);
            };

            Resource.all = function (cb, errorcb) {
                return Resource.query({p: 0, c: 10000, o: 'lastname ASC'}, cb, errorcb);
            };

            Resource.query = function (queryJson, successcb, errorcb) {
                var params = angular.isObject(queryJson) ? queryJson : {f: queryJson};
                var httpPromise = $http.get(url, {params: angular.extend({}, defaultParams, params)});
                return thenFactoryMethod(httpPromise, successcb, errorcb, true);
            };

            Resource.getById = function (id, successcb, errorcb) {
                var httpPromise = $http.get(url + id, {params: defaultParams});
                return thenFactoryMethod(httpPromise, successcb, errorcb);
            };

            Resource.getByIds = function (ids, successcb, errorcb) {
                var qin = [];
                angular.forEach(ids, function (id) {
                    qin.push({$oid: id});
                });
                return Resource.query({_id: {$in: qin}}, successcb, errorcb);
            };

            //instance methods

            Resource.prototype.$id = function () {
                if (this.id) {
                    return this.id;
                }
            };

            Resource.prototype.$save = function (successcb, errorcb) {
                var httpPromise = $http.post(url, this, {params: defaultParams});
                return thenFactoryMethod(httpPromise, successcb, errorcb);
            };

            Resource.prototype.$update = function (successcb, errorcb) {
                var httpPromise = $http.put(url + "/" + this.$id(), angular.extend({}, this, {_id: undefined}), {params: defaultParams});
                return thenFactoryMethod(httpPromise, successcb, errorcb);
            };


            Resource.prototype.$disable = function (successcb, errorcb) {
                return this.$updateState('false', successcb, errorcb);
            };

            Resource.prototype.$enable = function (successcb, errorcb) {
                return this.$updateState('true', successcb, errorcb);
            };

            Resource.prototype.$updateState = function (enable, successcb, errorcb) {
                var httpPromise = $http['put'](url + "/" + this.$id(), {params: defaultParams, enabled: enable});
                return thenFactoryMethod(httpPromise, successcb, errorcb);
            };

            Resource.prototype.$remove = function (successcb, errorcb) {
                var httpPromise = $http['delete'](url + "/" + this.$id(), {params: defaultParams});
                return thenFactoryMethod(httpPromise, successcb, errorcb);
            };

            Resource.prototype.$saveOrUpdate = function (savecb, updatecb, errorSavecb, errorUpdatecb) {
                if (this.$id()) {
                    return this.$update(updatecb, errorUpdatecb);
                } else {
                    return this.$save(savecb, errorSavecb);
                }
            };

            return Resource;
        }

        return BonitaResourceFactory;
    }]);