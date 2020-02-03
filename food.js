class Food {
  constructor () {
    this.pos = createVector(floor(random(width/SIZE)),
                            floor(random(height/SIZE)));
    this.pos.mult(SIZE);
  }
  
  createNew() {
    this.pos = createVector(floor(random(width/SIZE)),
                            floor(random(height/SIZE)));
    this.pos.mult(SIZE);
  }
  
  show() {
    fill(255, 0, 0);
    rect(this.pos.x, this.pos.y, SIZE, SIZE);
  }
  
  getPos() {
    return this.pos;
  }
}