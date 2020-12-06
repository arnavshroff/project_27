class bob{
    constructor(x,y,radius){
  
         var options ={
            isStatic: false,
            restitution: 1.0,
            friction: 1.0,
            density: 1.2
             }

        this.x =x;
        this.y=y;
        this.radius=radius;
        this.body = Bodies.circle(this.x,this.y,(this.radius)/2, options);
        World.add(world, this.body);

        }
    
    display(){

        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("blue");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
        
};