angular.module('bonitasoft.bbpmModel', [])
    .service('userService', ['$http', function ($http) {
        return {
            list: function (params) {
                return $http({
                    method: 'GET', url: 'bonita/API/identity/user', params: {
                        p: params.p || '0',
                        c: params.c || '10',
                        o: params.o || 'lastname ASC',
                        f: params.f || ''
                    }
                })
            },
            get: function (id) {
                return $http({
                    method: 'GET',
                    url: 'bonita/API/identity/user/' + id});
            },
            update: function (user) {
                return $http({
                    method:'PUT',
                    url: 'bonita/API/identity/user/'+ user.id,
                    data: user
                });
            }
        }
    }]);