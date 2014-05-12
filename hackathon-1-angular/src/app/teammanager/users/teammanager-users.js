angular.module('teammanager-users', ['services.crud', 'directives.crud', 'directives.gravatar','resources.users', 'admin-users-edit-uniqueUsername'])
    .config(['crudRouteProvider', function (crudRouteProvider) {

        crudRouteProvider.routesFor('Users', 'teammanager')
            .whenList({
                users: ['Users', function(Users) { return Users.all(); }]
            })
            /*.whenNew({
                user: ['Users', function(Users) { return new Users(); }]
            })*/
            .whenEdit({
                user:['$route', 'Users', function ($route, Users) {
                    return Users.getById($route.current.params.itemId);
                }]
            });
    }])
    .controller('teammanager.UsersListCtrl', ['$scope', 'crudListMethods','$filter', 'users', function ($scope, crudListMethods,  $filter, users) {
        $scope.users = users;

        angular.extend($scope, crudListMethods('/teammanager/users'));

        $scope.displayUsersPossibleValues = [
            {name:'My team', filterItems:function(user) {
                return user.manager_id == $scope.loggedUser.user_id;
            }},
            {name:'Active', filterItems:function(user) {
                return (user.manager_id == $scope.loggedUser.user_id) && angular.fromJson(user.enabled);
            }},
            {name:'Inactive', filterItems:function(user) {
                return (user.manager_id == $scope.loggedUser.user_id) && !angular.fromJson(user.enabled);
            }}
        ];

        $scope.displayUsers = $scope.displayUsersPossibleValues[0];


        $scope.isUserVisible = function (item) {
            return $scope.displayUsers.filterItems(item);
        };

        $scope.disable = function(user, $index, $event) {

            $event.stopPropagation();

            user.$disable(function() {
                $scope.users[$index].enabled = false;
            }, function() {
                console.log("User cannot be disabled: " + user.$id());
            });
        };

        $scope.enable = function(user, $index, $event) {

            $event.stopPropagation();

            user.$enable(function() {
                user.enabled = true;
            }, function() {
                console.log("User cannot be enabled: " + user.$id());
            });
        };


        $scope.remove = function(user, $index, $event) {
            // Don't let the click bubble up to the ng-click on the enclosing div, which will try to trigger
            // an edit of this item.
            $event.stopPropagation();

            // Remove this user
            user.$remove(function() {
                // It is gone from the DB so we can remove it from the local list too
                $scope.users.splice($index,1);
            }, function() {
                console.log("User cannot be removed: " + user.$id());
            });
        };
    }])


;