const Ball=function(){
	const r= 20;
	let x= Math.floor(width/2);
	let y= Math.floor(height/2);
	let stepX = 5;
	let stepY = 2;
	let color = getColor();

	const reset = function(){
		x= Math.floor(width/2);
		y= Math.floor(height/2);
		stepX=5;
		stepX*=Math.round(Math.random())*2-1;
		stepY*=Math.round(Math.random())*2-1;
		
	}

	const edge = function(){
		if(x-r<=0 || x+r>=width) {
			color = getColor();
			stepX*=-1;
			
		}

		if(y-r<=0 || y+r>=height){
			color = getColor();
			stepY*=-1;
		}
	}

	const checkScore =function(){
		if (x - r <=0 && y>=Math.floor((height-150)/2) && y<=Math.floor((height-150)/2)+150) {
			reset();
			return 2;
		}
		if (x+r>=width && y>=Math.floor((height-150)/2) && y<=Math.floor((height-150)/2)+150) {
			reset();
			return 1;
		}
		return 0;
	}

	const move = function(){
		x += stepX;
		y += stepY;
		edge();
	}

	const collision = function(player){
		let dx = Math.abs(x - player.getX() - player.getW()/2);
		let dy = Math.abs(y - player.getY() - player.getH()/2);
		if (dx > player.getW() / 2 + r || dy > player.getH() / 2 + r) {
			return false;
		}
		if (dx <= player.getW() / 2 || dy<= player.getH() / 2){
			color = getColor();
			if (stepX>0) {
				stepX++;
			}else{
				stepX--;
			}
			stepX*=-1;
			return true;
		}
	}

	const draw = function(){
		ellipseMode(CENTER);
		noStroke();
		fill(color);
		ellipse(x,y,r*2,r*2);
	}

	return {
		draw, move, collision, checkScore,
	}
}