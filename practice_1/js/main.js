// Code goes here

var canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d');

/*
ctx.beginPath();
ctx.rect(0, 0, 800, 400);
ctx.lineWidth = 10;
ctx.strokeStyle = '#000';
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.stroke();
*/

var imageObj = new Image();
imageObj.onload = function() {
	var pattern = ctx.createPattern(imageObj, 'repeat');
	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = pattern;
 	ctx.fill();

 	ctx.beginPath();
		ctx.lineWidth = 5;
		ctx.strokeStyle = '#000';

		ctx.moveTo(150, 0);
		ctx.lineTo(150, 460);

		ctx.moveTo(305, 0);
		ctx.lineTo(305, 460);

		ctx.moveTo(0, 150);
		ctx.lineTo(460, 150);

		ctx.moveTo(0, 305);
		ctx.lineTo(460, 305);


	ctx.stroke();

 	ctx.beginPath();
 		ctx.lineWidth = 5;
		ctx.lineCap = 'round';
		ctx.strokeStyle = 'blue';

		/* First X*/
		ctx.moveTo(25, 25);		
		ctx.lineTo(125, 125);

		ctx.moveTo(125, 25);
		ctx.lineTo(25, 125);

		/* Second X*/
		ctx.moveTo(335, 335);		
		ctx.lineTo(435, 435);

		ctx.moveTo(435, 335);
		ctx.lineTo(335, 435);
	ctx.stroke();

	ctx.beginPath();
		ctx.arc(230, 230, 50, 0, 2*Math.PI);
		ctx.strokeStyle = 'red';
	ctx.stroke();


};
imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/wood-pattern.png';



/*===========================================================*/


var canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d');	
var imageData2 = ctx2.getImageData(0, 0, canvas.width, canvas.height);
var image2 = new Image();

image2.onload = function(){
	ctx2.beginPath();
		ctx2.rect(0, 0, 800, 600);
		ctx2.lineWidth = 10;
		ctx2.strokeStyle = '#000';
	ctx2.stroke();
	//ctx2.drawImage(image2, 100, 100, 100, 100, 200, 150, 500, 300);
	ctx2.drawImage(image2, 0, 0, 800, 600);
	doTheOtherStuff();
};
image2.src = 'images/j.png';

var butt = document.getElementsByTagName('button')[0];
butt.addEventListener('click', function() {
    var container = document.getElementsByClassName('wrap')[0],
    image = document.createElement('img');
	image.src = canvas2.toDataURL();
    container.appendChild(image)
});

function doTheOtherStuff(){
	var imageData = ctx2.getImageData(0, 0, 800, 600),
	i;

	for(i=1; i < 800*600*4; i+=5){
		imageData.data[i] = Math.random() * 255;
		imageData.data[i+1] = Math.random() * 255;
		imageData.data[i+2] = Math.random() * 255;
		imageData.data[i+3] = Math.random() * 255;
	}

	ctx2.putImageData(imageData, 0, 0);
	//console.log(imageData, 0, 0);

	var test = getCanvasPixel(100, 100, ctx2, canvas2);
	console.log(test);
}

function getCanvasPixel(x,y, ctxL, canvasL) {
	if (!ctxL) {ctxL = ctx}
    if (!canvasL) {canvasL = canvas}
    var width = canvasL.width,
    	height = canvasL.height,
    	data = getData(ctxL, canvasL),
    	offset = ((width * y) + x) * 4;
	return [data[offset], data[offset + 1], data[offset + 2], data[offset + 3]]
}


















