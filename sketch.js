//Calling Matter functions
const Engine=Matter.Engine;//provides mechanics
const World=Matter.World;//provides background
const Bodies=Matter.Bodies;//provides objects
var engine,world,box1,box2,ground;
function setup() {
  createCanvas(600,600);
  //Creating our engine
  engine=Engine.create();
  //Connecting our world to our engine
  world=engine.world;
  //Creating objects
  var groundOptions={
    isStatic:true
  };
  ground=Bodies.rectangle(200,550,400,20,groundOptions);
  //Adding objects and our world to the main world
  World.add(world,ground);
  box1=new Box(225,100,20,50);
  box2=new Box(225,180,20,100);
}

function draw() {
  background(255,255,255);
  //Updating the engine
  Engine.update(engine);
  box1.display();
  box2.display();
  rect(ground.position.x,ground.position.y,400,20);
}