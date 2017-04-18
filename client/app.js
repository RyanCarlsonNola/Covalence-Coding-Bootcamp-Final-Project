var app = angular.module('CODEocalypse', ['CODEocalypse.factories','CODEocalypse.controllers', 'ngRoute', 'ngResource']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $routeProvider.when('/', {
        templateUrl: './welcome.html',
        controller: 'WelcomeController'
    })
}])