var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    if (req.method == 'GET') {
        var urlParsed = url.parse(req.url);
        if (urlParsed['pathname'] == '/api/parsetime') {
            res.writeHead(200, {'Content-Type': 'application/json'});
            console.log(urlParsed);
            var iso = (urlParsed['query']).split('=')[1];
            var date = new Date(iso);
            var output = {
                'hour': date.getHours(),
                'minute': date.getMinutes(),
                'second': date.getSeconds()
            }
            res.end(JSON.stringify(output));
        }
        else if (urlParsed['pathname'] == '/api/unixtime') {
            res.writeHead(200, {'Content-Type': 'application/json'});
            var iso = (urlParsed['query']).split('=')[1];
            var date = new Date(iso);
            var output = {
                'unixtime': date.getTime(),
            }
            res.end(JSON.stringify(output))
        }
        else {
            res.end('Invalid path');
        }
    } else {
        res.end('Invalid method');
    }
});
server.listen(process.argv[2]);