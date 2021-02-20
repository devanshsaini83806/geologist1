

class Ball {
    constructor(x, y,radius) {
      var options = {
        'density':1,
        'friction': 5,
        'restitution':1
      };
      this.body = Bodies.circle(x, y,radius, options);
   
      World.add(world, this.body);
    this.radius=radius
    
    };
    display(){
      var pos2 = this.body.position;
  var angle2 = this.body.angle
  
  
      push();
      translate(pos2.x, pos2.y);
  rotate(angle2)
      strokeWeight(5);
      stroke('black');
      fill('red');
ellipseMode(RADIUS)
     ellipse(0, 0, this.radius);
      pop();
    };
  }

