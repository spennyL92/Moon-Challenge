var r = 0;
var w = 255;
var circleX = 0;
var circleY = 400;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
	
	bloodMoon();
	
}

function bloodMoon(){
	
	r = map(mouseX, 0, 400, 0, 255);
	w = map(mouseX, 0, 400, 255, 0);
	
	fill(r, w, w); 
	ellipse(200, circleY, 80, 80);
	
	fill(0);
	ellipse(circleX, 200, 80, 80);
	
	circleX = circleX + .27
	circleY = circleY - .5 

	if (circleY < 200){
		
		circleY = 200;
	}
}
	