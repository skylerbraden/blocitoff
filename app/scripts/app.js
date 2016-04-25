(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        
        $stateProvider
            .state('tasklist', {
                url: '/',
                controller: 'TaskListCtrl as tasklist',
                templateUrl: '/templates/tasklist.html'
            })
			.state('history', {
				url: '/history',
				controller: 'TaskListCtrl as tasklist',
				templateUrl: '/templates/history.html'
			});
    }
    
    angular
        .module('blocitoff', ['ui.router', 'firebase'])
        .config(config);
 })();