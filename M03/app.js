const express = require('express');
const server = express();

var logger = require('morgan');

server.use(logger('dev'));
server.use(express.static(__dirname+"/public"));

server.listen(4000, function() {
    console.log("Server run!");
});