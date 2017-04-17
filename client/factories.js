angular.module('CODEocalypse.factories', [])

    .factory('', ['$resource', function ($resource) {
        return $resource("http://localhost:3000/api/");
    }])