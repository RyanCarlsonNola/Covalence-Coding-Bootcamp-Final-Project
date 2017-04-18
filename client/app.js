var app = angular.module('CODEocalypse', ['CODEocalypse.factories','CODEocalypse.controllers', 'ngRoute', 'ngResource']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    
    $routeProvider.when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeController',
        css: 'styles.css'
    })
    $routeProvider.when('/jim', {
        templateUrl: 'views/Jim/jim.html',
        controller: 'JimWelController',
        css: 'views/Jim/jim_styles.css'
    })
    $routeProvider.when('/james', {
        templateUrl: 'views/James/james.html',
        controller: 'JamesWelController',
        css: 'views/James/james_styles.css'
    })
    $routeProvider.when('/patrick', {
        templateUrl: 'views/Patrick/patrick.html',
        controller: 'PatrickWelController',
        css: 'views/Patrick/patrick_styles.css'
    })
    $routeProvider.when('/ryan', {
        templateUrl: 'views/Ryan/ryan.html',
        controller: 'RyanWelController',
        css: 'views/Ryan/ryan_styles.css'
    })
}])