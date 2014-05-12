angular.module('tm-users', ['services.crud', 'directives.crud', 'directives.gravatar','resources.users', 'tm-users-edit-uniqueUsername'])
.config(['crudRouteProvider', function (crudRouteProvider) {

  crudRouteProvider.routesFor('Users', 'tm')
    .whenList({
      users: ['Users', function(Users) { return Users.all(); }]
    })
    .whenNew({
      user: ['Users', function(Users) { return new Users(); }]
    })
    .whenEdit({
      user:['$route', 'Users', function ($route, Users) {
        return Users.getById($route.current.params.itemId);
      }]
    });
}])
.controller('tmUsersListCtrl', ['$scope', 'crudListMethods', '$filter', 'users', 'loggedUser', function ($scope, crudListMethods, $filter, users, loggedUser) {
  $scope.users = users;

  angular.extend($scope, crudListMethods('/tm/users'));

  $scope.displayUsersPossibleValues = [
    {name:'MyTeam', filterItems:function(user) {
          return user.manager_id == loggedUser.id;
    }},
	{name:'Active', filterItems:function(user) {
		return user.manager_id == loggedUser.id && user.enabled;
	}},
	{name:'Inactive', filterItems:function(user) {
		return user.manager_id == loggedUser.id && !user.enabled;
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
.controller('tmUsersEditCtrl', ['$scope', '$location', '$filter', 'user', function ($scope, $location, $filter, user) {

  $scope.user = user;
  $scope.password = user.password;

	$scope.cancelEdit = function() {
		$location.path('/tm/users');
	};
  
  $scope.onSave = function (user) {
    $location.path('/tm/users');
  };

  $scope.onError = function() {
	  console.log("Unable to save user!");
  };

  $scope.onRemove = function(user) {
    $location.path('/tm/users');
  };

}])
;