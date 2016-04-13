(function() {
    function TaskListCtrl($firebaseArray) {
        var vm = this;
        
        var ref = new Firebase('https://blocitoff-sjb.firebaseio.com/users/1/tasks');
        vm.tasks = $firebaseArray(ref);
        vm.addTask = function() {
            vm.tasks.$add({task: vm.task});
        }
        
        
        
    }
        
    angular
        .module('blocitoff')
        .controller('TaskListCtrl', ['$firebaseArray', TaskListCtrl]);
})();