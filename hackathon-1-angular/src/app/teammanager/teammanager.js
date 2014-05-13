angular.module('teammanager', ['directives.gravatar'])
    .controller('listUsersCtrl', function($scope, Users, $location) {
        Users.query('manager_id='+ $scope.loggedUser.id, callback);

        function callback(data) {
            $scope.users = data;
        }

        $scope.edit = function(user) {
            $location.path('/teammanager/users/' + user.id + '/infos');
        }
    })
    .controller('editUserCtrl', function($scope, Users, $route, $window) {
        Users.getById($route.current.params.id, callback);

        function callback(data) {
            $scope.user = data;
            Users.query('manager_id='+ $scope.user.id, callback2);
        };

        function callback2(data) {
            $scope.managedUsers = data;
        };

        $scope.save = function() {
            $scope.user.$save();
        };

        $scope.cancel = function() {
            $window.history.back();
        };

    });