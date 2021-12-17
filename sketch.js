
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftSide,rightSide;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
     isStatic:false,
	 restitution:0.3,
	 friction:0,
	 density:1.2
	}
   ball = Bodies.circle(260,100,40,ball_options); 
   World.add(world,ball);
	//Engine.run(engine);
   ground = new Ground(width/2,650,width,10);
   leftSide = new Ground(550,600,20,120);
   rightSide = new Ground(650,600,20,120);
   
   //apply force
     
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine)
  ellipse(ball.position.x,ball.position.y,40,40);
  ground.display();
  leftSide.display();
  rightSide.display();

  keyPressed();
}

function keyPressed(){
   if (key_code === UP_ARROW){
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.03,y:0})
   }
}

