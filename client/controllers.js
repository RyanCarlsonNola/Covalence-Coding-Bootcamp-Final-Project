angular.module('CODEocalypse.controllers', [])

    .controller('WelcomeController', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {
        UserService.me().then(function (success) {
            redirect();
        });
        function redirect() {
            var dest = $location.search().p;
            if (!dest) { dest = '/'; }
            $location.path(dest).search('p', null);
        }

        $scope.login = function () {
            UserService.login($scope.email, $scope.password).then(function () {
                redirect();
            }, function (err) {
                console.log(err);
            })
        }

        $(document).ready(function(){
            $( "#passwordBox" ).hide();
            $( "#passwordRemove" ).hide();
            $('#ja_JamesDiv').mouseover(function() {
                $(this).css('animation', 'square-to-circle 2s .5s infinite cubic-bezier(1,.015,.295,1.225) alternate');
                $('#ja_mainWelcome').css('background-image','url(images/heaven.jpg)');
            }).mouseout(function(){
                $(this).css('animation', 'none');
                $('#ja_mainWelcome').css('background-image','none');
            });
            $('#ry_RyanDiv').mouseover(function() {
                $(this).css('animation', 'square-to-circle 2s .5s infinite cubic-bezier(1,.015,.295,1.225) alternate');
                $('#ry_mainWelcome').css('background-image','url()');
            }).mouseout(function(){
                $(this).css('animation', 'none');
                $('#ry_mainWelcome').css('background-image','none');
            });
            $('#ji_JimDiv').mouseover(function() {
                $(this).css('animation', 'square-to-circle 2s .5s infinite cubic-bezier(1,.015,.295,1.225) alternate');
                $('#ji_mainWelcome').css('background-image','url(images/theGreatWavesmall.jpg');
            }).mouseout(function(){
                $(this).css('animation', 'none');
                $('#ji_mainWelcome').css('background-image','none');
            });
            $('#pa_PatrickDiv').mouseover(function() {
                $(this).css('animation', 'square-to-circle 2s .5s infinite cubic-bezier(1,.015,.295,1.225) alternate');
                $('#pa_mainWelcome').css('background-image','none');
            }).mouseout(function(){
                $(this).css('animation', 'none');
                $('#pa_mainWelcome').css('background-image','none');
            });
            $('.divButton').click(function(){
                $("#passwordBox").show();
                $("#passwordRemove").show();
            });
            $('#passwordRemove').click(function(){
                $("#passwordBox").hide();
                $("#passwordRemove").hide();
            });

        });//document.ready
    }])//WelcomeController
    
    .controller('JamesWelController', ['$scope', '$location', 'User', 'UserService', '$routeParams', function($scope, $location, User, UserService, $routeParams) {
        // UserService.requireLogin();
        $scope.users = User.query();

        $scope.updateUser = function(id) {
            User.get({ id: id}, function(success){
                success.password = $('#ja_password').val();
                success.$update(function(){
                    $scope.users = User.query();
                })
            });
        }

        $scope.logOutUser = function() {
            UserService.logout()
                .then(function(){
                    $location.path('/');
                }, function (err){
                    console.log(err)
                })
        }

        $(document).ready(function(){
            $(".dropdown-button").dropdown();
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
