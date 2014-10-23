var http = require('http')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
        var collect = '';
        response.setEncoding('utf8');
        response.on('data', function (data) {
            collect += data;
        });
        response.on('end', function () {
            results[index] = collect
            count++
            if (count == 3) {
                printResults()
            }
        })
    })
}

for (var i = 0; i < 3; i++)
  httpGet(i)