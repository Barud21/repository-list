// Load Node modules
var express = require("express");
// Initialise Express
var app = express();
// Render static files
app.use(express.static("public"));
// Port website will run on
var PORT = process.env.PORT || 8080;
app.listen(PORT);
