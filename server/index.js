var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "../client")));

app.listen(process.env.PORT || 3000);