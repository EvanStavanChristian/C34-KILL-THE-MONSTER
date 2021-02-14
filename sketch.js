const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
//preload the images here



}

function setup() {
  createCanvas(1438, 690)
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(10, height, 15, 15);
  
}

function draw() {
  Engine.update(engine);
  background("lightBlue")
 
 ground.display();

}

