const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var Ground_options ={
        isStatic: true
    }

   Ground= Bodies.rectangle(200,390,400,20,Ground_options);
    World.add(world,Ground);

    var ball_options={
        restitution:1
    }

    ball= Bodies.circle(200,10,20,ball_options);
        World.add(world,ball)

   


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(Ground.position.x,Ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20)

}
