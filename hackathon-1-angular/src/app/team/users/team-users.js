angular.module('team-users', ['services.crud', 'directives.crud', 'directives.gravatar', 'resources.users', 'admin-users-edit-uniqueUsername'])
    .config(['crudRouteProvider', function (crudRouteProvider) {

        crudRouteProvider.routesFor('Users', 'team')
            .whenList({
                users: ['Users', function (Users) {
                    return Users.all();
                }]
            })
            /*.whenNew({
             user: ['Users', function(Users) { return new Users(); }]
             })*/
            .whenEdit({
                user: ['$route', 'Users', function ($route, Users) {
                    return Users.getById($route.current.params.itemId);
                }]
            })
//            .when('/team/users/:managerId', {
//                templateUrl: '/team/users/users-list-tpl.html',
//                controller: 'team.UsersListCtrl',
//                action: 'list'
//            })
        ;
    }])
    .controller('team.UsersListCtrl', ['$http','$scope', 'crudListMethods', '$filter', 'users', '$route', function ($http,$scope, crudListMethods, $filter, users, $route) {


        $scope.managerId = $route.current.params.managerId !=null ? $route.current.params.managerId : $scope.loggedUser.user_id;
        $scope.users=users;
        $scope.managerDisplayName="...";

        console.log('load');
        console.log('users'+users.length);
        console.log('logged user:'+$scope.loggedUser.user_id);
        console.log('managerId:'+  $scope.managerId);

         $http({
                method: 'GET',
                url: 'bonita/API/identity/user/'+$scope.managerId
            }).success(function(userData){
                $scope.managerDisplayName=userData.firstname+' '+userData.lastname;


                $scope.displayUsersPossibleValues = [
                 {name: $scope.managerDisplayName+ "' s team", filterItems: function (user) {
                     return user.manager_id == $scope.managerId ;
                 }},
                 {name: 'Active', filterItems: function (user) {
                     return user.manager_id == $scope.managerId  && angular.fromJson(user.enabled);
                 }},
                 {name: 'Inactive', filterItems: function (user) {
                     return user.manager_id == $scope.managerId && !angular.fromJson(user.enabled);
                 }}
                ];

                 $scope.displayUsers = $scope.displayUsersPossibleValues[0];

                $scope.isUserVisible = function (item) {
                 return $scope.displayUsers.filterItems(item);
             };


         });

        angular.extend($scope, crudListMethods('/team/users'));




        $scope.disable = function (user, $index, $event) {

            $event.stopPropagation();

            user.$disable(function () {
                $scope.users[$index].enabled = false;
            }, function () {
                console.log("User cannot be disabled: " + user.$id());
            });
        };

        $scope.enable = function (user, $index, $event) {

            $event.stopPropagation();

            user.$enable(function () {
                user.enabled = true;
            }, function () {
                console.log("User cannot be enabled: " + user.$id());
            });
        };


        $scope.remove = function (user, $index, $event) {
            // Don't let the click bubble up to the ng-click on the enclosing div, which will try to trigger
            // an edit of this item.
            $event.stopPropagation();

            // Remove this user
            user.$remove(function () {
                // It is gone from the DB so we can remove it from the local list too
                $scope.users.splice($index, 1);
            }, function () {
                console.log("User cannot be removed: " + user.$id());
            });
        };
    }])


;