class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.001,
            length: 15,
        }
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    display(){
        if (this.launcher.bodyA){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.launcher.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);}
        fill (blue)
    }
    fly(){
      this.launcher.bodyA=null  
    }
}