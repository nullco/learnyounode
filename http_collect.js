var http = require('http');

http.get(process.argv[2], function (response) {
    var collect = '';
    response.setEncoding('utf8');
    response.on('data', function (data) {
        collect += data;
    });
    response.on('end', function () {
        console.log(collect.length);
        console.log(collect);
    })
})