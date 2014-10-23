var fs = require('fs');
var buffer = fs.readFile(process.argv[2], function(err, data){
	if (!err) {
		var lines = data.toString().split('\n');
		console.log(lines.length - 1);
	}
});
