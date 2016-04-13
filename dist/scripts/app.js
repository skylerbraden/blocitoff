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
            });
    }
    
    angular
        .module('blocitoff', ['ui.router', 'firebase'])
        .config(config);
 })();