(function() {
    function TaskListCtrl($firebaseArray) {
        
        var vm = this;
        var ref = new Firebase('https://blocitoff-sjb.firebaseio.com/users/1/tasks');
        vm.tasks = $firebaseArray(ref);
        
        
//        vm.tasks.$loaded().then(function(data){
//            if(vm.tasks == null) {
//                vm.tasks = data;
////                vm.tasks.$save();
//            }
//        }

        vm.test = function(){
            alert(1)
        }
                                
                                    
                                
        vm.addTask = function() {
            vm.tasks.$add({text: vm.task});
            vm.task = "";
        }
        
        window.foo = vm.tasks
        
    }
        
    angular
        .module('blocitoff')
        .controller('TaskListCtrl', ['$firebaseArray', TaskListCtrl]);
})();