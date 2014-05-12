angular.module('teammanager', [])
    .controller('totoCtrl', function($scope, Users) {
         Users.query('manager_id='+ $scope.loggedUser.id, callback);

        function callback(data) {
            $scope.users = data;
        }
    });
