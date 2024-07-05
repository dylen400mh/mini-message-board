var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("form");
});

router.post("/", (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = router;
