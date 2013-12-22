var fs = require('fs');

var result = [];

module.exports = function DirFilt(dir, filter, callback) {
    var spec = new RegExp('\.' + process.argv[3] + '$');
    fs.readdir(dir, function (err, list) {
        if(err) 
            return callback(err, result);

        list.forEach(function(name){
			if(filter === name.split('.')[1]) 
				result.push(name);
		});
        return callback(null, result);
    });
}