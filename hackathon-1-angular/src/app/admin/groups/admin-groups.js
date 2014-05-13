'use.strict'
angular.module('admin-groups', ['services.crud', 'directives.crud', 'resources.groups', 'angularTreeview'])
.config(['crudRouteProvider', function (crudRouteProvider) {

  crudRouteProvider.routesFor('Groups', 'admin')
    .whenList({
      groups: ['Groups', function(Groups) { return Groups.query({p:0,c:10000,o:'name ASC',f:'parent_path'}); }]
    })
    .whenNew({
      group: ['Groups', function(Groups) { return new Groups(); }]
    })
    .whenEdit({
      group:['$route', 'Groups', function ($route, Groups) {
        return Groups.getById($route.current.params.itemId);
      }]
    });
}])
.controller('adminGroupsListCtrl', ['$scope', 'crudListMethods', '$filter', 'groups', '$location', 'Groups', function ($scope, crudListMethods, $filter, groups, $location, Groups) {
  $scope.groups = groups;
  angular.extend($scope, crudListMethods('/admin/groups'));

  $scope.displayGroupsPossibleValues = [
	{name:'All', filterItems:function(group) {
		return true;
	}, value:'true'}
  ];

  $scope.displayGroups = $scope.displayGroupsPossibleValues[0];
  
  
  $scope.isGroupVisible = function (item) {
	return true;
  };
  
  $scope.toTree = function() {
	  var res = [];
	  var map = {};
	  groups = $filter('orderBy')(groups, 'path', false);
	  // may be simplified as now the groups queried in the List route is only top parent groups...
	  angular.forEach(groups, function(group, index){
	    	 grptoadd = angular.copy(group);
	    	 grptoadd.children = [];
	    	 grptoadd.collapsed = true;
	    	 map[grptoadd.path] = grptoadd;
	    	 if (grptoadd.parent_path in map) {
	    		 map[grptoadd.parent_path].children.push(grptoadd);
	    	 } else {
	    		 this.push(grptoadd);
	    	 }
	     }, res);
	     
	  return res;
  };
  
  $scope.treedata = $scope.toTree();
  
  $scope.groupsTree = {};
  
  $scope.groupsTree.selectNodeHead = function( selectedNode ){

		//Collapse or Expand
		selectedNode.collapsed = !selectedNode.collapsed;
		
		if(!selectedNode.collapsed) {
			// empty existing children to avoid duplication
			selectedNode.children.length = 0;
			Groups.query({p:0,c:10000,o:'name ASC',f:'parent_path=' + selectedNode.path}, function (data) {
				angular.forEach(data, function(child, index){
			    	 grptoadd = angular.copy(child);
			    	 grptoadd.children = [];
			    	 grptoadd.collapsed = true;
		    		 this.push(grptoadd);
			     }, selectedNode.children);
			}, null);
		}
	};

  
  $scope.$watch( 'groupsTree.currentNode', function( newObj, oldObj ) {
	    if( $scope.groupsTree && angular.isObject($scope.groupsTree.currentNode) ) {
	        $location.path("/admin/groups/"+ $scope.groupsTree.currentNode.id);
	    }
	}, false);
  
  $scope.remove = function(group, $index, $event) {
    // Don't let the click bubble up to the ng-click on the enclosing div, which will try to trigger
    // an edit of this item.
    $event.stopPropagation();

    // Remove this group
    group.$remove(function() {
      // It is gone from the DB so we can remove it from the local list too
      $scope.groups.splice($index,1);
    }, function() {
        // Error management. Limited to a log in browser console for now.
    	console.log("Group cannot be removed: " + group.$id());
    });
  };
}])
.controller('adminGroupsEditCtrl', ['$scope', '$location', '$filter', 'group', function ($scope, $location, $filter, group) {
	
  $scope.group = group;

  $scope.password = group.password;

	$scope.cancelEdit = function() {
		$location.path('/admin/groups');
	};
  
  $scope.onSave = function (group) {
    $location.path('/admin/groups');
  };

  $scope.onError = function() {
	  console.log("Unable to save group!");
  };

  $scope.onRemove = function(group) {
    $location.path('/admin/groups');
  };

}])
;