(function() {
  function taskDisplay($compile) {
	     return {
	         replace: true,
	         restrict: 'E',
             template: "<p>{{task.text}}</p>",
             scope:{
                 task: "=",
                 list: "="
             },
	         link: function(scope, element, attributes){
                 element.bind("click", function(){
                     element.unbind("click")
                     element.html("<input type='text' ng-model='text'/>")
                     
                     element.bind("keyup", function(event){
                         
                         if(event.which == 13){
                             scope.updateTask()
                             element.html('<task-display task="task" list="list"></task-display>')
                             $compile(element.contents())(scope)
                         }
                        
                     })
                     
                     $compile(element.contents())(scope)
                 })
	         },
             controller: function($scope){
                 $scope.updateTask = function(){
                     $scope.task.text = $scope.text
                     $scope.list.$save($scope.task);
                 }
             }
	     };
	 }

 	angular
		.module('blocitoff')
		.directive('taskDisplay', ["$compile", taskDisplay]);
 })();