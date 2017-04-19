angular.module('CODEocalypse.controllers', [])

    .controller('WelcomeController', ['$scope', '$location', function($scope, $location) {
        $(document).ready(function(){
            $('#ja_JamesDiv').mouseover(function() {
                $(this).css('animation', 'square-to-circle 2s .5s infinite cubic-bezier(1,.015,.295,1.225) alternate');
            }).mouseout(function(){
                $(this).css('animation', 'none');
            });
            $('#ry_RyanDiv').mouseover(function() {
                $(this).css('animation', 'square-to-circle 2s .5s infinite cubic-bezier(1,.015,.295,1.225) alternate');
            }).mouseout(function(){
                $(this).css('animation', 'none');
            });
            $('#ji_JimDiv').mouseover(function() {
                $(this).css('animation', 'square-to-circle 2s .5s infinite cubic-bezier(1,.015,.295,1.225) alternate');
            }).mouseout(function(){
                $(this).css('animation', 'none');
            });
            $('#pa_PatrickDiv').mouseover(function() {
                $(this).css('animation', 'square-to-circle 2s .5s infinite cubic-bezier(1,.015,.295,1.225) alternate');
            }).mouseout(function(){
                $(this).css('animation', 'none');
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
