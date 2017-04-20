var db = require("../config/db");

exports.read = function(id) {
    return db.row('getUser(?)', [id]);
}

exports.update = function(id, password) {
    return db.empty("updatePassword(?, ?)", [id, password]);
}