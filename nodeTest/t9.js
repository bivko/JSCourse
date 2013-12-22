var http = require('http'),
	bl = require('bl'),
	result = [],
	finished = 0;

function httpGet(i){
	http.get(process.argv[i+2], function(r){
		r.on('error', console.error);
		r.pipe(bl(function(err, data){
			result[i] = data.toString();
		}))
		r.on('end', function(){
			finished ++;
			checkForEnd(finished);
		});
	});
}

function checkForEnd(f){
	if(f==3){
		result.forEach(function(r){
			console.log(r);
		})
	}	
}

for(var i=0; i<3; i++){
	httpGet(i);
}