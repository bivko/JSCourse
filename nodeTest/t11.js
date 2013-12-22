var http = require('http'),
	fs = require('fs');

var file = fs.createReadStream(process.argv[3], {encoding: 'utf8'});
	
var server = http.createServer(function(request, response){
		
});
server.listen(8000);