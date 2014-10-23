var list_files = require('./list_files');
list_files(process.argv[2], process.argv[3], function (err, data){
    if (err) {
        console.log(err);
    } else {
        data.forEach(function (file) {
            console.log(file);
        });
    }
});