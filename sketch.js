
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const render = Matter.render;

var Ground,dustbin1,dustbin2,dustbin3,dustbin4,Paper;
var world;

function preload () {

paperImage = loadImage("paper.png");

}

function setup() {
	createCanvas(800, 415);

	engine = Engine.create();
	world = engine.world;

	 
	dustbin1 = new dustbin(350,210,100,200);

  Paper = new paper(400,20,50/2);
 
  
  Ground = new ground(400,375,800,75);
  

  
 

	

      


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  

  background(100,100,550);
  
  

  Ground.display();

  Paper.display();

  dustbin1.display();
  
  
  down();

  drawSprites();
 
}

function down() {

 Paper.drop();

}