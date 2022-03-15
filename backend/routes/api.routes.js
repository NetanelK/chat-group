const router = require("express").Router();

router
    .route("/")
    .get((req, res) => res.send("hi from res"))
    .post((req, res) => res.send("hi from post"));

module.exports = router;
