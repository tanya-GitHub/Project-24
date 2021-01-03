
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, dustbinB, dustbinL, dustbinR;


function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(100, 100, 40);
	World.add(world, paper);

	ground = new Ground(width/2, 575, width, 50);
	World.add(world, ground);

	dustbinB = new DustbinBottom(200, 20);
	World.add(world, dustbinB);

	dustbinL = new DustbinLeftSide(20, 100);
	World.add(world, dustbinL);

	dustbinR = new DustbinRightSide(20, 100);
	World.add(world, dustbinR);

	Engine.run(engine);

	console.log(paper);
  
}


function draw() {
	Engine.update(engine);

  rectMode(CENTER);
  background(0);

  fill("white");
  textSize(20);
  text("We don't want to live in a dustbin, so stop making our earth one!", 85, 200);

  ground.display();
  paper.display();

  dustbinB.display();
  dustbinL.display();
  dustbinR.display();
 
  if(paper.body.position.x > 500){
	  fill(255, 255, 150);
	  textSize(45);
	  text("Good Job!", 290, 250);
  }
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 220, y: -270});
	}
}

