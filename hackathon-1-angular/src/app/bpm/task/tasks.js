angular.module('tasks', ['resources.task'])
    .controller('TaskCtrl', function(Tasks, $route) {
        Tasks.query({f: ['state=ready', "user_id="+$route.current.params.userId]});

        var self = this;
        function callback(data) {
            self.tasks = data;
        }
    });
