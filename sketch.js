const Engine= Matter.Engine 
const World = Matter.World
const Bodies= Matter.Bodies

var game_engine,game_world,object;

function setup() {
  createCanvas(400,400);
  game_engine=Engine.create();
  game_world=game_engine.world;

var object_options={
  isStatic: true
}

  object=Bodies.rectangle(200,100,50,50,object_options)
  World.add(game_world,object)

  console.log(object.position.x)
}

function draw() {
  background(0); 
  Engine.update(game_engine)
  rectMode(CENTER) 
  rect(object.position.x,object.position.y,50,50)

}