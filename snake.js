class Snake {
  
  constructor (x, y) {
    this.x = x;
    this.y = y;
    this.xspeed = SPEED*SIZE;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
  }

  addTail() {
    this.total++;
    this.tail.push(createVector(this.x - this.xspeed,
                                this.y - this.yspeed));
  }
  
  eat (foodPos) {
    if (this.x >= foodPos.x &&  // r1 right edge past r2 left
        this.x <= foodPos.x &&  // r1 left edge past r2 right
        this.y >= foodPos.y &&  // r1 top edge past r2 bottom
        this.y <= foodPos.y) {  // r1 bottom edge past r2 top
      return true;
    }
    return false;
  }
  
  eatItself() {
    for (var i = 0; i < this.total; i++) {
      if (this.eat(this.tail[i])) {
        return true;
      }
    }
    
    return false;
  }
  
  show() {
    fill(255);
    for (var i = 0; i < this.total; i++) {
      rect(this.tail[i].x, this.tail[i].y, SIZE, SIZE);
    }
    rect(this.x, this.y, SIZE, SIZE);
  }
  
  toDown() {
    this.xspeed = 0;
    this.yspeed = SPEED*SIZE;
  }
  
  toLeft() {
    this.xspeed = -SPEED*SIZE;
    this.yspeed = 0;
  }
  
  toRight() {
    this.xspeed = SPEED*SIZE;
    this.yspeed = 0;
  }
  
  toUp() {
    this.xspeed = 0;
    this.yspeed = -SPEED*SIZE;
  }
  
  update() {
    for (var i = 0; i < this.total - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    
    this.tail[this.total - 1] = createVector(this.x, this.y);
    
    this.x += this.xspeed;
    this.y += this.yspeed;
    
    this.x = constrain(this.x, 0, width - SIZE);
    this.y = constrain(this.y, 0, height - SIZE);
  }
}