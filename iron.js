

class Iron {
    constructor(x, y,width,height) {
      var options = {
        'density':3,
        'friction':0.8,
        'restitution':0.1
      };
      this.body = Bodies.rectangle(x, y,width,height, options);
   
      World.add(world, this.body);
    this.width=width;
    this.height=height;
    
    };
    display(){
      var pos4 = this.body.position;
  var angle4 = this.body.angle
  
  
      push();
      translate(pos4.x, pos4.y);
  rotate(angle4)
      strokeWeight(5);
      stroke('black')
      fill('brown')
rectMode(CENTER)   
  rect(0, 0, this.width,this.height);
      pop();
    };
  }

