angular.module('CODEocalypse.factories', [])

    .factory('User', ['$resource', function ($resource) {
        return $resource("http://CODEocalypse.us-east-1.elasticbeanstalk.com/api/users/:id", { id: "@id" }, {
            "update": { method: "PUT" }
        })
    }]);