angular.module('CODEocalypse.factories', [])

    // .factory('Users', ['$resource', function ($resource) {
    //     return $resource("http://localhost:3000/api/users/me");
    // }])

    .factory('User', ['$resource', function ($resource) {
        return $resource("http://localhost:3000/api/users/:id", { id: "@id" }, {
            "update": { method: "PUT" }
            // "get": {method: "GET" }
        })
    }]);