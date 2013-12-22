//Goo library test

window.onload = function() {
  var g = new Goo({
	  container: 'container',
	  fullscreen: true,
	  userData: {startAngle: 0},
	  onDraw: function(g) {
	    var canvas = g.canvas;
	    var ctx = g.ctx;

	  },
	  onMouseDown: function(g) {
	    g.userData.pressed = true;
	    g.ctx.beginPath()
	    g.ctx.moveTo(g.mouseX, g.mouseY)
	  },
	  onMouseMove: function(g) {
	    if (g.userData.pressed) {
	        g.ctx.lineTo(g.mouseX, g.mouseY, 1, 1)
	        g.ctx.stroke()
	    }
	  },
	  onMouseUp: function(g) {
	    g.userData.pressed = false;
	  }
  });
};