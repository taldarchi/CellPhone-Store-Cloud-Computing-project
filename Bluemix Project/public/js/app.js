var ex = angular.module('webEx', ['ui.router']);
ex.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/dashboard");
    $stateProvider
        .state('dashboard', {
            url: "/dashboard",
            controller:'dashboardController',
            templateUrl: "views/dashboard.html"
        })
});