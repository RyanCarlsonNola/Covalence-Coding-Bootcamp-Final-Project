var db = require("../config/db");

exports.all = function() {
    return db.rows('getUsers', [])
}

exports.readByEmail = function(user) {
    return db.row('getUser', [user]);
}

exports.update = function(user, hash) {
    return db.empty("updatePassword", [user, hash]);
}
