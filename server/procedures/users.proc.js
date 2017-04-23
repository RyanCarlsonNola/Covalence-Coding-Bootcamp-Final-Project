var db = require("../config/db");

exports.all = function() {
    return db.rows('getUsers', [])
}

exports.read = function(user) {
    return db.row('getUser', [user]);
}

exports.update = function(id, hash) {
    return db.empty("updatePassword", [id, hash]);
}

exports.readByEmail = function(email) {
    return db.row('getUserByEmail', [email]);
}