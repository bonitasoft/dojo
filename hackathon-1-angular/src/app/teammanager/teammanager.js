angular.module('teammanager', ['directives.gravatar'])
    .controller('totoCtrl', function($scope, Users, $location) {
         Users.query('manager_id='+ $scope.loggedUser.id, callback);

        function callback(data) {
            $scope.users = data;
        }

        $scope.edit = function(user) {
            $location.path('/teammanager/users/' + user.id);
        }
    })
    .controller('editUserCtrl', function($scope, Users, $route) {
        Users.getById($route.current.params.id, callback);

        function callback(data) {
            $scope.user = data;
        }

        $scope.save = function() {
            $scope.user.$saveOrUpdate();
        }

    });
