

class Sand {
    constructor(x, y,radius) {
      var options = {
        'density':1,
        'friction':5,
        'restitution':1.3
      };
      this.body = Bodies.circle(x, y,radius, options);
   
      World.add(world, this.body);
    this.radius=radius
    
    };
    display(){
      var pos3 = this.body.position;
  var angle3 = this.body.angle
  
  
      push();
      translate(pos3.x, pos3.y);
  rotate(angle3)
      strokeWeight(5);
      stroke('black')
      fill('orange')
ellipseMode(RADIUS);
     ellipse(0, 0, this.radius);
      pop();
    };
  }

