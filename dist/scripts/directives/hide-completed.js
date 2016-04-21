(function() {
  function hideCompleted() {
	     return {
	         replace: true,
	         restrict: 'A',
	         link: function(scope, element, attributes) {
				 
			 }
	     };
	 }

 	angular
		.module('blocitoff')
		.directive('hideCompleted', [hideCompleted]);
 })();