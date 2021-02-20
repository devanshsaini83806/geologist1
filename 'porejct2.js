
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer,ball,stone,iron,sand;
var hammerB,ballB,stoneB,sandB;
var ground,groundB;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  engie.update(engine)





  drawSprites();  
 
 
}



