let ball;
let p1;
let p2; 
let lineColor=0;
let backColor=0;
const ballCenter=40;

function setup() { 
	createCanvas(windowWidth,windowHeight);
	p1 = new Paddle(1);
	p2 = new Paddle(2);
	ball = new Ball();
	lineColor=getColor();
	backColor=getColor();
}

function draw() {
	//noStroke();
	background(backColor);	
	drawDelimiter();
	drawGoals();
	ball.draw();
	ball.move();
	if (ball.collision(p1) || ball.collision(p2)) {
		ball.move();
	}
	const checkScore = ball.checkScore();
	if (checkScore===2) {
		p2.updateScore();
	}else if (checkScore===1) {
		p1.updateScore();
	}
	p1.draw();
	p2.draw();
	if (keyIsPressed) {
		if (keyIsDown(87)) {
			p1.moveY(-1);
		}
		if (keyIsDown(83)){
			p1.moveY(1);
		}
		if (keyIsDown(UP_ARROW)){
			p2.moveY(-1);
		}
		if (keyIsDown(DOWN_ARROW)){
			p2.moveY(1);
		}
		if (keyIsDown(65)) {
			p1.moveX(-1);
		}
		if (keyIsDown(68)) {
			p1.moveX(1);
		}
		if (keyIsDown(LEFT_ARROW)) {
			p2.moveX(-1);
		}
		if (keyIsDown(RIGHT_ARROW)) {
			p2.moveX(1);
		}
	}
	showScore();
}

function mouseClicked(){

}

const drawDelimiter= function(){
	ellipseMode(CENTER);
	stroke(lineColor);
	noFill();
	ellipse(Math.floor(width/2),Math.floor(height/2),ballCenter*2,ballCenter*2)
	ellipse(Math.floor(width/2),Math.floor(height/2),ballCenter+20,ballCenter+20)
	strokeWeight(4);
	for (var i = 0 ; i <= height; i+=10) {
		if (i<height/2-ballCenter || i>height/2+ballCenter) {
			point(width/2,i);
		}
	}
	line(width/2-ballCenter*2,0,width/2-ballCenter*2,height);
	line(width/2+ballCenter*2,0,width/2+ballCenter*2,height);
}

const drawGoals = function(){
	fill(lineColor);
	rect(0,Math.floor((height-150)/2),20,150);
	rect(width-20,Math.floor((height-150)/2),20,150)
}

const showScore = function(){
	fill(lineColor);
	textSize(50);
	text(p1.getScore(),width*0.25,70);
	text(p2.getScore(),width*0.75,70);
}
function keyPressed(){
	switch (keyCode){
		case ENTER:
			noLoop();
		break;
		case 32:
			loop();
		break;
		case CONTROL:
			lineColor=getColor();
			backColor=getColor();
			p1.changeColor();
			p2.changeColor();
		break;
	}
}
const getColor= function(){

	return color(Math.floor(random(0,255)),Math.floor(random(0,255)),Math.floor(random(0,255)));
}