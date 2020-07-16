class Dustbin{
    constructor(x, y, width, height, angle) {
    var options = {
        'isStatic':true,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.image=loadImage("sprites/dustbingreen.png")
this.body = Bodies.rectangle(x, y, width, height, options);
this.width = width;
this.height = height;

World.add(world, this.body);
}
display(){
    var pos =this.body.position;
    push ();
    translate(pos.x,pos.y);
    rectMode(CENTER);
   // rect(pos.x, pos.y, this.width, this.height);
    imageMode(CENTER);
    image(this.image, 0, 0, 150, 100);
   pop ();
}
}
