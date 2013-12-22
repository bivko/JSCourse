var mymodule = require('./m6.js');

var dir = process.argv[2],
	filter = process.argv[3];

mymodule(dir, filter, function(err, value){
    value.forEach(function (file) {
        console.log(file);
    })
});