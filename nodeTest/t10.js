var net = require('net');

var server = net.createServer(function(socket){
	var data = new Date(),
		r = data.getFullYear()+"-"+(data.getMonth()+1)+"-"+data.getDate()+" "+data.getHours()+":"+data.getMinutes();

	return socket.end(r + '\n');
});
server.listen(process.argv[2]);
console.log(111);