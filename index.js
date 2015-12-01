//Dependencies
var express = require("express");
var session = require("express-session");
var passport = require("passport");
var GithubStrategy = require("passport-github");
var port = 3000;
var keys = require("./keys");

var app = express();



//Middleware
app.use(express.static(__dirname + "/public"));

app.use(session({secret: "This is my secret"}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GithubStrategy ({
	clientID: keys.githubID,
	clientSecret: keys.githubSecret,
	callbackUrl: "http://localhost:3000/auth/github/callback"
}));

var requireAuth = function(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(403).end();
  }
  return next();
};



//Endpoints
app.get("/auth/github", passport.authenticate("github"));

app.get("/auth/github/callback", passport.authenticate("github", {
	successRedirect: "/#/home",
	failureRedirect: "/"
}));


app.get("/api/github/following", function (req, res) {
	
});









app.listen(port, function () {
	console.log("Listening on port " + port);
});