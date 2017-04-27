var express = require("express");
var bodyParser = require("body-parser");
var procedures = require("../procedures/users.proc");
var auth = require("../middleware/auth.mw");
var utils = require("../middleware/utils");
var passport = require("passport");

var router = express.Router();

router.route("/")
    .get(function (req, res) {
        return procedures.all()
            .then(function (users) {
                res.send(users);
            }, function (err) {
                console.log(err);
                res.status(500).send(err);
            });
    })

router.post('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            console.log(err); return res.sendStatus(500);
        }
        if (!user) {
            return res.status(401).send(info);
        }
        req.logIn(user, function (err) {
            if (err) { return res.sendStatus(500); }
            else {
                return res.send(user); 
            }
        });
    })(req, res, next);
});

router.get("/logout", function (req, res) {
    req.session.destroy(function () {
        req.logOut();
        res.sendStatus(204);
    })
})

router.all("*", auth.isLoggedIn);

router.get("/me", function (req, res) {
    res.send(req.user);
})

router.route("/:id")
    .get( function (req, res) {
        return procedures.read(req.params.id)
            .then(function (success) {
                res.send(success);
            }, function (err) {
                console.log(err);
                res.status(500).send(err);
            });
    })

    .put(auth.isAdmin, function (req, res) {
        utils.encryptPassword(req.body.password).then(function(hash) {
        return procedures.update(req.params.id, hash)
            .then(function (success) {
                res.sendStatus(204);
            }, function (err) {
                console.log(err);
                res.status(500).send(err);
            })
        })
    })

module.exports = router;
