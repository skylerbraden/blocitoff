(function() {
    function TaskListCtrl($firebaseArray, $interval) {
        
        var vm = this;
        var ref = new Firebase('https://blocitoff-sjb.firebaseio.com/users/1/tasks');
		var ref2 = new Firebase('https://blocitoff-sjb.firebaseio.com/users/1/completed-tasks');
        vm.tasks = $firebaseArray(ref);
		vm.completedTasks = $firebaseArray(ref2);
		SEVEN_DAYS = 7 * 86400000;
		FIVE_SECONDS = 5000;
        

//        vm.test = function(){
//            alert(1)
//        }
              


		
		
		$interval(function(){
//			console.log("Interval Happened")

				$.each(vm.tasks, function(index, task){
					if(task.time < (Date.now() - SEVEN_DAYS)){
//						console.log("Expired")
						vm.completeTask(task);
					}
//					else{
//						console.log("Not Expired")
//					}
				})
			
		}, 1000);
       
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
		window.poo = vm.completedTasks
        
    }
        
    angular
        .module('blocitoff')
        .controller('TaskListCtrl', ['$firebaseArray','$interval', TaskListCtrl]);
})();