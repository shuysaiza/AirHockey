const Paddle = function(player){
	const w = 20;
	const h = 100;
	const p = player;
	let c = getColor();
	let x = p === 1 ? 0 : width - w
	let limitL = p === 1 ? 0 : (width/2)+w/2
	let limitR = p === 1 ? (width/2-w)-w/2 : width-w
	const speed = 8;
	const UP = -1;
	const DOWN = 1;
	const LEFT = -1;
	const RIGHT =1;
	let y = Math.floor((height-h)/2);
	let score = 0;

	const getX = function (){
		return x;
	}

	const getY = function(){
		return y;
	}

	const getW = function (){
		return w;
	}

	const getH = function (){
		return h;
	}

	const getScore = function(){
		return score;
	}

	const moveY = function(dir){
		if (edgeY(dir)) {
			y+=(speed*dir);
		}		
	}

	const changeColor = function(){
		c=getColor();
	}

	const moveX = function(dir){
		if (edgeX(dir)) {
			x+=(speed*dir);
		}		
	}

	const edgeY = function(dir){
		return(dir === UP && y > 0 || dir === DOWN && y < height - h);
	}

	const edgeX =function(dir){
		return(dir === LEFT && x > limitL || dir === RIGHT && x < limitR);
	}

	const updateScore = function(){
		score++;
	}

	const draw =function(){
		noStroke();
		rectMode(CORNER);
		fill(c);
		rect(x,y,w,h);
	}

	return {
		draw,
		moveY,
		moveX,
		getX,
		getY,
		getH,
		getW,
		getScore,
		updateScore,
		changeColor,
	}
}