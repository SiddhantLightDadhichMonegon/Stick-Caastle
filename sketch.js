const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    

    ground = new Ground(600,380,1200,20);
}

function draw(){
    background(255);
    Engine.update(engine);
    ground.display();

    fill("gray");
    rect(600,295,600,150);
    rect(950,245,100,250);
    rect(250,245,100,250);
    fill("black");
    triangle(900,120,1000,120,950,70);
    triangle(200,120,300,120,250,70);
    fill("grey");
    rect(400,170,70,100);
    rect(600,170,70,100);
    rect(800,170,70,100);
    fill("brown");
    rect(600,320,50,100);
    rect(600,95,6,50);
    fill("red");
    triangle(603,95,603,70,623,82.5);
}