var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

// function urlChange() {
//   console.log("test");
//   window.location.href = "/new";
// }

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
    // urlChangeFun: urlChange,
  });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "Mini Messageboard", messages: messages });
});

router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.userMsg,
    user: req.body.userName,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
