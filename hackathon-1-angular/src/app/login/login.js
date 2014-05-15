/**
 * Created by nicolas on 08/05/14.
 */
angular.module('login', []).controller('LoginCtrl',['$scope', '$http','$location', 'loggedUser', function($scope, $http,$location, loggedUser){


    $scope.login = function(username, password) {

        $http({
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: '/loginservice',
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: {username: username, password: password, redirect: 'false'}
        }).success(function(data, status, headers, config) {
            loggedUser=data;
            loggedUser.username = data.username;
            $http({
                method: 'GET',
                url: 'bonita/API/identity/user/'+data.user_id
            }).success(function(userData){
                loggedUser.userData=userData;
                loggedUser.display_name=userData.firstname+' '+userData.lastname;
                $location.path('/team/users');
            })




        });
    };
}]);