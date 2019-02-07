var r = 0;
var w = 255;
var days = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
	
	//enter in a number between 1 and 30 to simulate phase 
	bloodMoon(15);
	
}

function bloodMoon(moonPhase){
	
	//move the mouse to the right to summon the bloodmoon \"/
	r = map(mouseX, 0, 400, 0, 255);
	w = map(mouseX, 0, 400, 255, 0);
	
	let phase = map(moonPhase, 1, 30, 120, 200);
	
	fill(r, w, w); 
	ellipse(200, 200, 80, 80);
	
	fill(0);
	ellipse(phase, 200, 80, 80);
	
}