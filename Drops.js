class Drops{

    constructor(x, y) {
        var options = {
            friction: 0.001,
            isStatic: false,
            restitution: 0.1
        }

        this.body = Bodies.circle(x, y, 5, options);
        this.radius = 5;
        World.add(world, this.body);
    }

    update() {

        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0,600), y:random(0,400)})
        }
    }

    display(){

        var pos = this.body.position;

        // push();
        // translate(pos.x, pos.y);
        // rotate(angle);
        // noStroke();
        fill(50,110,230)
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius, this.radius);
        //pop();
    }
}