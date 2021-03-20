class Umbrella{

    constructor(x, y, r){
        var options = {
            isStatic: true,
            friction: 0.001

        }
        this.body = Bodies.circle(x, y, 120, options);
        this.radius = r;
        this.image = loadImage("Umbrella_3.png");
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}