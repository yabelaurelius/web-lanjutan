const http = require('http');
const fs = require('fs');



http
    .createServer(function (req, res) {
        fs.readFile("index.html", (err, data) => {
            if (err) throw err;
            res.writeHead(200, {"Content-type":"text/html"});
            res.write(data);
            res.end();
        });
    }).listen(3000);