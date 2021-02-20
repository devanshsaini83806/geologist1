
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
	createCanvas(1350, 650);


	engine = Engine.create();
	world = engine.world;

hammer1=new Hammer(200,200,50,50)
ball1 = new Ball(200,630,30)
ball2 = new Ball(400,630,30)
sand1 =new Sand(500,630,10,10)
sand2 =new Sand(510,630,10,10)
sand3 =new Sand(520,630,10,10)
sand4 =new Sand(530,630,10,10)
sand5 =new Sand(540,630,10,10)
sand6 =new Sand(550,630,10,10)
iron =new Iron(400,630,60,60)
iron1=new Iron(560,630,60,60)
stone = new Stone(780,630,80,80)


ground1 = new Ground(500,650,1800,80)


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER)
  background("cyan");
frameRate(60)


ball1.display();
ball2.display();
sand1.display();
sand2.display();
sand3.display();
sand4.display();
sand5.display();
sand6.display();
iron.display();
iron1.display();
stone.display();

ground1.display()
hammer1.display();
 
}



