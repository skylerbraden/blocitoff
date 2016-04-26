(function() {
    function TaskListCtrl($firebaseArray) {
        
        var vm = this;
        var ref = new Firebase('https://blocitoff-sjb.firebaseio.com/users/1/tasks');
		var ref2 = new Firebase('https://blocitoff-sjb.firebaseio.com/users/1/completed-tasks');
        vm.tasks = $firebaseArray(ref);
		vm.completedTasks = $firebaseArray(ref2);
        

//        vm.test = function(){
//            alert(1)
//        }
                                
                                    
                                
        vm.addTask = function() {
            vm.tasks.$add({text: vm.task, time: Firebase.ServerValue.TIMESTAMP});
			vm.task.active;
            vm.task = "";
        }
        
        vm.completeTask = function(task) {
			vm.completedTasks.$add(task);
			vm.tasks.$remove(task);
            task.completed = true;
        }
        
        window.foo = vm.tasks
        
    }
        
    angular
        .module('blocitoff')
        .controller('TaskListCtrl', ['$firebaseArray', TaskListCtrl]);
})();