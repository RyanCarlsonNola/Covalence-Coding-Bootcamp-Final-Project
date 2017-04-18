var app = angular.module('CODEocalypse', ['CODEocalypse.factories','CODEocalypse.controllers', 'ngRoute', 'ngResource']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    
    $routeProvider.when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeController'
    })
    $routeProvider.when('/jim', {
        templateUrl: 'views/Jim/jim.html',
        controller: 'JimWelController'
    })
    $routeProvider.when('/james', {
        templateUrl: 'views/James/james.html',
        controller: 'JamesWelController'
    })
    $routeProvider.when('/patrick', {
        templateUrl: 'views/Patrick/patrick.html',
        controller: 'PatrickWelController'
    })
    $routeProvider.when('/ryan', {
        templateUrl: 'views/Ryan/ryan.html',
        controller: 'RyanWelController'
    })
}])