

class Ground {
  constructor(x, y,width,height) {
    var options = {
    isStatic:true
    };
    this.body = Bodies.rectangle(x, y,width,height, options);
 
    World.add(world, this.body);
  this.width=width;
  this.height=height;;
  };
  display(){
    const pos2 = this.body.position;
const angle2 = this.body.angle


    push();
    translate(pos2.x, pos2.y);
rotate(angle2)
    strokeWeight(5);
    stroke('black')
    fill('lime')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  };
}

