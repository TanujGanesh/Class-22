
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);

engine = Engine.create();
world = engine.world;

ground =Bodies.rectangle(200,300,400,20,{isStatic:true});
World.add(world,ground);

var p={
  restitution: 1.0,
  friction: 1.0
}

ball=Bodies.circle(100,100,30,p);
World.add(world,ball);

box = Bodies.rectangle(200,200,50,50,p);
World.add(world,box);
}

function draw() {
  background("blue"); 
  Engine.update (engine);
rectMode(CENTER);
stroke("white");
fill("red");
  rect(ground.position.x,ground.position.y,400,20);
  rect(box.position.x,box.position.y,50,50);
  ellipseMode(RADIUS);
  circle(ball.position.x,ball.position.y,30);
  
  
  //drawSprites();
}