/**
 * Created by nicolas on 08/05/14.
 */
angular.module('login', [])

    .value('loggedUser', {username:'', userid:''})

    .controller('LoginCtrl',['$scope', 'authenticationService', function($scope, authenticationService) {
        $scope.login = function(username, password) {
            authenticationService.login(username, password);
        }
    }])

    .factory('authenticationService', ['$http', 'loggedUser', function($http, loggedUser) {
        return {
            getLoggedUser : function() {
                return loggedUser;
            },

            populateLoggedUser : function(cb, errcb) {
                $http({
                    method: 'GET',
                    url: 'bonita/API/system/session/unusedid'
                }).success(function(data){
                    loggedUser.username = data.user_name;
                    loggedUser.userid = data.user_id;
                    console.log("login.js.success. LoggedUser:");
                    console.log(loggedUser);
                    cb(loggedUser);
                }).error(function(data) {
                    loggedUser.username = '';
                    loggedUser.userid = '';
                    console.log("login.js.success.error. LoggedUser:");
                    console.log(loggedUser);
                    errcb(data);
                });
            },

            login : function(username, password) {
                console.log("LoggedUser dans la méthode login");
                console.log(loggedUser);
                $http({
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    url: '/bonita/loginservice',
                    transformRequest: function(obj) {
                        var str = [];
                        for(var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    },
                    data: {username: username, password: password, redirect: 'false'}
                } )
                    .success(populateLoggedUser);

            },

            logout : function() {
                $http(
                    {method: 'GET', url: '/bonita/logoutservice'}
                ).success(function(data, status, headers, config) {
                    console.log("logout called")
                    loggedUser.username = '';
                });
            }
        };
    }])


;