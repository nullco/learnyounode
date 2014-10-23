var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var content = buffer.toString();
var lines = content.split('\n');
console.log(lines.length - 1);
