angular.module('CODEocalypse.controllers', [])

    .controller('WelcomeController', ['$scope', '$location', 'UserService', function ($scope, $location, UserService) {
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
                $location.path('/' + $scope.email);
            }, function (err) {
                console.log(err);
            })
        }

        $(document).ready(function () {
            $("#passwordBox").hide();
            $("#passwordRemove").hide();
            $("#userBox").hide();
            $("#loginButton").hide();

            $('#ja_JamesDiv').mouseover(function () {
                $(this).css('animation', 'square-to-circle 2s .5s infinite cubic-bezier(1,.015,.295,1.225) alternate');
            }).mouseout(function () {
                $(this).css('animation', 'none');
            });
            $('#ry_RyanDiv').mouseover(function () {
                $(this).css('animation', 'square-to-circle 2s .5s infinite cubic-bezier(1,.015,.295,1.225) alternate');
            }).mouseout(function () {
                $(this).css('animation', 'none');
            });
            $('#ji_JimDiv').mouseover(function () {
                $(this).css('animation', 'square-to-circle 2s .5s infinite cubic-bezier(1,.015,.295,1.225) alternate');
            }).mouseout(function () {
                $(this).css('animation', 'none');
            });
            $('#pa_PatrickDiv').mouseover(function () {
                $(this).css('animation', 'square-to-circle 2s .5s infinite cubic-bezier(1,.015,.295,1.225) alternate');
            }).mouseout(function () {
                $(this).css('animation', 'none');
            });
            $('#ja_JamesDiv').click(function () {
                $('#ja_mainWelcome').css('background-image', 'url(images/heaven.jpg)');
                $('#ji_mainWelcome').css('background-image', 'none');
                $('#ry_mainWelcome').css('background-image', 'none');
                $('#pa_mainWelcome').css('background-image', 'none');
                $("#passwordBox").show();
                $("#passwordRemove").show();
                $('.userLogin').val('james');
                $scope.email = 'james';
            });
            $('#ji_JimDiv').click(function () {
                $('#ja_mainWelcome').css('background-image', 'none');
                $('#ji_mainWelcome').css('background-image', 'url(images/theGreatWavesmall.jpg)');
                $('#ry_mainWelcome').css('background-image', 'none');
                $('#pa_mainWelcome').css('background-image', 'none');
                $("#passwordBox").show();
                $("#passwordRemove").show();
                $('.userLogin').val('jim');
                $scope.email = 'jim';
            });
            $('#pa_PatrickDiv').click(function () {
                $('#ja_mainWelcome').css('background-image', 'none');
                $('#ji_mainWelcome').css('background-image', 'none');
                $('#ry_mainWelcome').css('background-image', 'none');
                $('#pa_mainWelcome').css('background-image', 'url(images/patrojo.jpg)');
                $("#passwordBox").show();
                $("#passwordRemove").show();
                $('.userLogin').val('patrick');
                $scope.email = 'patrick';
            });
            $('#ry_RyanDiv').click(function () {
                $('#ja_mainWelcome').css('background-image', 'none');
                $('#ji_mainWelcome').css('background-image', 'none');
                $('#ry_mainWelcome').css('background-image', 'url(images/londontowerbridge.jpg)');
                $('#pa_mainWelcome').css('background-image', 'none');
                $("#passwordBox").show();
                $("#passwordRemove").show();
                $('.userLogin').val('ryan');
                $scope.email = 'ryan';
            });
            $('#passwordRemove').click(function () {
                $("#passwordBox").hide();
                $("#passwordRemove").hide();
            });

        });//document.ready
    }])//WelcomeController

    .controller('JamesWelController', ['$scope', '$location', 'User', 'UserService', '$routeParams', function ($scope, $location, User, UserService, $routeParams) {
        UserService.requireLogin();
        $scope.users = User.query();

        $scope.updateUser = function (id) {
            User.get({ id: id }, function (success) {
                success.password = $('.ja_password').val();
                success.$update(function () {
                    $scope.users = User.query();
                })
                
                Materialize.toast('password successfully changed', 2000)
                setTimeout(function(){
                    location.reload();
                }, 2000); 
            });
        }

        $scope.logOutUser = function () {
            UserService.logout()
                .then(function () {
                    $location.path('/');
                }, function (err) {
                    console.log(err)
                })
        }

        $(document).ready(function () {

        });
    }])

    .controller('JamesEduController', ['$scope', '$location', 'User', 'UserService', '$routeParams', function ($scope, $location, User, UserService, $routeParams) {
        UserService.requireLogin();
        $scope.users = User.query();

        $scope.updateUser = function (id) {
            User.get({ id: id }, function (success) {
                success.password = $('.ja_password').val();
                success.$update(function () {
                    $scope.users = User.query();
                })
                
                Materialize.toast('password successfully changed', 2000)
                setTimeout(function(){
                    location.reload();
                }, 2000); 
            });
        }

        $scope.logOutUser = function () {
            UserService.logout()
                .then(function () {
                    $location.path('/');
                }, function (err) {
                    console.log(err)
                })
        }

        $(document).ready(function () {

        });

    }])

    .controller('JamesSWController', ['$scope', '$location', 'User', 'UserService', '$routeParams', function ($scope, $location, User, UserService, $routeParams) {
        UserService.requireLogin();
        $scope.users = User.query();

        $scope.updateUser = function (id) {
            User.get({ id: id }, function (success) {
                success.password = $('.ja_password').val();
                success.$update(function () {
                    $scope.users = User.query();
                })
                
                Materialize.toast('password successfully changed', 2000)
                setTimeout(function(){
                    location.reload();
                }, 2000); 
            });
        }

        $scope.logOutUser = function () {
            UserService.logout()
                .then(function () {
                    $location.path('/');
                }, function (err) {
                    console.log(err)
                })
        }

        $(document).ready(function () {
            var options = [
                {selector: '#staggered-test', offset: 50, callback: function(el) {
                    
                } },
                {selector: '#staggered-test', offset: 205, callback: function(el) {
                    
                } },
                {selector: '#staggered-test', offset: 400, callback: function(el) {
                    Materialize.showStaggeredList($(el));
                } },
                {selector: '#image-test', offset: 500, callback: function(el) {
                    Materialize.fadeInImage($(el));
                } }
            ];
            Materialize.scrollFire(options);
        });

    }])

    .controller('JamesABController', ['$scope', '$location', 'User', 'UserService', '$routeParams', function ($scope, $location, User, UserService, $routeParams) {
        UserService.requireLogin();
        $scope.users = User.query();

        $scope.updateUser = function (id) {
            User.get({ id: id }, function (success) {
                success.password = $('.ja_password').val();
                success.$update(function () {
                    $scope.users = User.query();
                })
                
                Materialize.toast('password successfully changed', 2000)
                setTimeout(function(){
                    location.reload();
                }, 2000); 
            });
        }

        $scope.logOutUser = function () {
            UserService.logout()
                .then(function () {
                    $location.path('/');
                }, function (err) {
                    console.log(err)
                })
        }

        $(document).ready(function () {
            $('.button-collapse').sideNav();
            $('.parallax').parallax();
        });

    }])

    .controller('JimWelController', ['$scope', '$location', 'UserService', 'User', '$routeParams', function ($scope, $location, UserService, User, $routeParams) {
        UserService.requireLogin();
        $scope.users = User.query();

        $scope.updateUser = function (id) {
            User.get({ id: id }, function (success) {
                success.password = $('.ji_password').val();
                success.$update(function () {
                    $scope.users = User.query();
                })
                
                Materialize.toast('password successfully changed', 2000)
                setTimeout(function(){
                    location.reload();
                }, 2000); 
            });
        }

        $scope.logOutUser = function () {
            UserService.logout()
                .then(function () {
                    $location.path('/');
                }, function (err) {
                    console.log(err)
                })
        }
    }])

    .controller('JimAutoController', ['$scope', '$location', 'User', 'UserService', '$routeParams', function ($scope, $location, User, UserService, $routeParams) {
        UserService.requireLogin();
        $scope.users = User.query();

        $scope.updateUser = function (id) {
            User.get({ id: id }, function (success) {
                success.password = $('.ji_password').val();
                success.$update(function () {
                    $scope.users = User.query();
                })
                
                Materialize.toast('password successfully changed', 2000)
                setTimeout(function(){
                    location.reload();
                }, 2000); 
            });
        }

        $scope.logOutUser = function () {
            UserService.logout()
                .then(function () {
                    $location.path('/');
                }, function (err) {
                    console.log(err)
                })
        }

        $(document).ready(function () {

        });

    }])

    .controller('RyanWelController', ['$scope', '$location', 'UserService', 'User', '$routeParams', function ($scope, $location, UserService, User, $routeParams) {
        UserService.requireLogin();
        $scope.users = User.query();

        $scope.updateUser = function (id) {
            User.get({ id: id }, function (success) {
                success.password = $('.ry_password').val();
                success.$update(function () {
                    $scope.users = User.query();
                })
                
                Materialize.toast('password successfully changed', 2000)
                setTimeout(function(){
                    location.reload();
                }, 2000); 
            });
        }

        $scope.logOutUser = function () {
            UserService.logout()
                .then(function () {
                    $location.path('/');
                }, function (err) {
                    console.log(err)
                })
        }

        $(document).ready(function () {
            $('.carousel').carousel();
        });
    }])

    .controller('PatrickWelController', ['$scope', '$location', 'UserService', 'User', '$routeParams', function ($scope, $location, UserService, User, $routeParams) {
        UserService.requireLogin();
        $scope.users = User.query();

        $scope.logOutUser = function () {
            UserService.logout()
                .then(function () {
                    $location.path('/');
                }, function (err) {
                    console.log(err)
                })
        }

        $(document).ready(function () {
            $("#pa_now-list").hide();
            $("#pa_now-btn").click(function () {
                $("#pa_now-list").slideToggle();
            });
            $("#pa_then-list").hide();
            $("#pa_then-btn").click(function () {
                $("#pa_then-list").slideToggle();
            });

            
    $('.collapsible').collapsible();
       
        });
    }])
