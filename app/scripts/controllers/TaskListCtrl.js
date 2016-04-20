(function() {
    function TaskListCtrl($firebaseArray) {
        
        var vm = this;
        var ref = new Firebase('https://blocitoff-sjb.firebaseio.com/users/1/tasks');
        vm.tasks = $firebaseArray(ref);
        

//        vm.test = function(){
//            alert(1)
//        }
                                
                                    
                                
        vm.addTask = function() {
            vm.tasks.$add({text: vm.task});
            vm.task = "";
        }
        
        vm.removeTask = function(task) {
            task.completed = true;
        }
        
//        window.foo = vm.tasks
        
    }
        
    angular
        .module('blocitoff')
        .controller('TaskListCtrl', ['$firebaseArray', TaskListCtrl]);
})();