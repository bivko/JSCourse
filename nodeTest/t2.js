var result = 0,
	arg = process.argv;

for(var i=2; i < arg.length; i++){
	result += Number(arg[i]);
}

console.log(result);