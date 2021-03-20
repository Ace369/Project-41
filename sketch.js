const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
  
var drops = [];
var umbrella;
var maxDrops;
var engine, world;
var lightning1, lightning2, lightning3, lightning4;
function preload(){
    
    lightning1 = loadImage("lightning1.png")
    lightning2 = loadImage("lightning2.png")
    lightning3 = loadImage("lightning3.png")
    lightning4 = loadImage("lightning4.png")
}

function setup(){
   createCanvas(600, 700);
   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(250, 420, 300);
   umbrella.debug = true;

    maxDrops = 100;
    if(frameCount % 150 === 0) {
        for(var i = 0; i<maxDrops; i++){
            drops.push(new Drops(random(0,600), random(0,400)));
        }
    }
}

function draw(){
    Engine.update(engine);
    background(0);
    
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }

    umbrella.display();
    lightning();

    drawSprites();

}   

function lightning(){

    if(frameCount % 60 === 0) {

        var lightning = createSprite(random(50, 450), 100, 100, 100)
        rand = Math.round(random(1,4));
        
        switch(rand){
            case 1: lightning.addImage(lightning1)
                break;
            case 2: lightning.addImage(lightning2)
                break;
            case 3: lightning.addImage(lightning3)
                break;
            case 4: lightning.addImage(lightning4)
                break;
        }

        lightning.lifetime = 5;
        lightning.scale = 0.5;
    }
}