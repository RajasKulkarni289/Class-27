class Chain{
constructor(b1,b2){
    var ops={
        bodyA:b1,
        bodyB:b2,
        length:30,
        stiffness:0.2
    };
    this.rope=cs.create(ops);
    World.add(world,this.rope);
}
display(){
    var pointA=this.rope.bodyA.position;
    var pointB=this.rope.bodyB.position;
    line(pointA.x,pointA.y,pointB.x,pointB.y);
}
}