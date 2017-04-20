var db = require("../config/db");

exports.all = function() {
    return db.rows('getUsers', [])
}

exports.read = function(id) {
    return db.row('getUser', [id]);
}

exports.update = function(id, password) {
    return db.empty("updatePassword", [id, password]);
}