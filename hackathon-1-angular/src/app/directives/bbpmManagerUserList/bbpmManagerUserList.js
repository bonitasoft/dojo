"use strict";

angular.module('bonitasoft.bbpmManagerUserList', [])
    .factory('RecursionHelper', ['$compile', function ($compile) {
        return {
            /**
             * Manually compiles the element, fixing the recursion loop.
             * @param element
             * @param [link] A post-link function, or an object with function(s) registered via pre and post properties.
             * @returns An object containing the linking functions.
             */
            compile: function (element, link) {
                // Normalize the link parameter
                if (angular.isFunction(link)) {
                    link = { post: link };
                }

                // Break the recursion loop by removing the contents
                var contents = element.contents().remove();
                var compiledContents;
                return {
                    pre: (link && link.pre) ? link.pre : null,
                    /**
                     * Compiles and re-adds the contents
                     */
                    post: function (scope, element) {
                        // Compile the contents
                        if (!compiledContents) {
                            compiledContents = $compile(contents);
                        }
                        // Re-add the compiled contents to the element
                        compiledContents(scope, function (clone) {
                            element.append(clone);
                        });

                        // Call the post-linking function, if any
                        if (link && link.post) {
                            link.post.apply(null, arguments);
                        }
                    }
                };
            }
        };
    }])
    .controller('bbpmManagerUserList.RowCtrl', ['$scope', function ($scope) {
        $scope.collapse = true;
        $scope.isManager = true;
        $scope.toggleCollapse = function () {
            $scope.collapse = !$scope.collapse;
        };
        $scope.hasSubordinate = function (users) {
            $scope.isManager = users.length > 0;
        }
    }])
    .controller('bbpmManagerUserListCtrl', ['$scope', '$http', 'loggedUser', function ($scope, $http, loggedUser) {
        $http({
            method: 'GET', url: 'bonita/API/identity/user', params: {
                p: '0',
                c: '10',
                o: 'lastname ASC',
                f: 'manager_id=' + $scope.userId
            }
        }).success(function(users){
            $scope.users = users;
            if($scope.onLoad !== undefined) {
                 $scope.onLoad(users);
            }
        });

    }]).directive('bbpmManagerUserList', function (RecursionHelper) {
        return {
            restrict: 'E',
            controller: 'bbpmManagerUserListCtrl',
            scope: {
                userId: '=',
                onLoad: '=?'
            },
            templateUrl: 'app/directives/bbpmManagerUserList/bbpmManagerUserList-tpl.html',
            compile: function (element) {
                // Use the compile function from the RecursionHelper,
                // And return the linking function(s) which it returns
                return RecursionHelper.compile(element);
            }
        };
    });

