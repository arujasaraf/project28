    class Paper{
    constructor(x, y) {
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.image= loadImage("sprites/paper.png");

        this.body =Bodies.circle(200 , 200 , 5 ,options);
        this.radius=1;
        
        World.add(world, this.body);
        }
        display(){
            var pos =this.body.position;
            push();
            translate(pos.x,pos.y);
            ellipseMode(RADIUS);
            ellipse(0,0, this.radius, this.radius);
            imageMode(CENTER);
            image(this.image, 0, -5, 50, 50 )
            pop();
        }1
}