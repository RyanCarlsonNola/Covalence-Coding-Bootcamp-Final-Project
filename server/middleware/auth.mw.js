exports.isLoggedIn = function(req, res, next) {
    if(req.user) {
        next();
    } else {
        res.sendStatus(401);
        // next(new Error('Not Authorized'))
    }
}

exports.isAdmin = function (req, res, next) {
    if (req.user.role === 'admin'){
        next();
    } else {
        res.sendStatus(401);
    }
}