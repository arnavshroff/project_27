
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
//var roof;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	var bobDiameter = 40;
	var posX = width/2;
	var posY = height/4 + 200;

	//Create the Bodies Here.
	bob1 = new bob(posX - bobDiameter*2, posY, bobDiameter);
	bob2 = new bob(posX - bobDiameter,posY, bobDiameter);
	bob3 = new bob(posX,posY,bobDiameter);
	bob4 = new bob(posX +  bobDiameter, posY, bobDiameter);
	bob5 = new bob(posX + bobDiameter * 2, posY, bobDiameter);

	roof = new roof(width/2, height/4, 250, 15);

	rope1 = new rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2 = new rope(bob2.body,roof.body,-bobDiameter*1,0);
	rope3 = new rope(bob3.body,roof.body,0,0); 
 	rope4 = new rope(bob4.body,roof.body,bobDiameter*1,0); 
	rope5 = new rope(bob5.body,roof.body,bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,250,250);
  Engine.update(engine);
  


  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();
  drawSprites();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-85,y:-75}); 
	} 

	if (keyCode === DOWN_ARROW) { 
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:85,y:75}); 
	} 
} 

	function drawLine(constraint) { 
		bobPosition = constraint.bodyA.position 
		roofPosition = constraint.bodyB.position 
		roofBodyOffset = constraint.pointB; 
		roofBodyX = roofBodyPosition.x + roofBodyOffset.x 
		roofBodyY = roofBodyPosition.y + roofBodyOffset.y 
		line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX, roofBodyY); 
	}

