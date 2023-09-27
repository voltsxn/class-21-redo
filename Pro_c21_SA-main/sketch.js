const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var butn1;
var butn2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  butn1=createImg("up.png");
  butn1.position(20,30);
  butn1.size(50,50);
  butn1.mouseClicked(vForce);

  butn2=createImg("right.png");
  butn2.position(220,30);
  butn2.size(50,50);
  butn2.mouseClicked(hForce);

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20)
  Engine.update(engine);
}
function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}
function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
