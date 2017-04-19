angular.module('CODEocalypse.controllers', [])

    .controller('WelcomeController', ['$scope', '$location', function($scope, $location) {
        
    }])
    
    .controller('JamesWelController', ['$scope', '$location', function($scope, $location) {
        $(document).ready(function(){
            $('.carousel').carousel();
            $('.materialboxed').materialbox();
        });
    }])

    .controller('JimWelController', ['$scope', '$location', function($scope, $location) {

    }])

    .controller('RyanWelController', ['$scope', '$location', function($scope, $location) {
        $(document).ready(function(){
            $('.carousel').carousel();
        });
    }])

    .controller('PatrickWelController', ['$scope', '$location', function($scope, $location) {
        
    }])
