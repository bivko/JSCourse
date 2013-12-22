var http = require('http'),
	bl = require('bl');

http.get(process.argv[2], function(r){
	r.on('error', console.error);
	r.pipe(bl(function(err, data){
		console.log(data.toString().length);
		console.log(data.toString());
	}))
});