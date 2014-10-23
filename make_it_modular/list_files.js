module.exports = function (dir, ext, callback) {
    var fs = require('fs');
    var path = require('path');
    fs.readdir(dir, function (err, data) {
        if (err) {
            return callback(err);
        }
        var files = [];
        data.forEach(function (file) {
            if (path.extname(file) === '.' + ext) {
                files.push(file);
            }
        });
        callback(null, files);
    });
}