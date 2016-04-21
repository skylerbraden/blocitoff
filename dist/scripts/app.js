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
				controller: 'HistoryCtrl as history',
				template: '<h1>Coming soon!</h1>'
			});
    }
    
    angular
        .module('blocitoff', ['ui.router', 'firebase'])
        .config(config);
 })();