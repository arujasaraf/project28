var log1,Imglog,paperObject,paperImg
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paperObject=new Paper(500,610)
	//paperObject.addImage(paperImg)
   // log1=new Dustbin(500,610,200,20);
	log2=new Dustbin(650,610,10,100);
	launcher = new Launcher(paperObject.body,{x:100,y:300});
//log3=new Dustbin(600,610,20,100);
 groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(0)
	
	
		
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	ground.shapeColor="white"
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  log2.display();
  paperObject.display();
  launcher.display
 // log1.display();
 
 // log3.display();

  drawSprites();
 
}
function keyPressed() {
	if (keyCode ===  UP_ARROW) {
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:2,y:-3});
  
	 }
   }
   function mouseDragged(){
    Matter.Body.setPosition(paperObject.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    launcher.fly();
}


