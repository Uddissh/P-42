var hr, min, sec;
var hrA, minA, secA;

function setup() {
	var canvas = createCanvas(800,400);
}

function draw() {
  background("black");  

  hr = hour();
  min = minute();
  sec = second();
	angleMode(DEGREES)
	translate(400,200)
	rotate(-90)
  secA = map(sec,0,60,0,360);
  minA = map(min,0,60,0,360);
  hrA = map(hr%12,0,12,0,360);

	console.log(hr , min, sec);
	console.log(hrA, minA, secA)

	push();
	rotate(secA);
	noFill();
	stroke("blue");
	strokeWeight(8);
	arc(0,0,260,260,-secA,0);
	line(0,0,120,0)
	pop();

	push();
	rotate(minA);
	noFill();
	stroke("lime");
	strokeWeight(8)
	arc(0,0,280,280,-minA,0);
	line(0,0,90,0);
	pop();

	push();
	rotate(hrA);
	noFill();
	stroke("red");
	strokeWeight(8);
	arc(0,0,300,300,-hrA,0);
	line(0,0,70,0);
	pop();

  drawSprites();
}