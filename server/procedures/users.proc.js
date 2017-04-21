var db = require("../config/db");

exports.all = function() {
    return db.rows('getUsers', [])
}

exports.readByEmail = function(email) {
    return db.row('getUser', [email]);
}

exports.update = function(user, hash) {
    return db.empty("updatePassword", [user, hash]);
}
