var app = angular.module("CODEocalypse.services", []);

app.service('UserService', ['$http', '$location', function($http, $location) {
    
    var user;
    var pathUser;
    
    this.isLoggedIn = function() {
        if(!user) {
            return false;
        }
        return true;
    }

    this.requireLogin = function() {
        if(!this.isLoggedIn()) {
            var current = $location.path();
            $location.path('/').search('p', current);
        }
    }

    this.login = function(email, password) {
        return $http({
            method: "POST",
            url: "http://CODEocalypse.us-east-1.elasticbeanstalk.com/api/users/login",
            data: {email, password}
        }).then(function(success) {
            user = success.data;
            pathUser = success.data.user;
            return success.data;
        })
    }

    this.logout = function() {
        return $http({
            method: "GET",
            url: "http://CODEocalypse.us-east-1.elasticbeanstalk.com/api/users/logout"
        }).then(function(success) {
            user = undefined;
            pathUser = undefined;
        })
    }

    this.me = function() {
        if(user) {
            return Promise.resolve(user);
        } else {
            return $http({
                method: "GET", 
                url: "http://CODEocalypse.us-east-1.elasticbeanstalk.com/api/users/me"
            }).then(function(success) {
                user = success.data;
                return success.data;
            })
        }
    }
}])
