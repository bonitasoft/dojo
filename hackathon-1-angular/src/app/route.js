/**
 * Created by colin on 12/05/14.
 */
angular.module('routes', [])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider.when("/teammanager/users", {templateUrl: 'app/teammanager/users.tpl.html', controller: 'listUsersCtrl'});
        $routeProvider.when("/teammanager/users/:id", {templateUrl: 'app/teammanager/user.tpl.html', controller: 'editUserCtrl'});
        $routeProvider.when("/teammanager/users/:id/processes", {templateUrl: 'app/bpm/processes/processes-tpl.html', controller: 'ProcessesCtrl'});
        $routeProvider.when("/teammanager/users/:userId/processes/:processId", {templateUrl: 'app/bpm/processes/start-process-tpl.html', controller: 'StartProcessCtrl'});
        $routeProvider.when("/teammanager/users/:userId/tasks", {templateUrl: 'app/bpm/task/tasks.tpl.html', controller: 'TaskCtrl'});

        $routeProvider.when("/login", {templateUrl: 'app/login/login-tpl.html'});

        $routeProvider.otherwise({redirectTo: '/teammanager/users'});
    }]);