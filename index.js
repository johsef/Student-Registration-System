var express = require("express");
var app = express();
var session = require("express-session");
var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

app.use(cookieParser());

var public = path.join(__dirname, "public");
app.use("/", express.static(public));

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "somerandomstuffs",
  })
);
var sess;
var cook;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.redirect("/home");
});

app.route("/login").get((req, res) => {
    res.sendFile(__dirname + "/public/pages/Login.html");
  }).post((req, res, next) => {
    res.cookie("cookie", "admin", { maxAge: 300000000 });
    cook = req.cookies;
    sess = req.session;
    sess.username = req.body.username;
    sess.password = req.body.password;

    if (sess.username && cook) {
      var username = req.body.username,
        password = req.body.password;
      let mockedUsername = "admin";
      mockedPassword = "admin";
      if (username && password) {
        if (username === mockedUsername && password === mockedPassword) {
          setTimeout(function () {
            res.redirect("/home");
          }, 3000);
        } else {
          setTimeout(function () {
            res.redirect("/login");
          }, 1000);
        }
      }
    }
  });

app.get("/home", (req, res) => {
  cookie = req.cookies.cookie;
  if (cookie) {
    res.sendFile(__dirname + "/public/pages/Admin.html");
  } else {
    res.sendFile(__dirname + "/public/pages/Home.html");
  }
});

app.get("/customer", (req, res) => {
  res.sendFile(__dirname + "/public/pages/Customer.html");
});


app.get("/new-student", (req, res) => {
  cook = req.cookies.cookie;
  sess = req.session;
  if (sess && cook) {
    res.sendFile(__dirname + "/public/pages/NewUser.html");
  } else {
    res.status(404).send("Unauthorized");
    console.log(res);
  }
});

app.get("/logout", (req, res) => {
  setTimeout(function () {
    res.clearCookie("cookie");
    res.redirect("/");
  }, 1000);
});

app.use(function (req, res, next) {
  res.status(404).send("Page Not Found");
});

app.use(express.static(__dirname + "/public"));

app.listen(8000, () => {
  console.log("Express app listening on port 8000");
});
