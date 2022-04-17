console.log("HEY Hii! Pardhu !!!");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

let drawline=(startX, startY, endX, endY) =>{
	ctx.beginPath();
	ctx.moveTo(startX, startY);
	ctx.lineTo(endX, endY);
	ctx.stroke();
}

let drawFace=(centerX, centerY, radius, startingangle, endingangle, color) =>{
	ctx.beginPath();
	ctx.arc(centerX, centerY, radius, startingangle, endingangle);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.stroke();
}

//head
drawFace(250, 250, 150, 0, 2 * Math.PI, "transparent");


//eyes
let drawEyes=(radius, color) =>{
	//left eye
	drawFace(300, 200, radius, 0, 2 * Math.PI, color);
	//right eye
	drawFace(200, 200, radius, 0, 2 * Math.PI, color);
}

//nose
let drawNose=(type) =>{
	if(type == "crooked"){
		drawline(230, 250, 250, 225);
		drawline(270, 250, 250, 225);
	}else{
		drawFace(250, 250, 20, 0, Math.PI, "lightpink");
		drawline(230, 250, 250, 225);
		drawline(270, 250, 250, 225);
	}
}

//mouth
let drawmouth=(expression) =>{
	if(expression == "surprise"){
		drawFace(250, 325, 40, 0, 2 * Math.PI, "greyred");
	}else if(expression == "happy"){
		drawFace(250, 300, 40, 0, Math.PI, "transparent");
	}else{
		drawline(200, 325, 300, 325);
	}
}

let getRndInteger =(min, max)=>{
	return Math.floor(Math.random()*(max-min+1))+min;
}

let drawRandomFace =() => {
	let eyeRadius=getRndInteger(1,25);
	let eyecolor=["red", "brown", "black"][getRndInteger(0,2)];
	let nosetype=["crooked", "flat"][getRndInteger(0,1)];
	let expression=["surprise", "happy", "sad"][getRndInteger(0,2)];

	drawEyes(eyeRadius,eyecolor);
	drawNose(nosetype);
	drawmouth(expression);	
}
drawRandomFace();
