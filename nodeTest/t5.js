var fs = require('fs');

fs.readdir(process.argv[2], function (err,list) {
	if (err) {
		return console.log(err);
	}
	list.forEach(function(name){
		if(process.argv[3] === name.split('.')[1]) 
			console.log(name);
	});
});