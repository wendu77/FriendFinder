var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express(); // starts the express app

// Serve static content for the app from the public directory in the application directory.
app.use(express.static(process.cwd() + "./app/public"));

var PORT = process.env.PORT || 8080; // hooks up to port 8080

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var apiRoutes require("/app/routing/apiRoutes.js");
var htmlRoutes = require("/app/routing/htmlRoutes.js");

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
