/**
 * Created by nicolas on 08/05/14.
 */
angular.module('login', [])

    .value('loggedUser', {username:''})

    .controller('LoginCtrl',['$scope', 'authenticationService', function($scope, authenticationService) {
        $scope.login = function(username, password) {
            authenticationService.login(username, password);
        }
    }])

    .factory('authenticationService', ['$http', 'loggedUser', function($http, loggedUser) {
        return {
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
                    .success(function(data, status, headers, config) {
                        loggedUser.username = username;
                        console.log("LoggedUser after login");
                        console.log(loggedUser);
                    }
                );

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