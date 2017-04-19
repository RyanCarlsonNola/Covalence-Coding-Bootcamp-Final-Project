angular.module('CODEocalypse.controllers', [])

    .controller('WelcomeController', ['$scope', '$location', function($scope, $location) {
        $(document).ready(function(){
            $('#ja_testdiv').click(function() {
                $('#ja_testdiv').css('animation', 'none');
            });
        });
    }])
    
    .controller('JamesWelController', ['$scope', '$location', function($scope, $location) {
        $(document).ready(function(){
 
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
