const express = require('express');
var app = express();
const logger = require('morgan');

app.use(logger("dev"));

app.get("/api/cari/", function(req, res) {
    var nama = req.query.nama;
    console.log(`nama : ${nama}`);
    var umur = req.query.umur;
    console.log(`umur : ${umur}`);
    res.send(req.query);
});

app.get("/api/:nim/:nama", function(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.send(req.params);
});

app.listen(4000, function() {
    console.log("Server run");
});