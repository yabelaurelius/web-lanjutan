const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');

app.use(logger("dev"));

app.use(express.static(__dirname+"/public"));

app.get("/api/:nim/:nama", function(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.send(req.params);
});

var data = bodyParser.urlencoded({extended:false});
app.post("/api/datamhs", data, function(req, res) {
    res.send(req.body);
});

app.listen(4000, function() {
    console.log("Server run");
});