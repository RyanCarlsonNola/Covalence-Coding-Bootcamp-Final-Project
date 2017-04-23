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
    // .post(auth.isAdmin, function (req, res) {
    //     var u = req.body;
    //     utils.encryptPassword(u.password).then(function (hash) {
    //         procedures.post(u, hash).then(function (id) {
    //             res.send(id);
    //         }, function (err) {
    //             console.log(err);
    //             res.status(500).send(err);
    //         })
    //     });
    // });

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
            else {/*
                eSvc.sendEmail(user.email,
                "subject:",
                "body: yep you logged in"
                "test"
                );*/
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

// router.get('/generateHash/:pw', function(req, res) {
//     utils.encryptPassword(req.params.pw)
//     .then(function(hash) {
//         res.send(hash);
//     }, function(err) {
//         console.log(err);
//         res.sendStatus(500);
//     });
// })

//changed to all from get
router.all("*", auth.isLoggedIn);

router.get("/me", function (req, res) {
    res.send(req.user);
})

// router.get('/', auth.isAdmin, function (req, res) {
//     procedures.all().then(function (users) {
//         res.send(users);
//     }, function (err) {
//         console.log(err);
//         res.status(500).send(err);
//     })
// });

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
    // .delete(auth.isAdmin, function (req, res) {
    //     return procedures.destroy(req.params.id)
    //         .then(function (success) {
    //             res.sendStatus(201);
    //         }, function (err) {
    //             console.log(err);
    //             res.status(500).send(err);
    //         });
    // })
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

    // .post(auth.isAdmin, function (req, res) {
    //     var u = req.body;
    //     utils.encryptPassword(u.password).then(function (hash) {
    //         procedures.post(u, hash).then(function (id) {
    //             res.send(id);
    //         }, function (err) {
    //             console.log(err);
    //             res.status(500).send(err);
    //         })
    //     });
    // });