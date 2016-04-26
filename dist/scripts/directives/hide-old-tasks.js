(function() {
  function hideOldTasks($compile) {
	     return {
	         replace: true,
	         restrict: 'A',
	         link: function(scope, element, attributes){
				 
			 }
                 
	     };
	 }

 	angular
		.module('blocitoff')
		.directive('hideOldTasks', ["$compile", hideOldTasks]);
 })();