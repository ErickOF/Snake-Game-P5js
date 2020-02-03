var snake;
var food;
var playing = true;

function setup() {
  createCanvas(400, 400);
  snake = new Snake(0, 0);
  food = new Food();
  frameRate(10);
}

function keyPressed() {
  if (playing) {
    if (keyCode == UP_ARROW) {
      snake.toUp();
    } else if (keyCode == RIGHT_ARROW) {
      snake.toRight();
    } else if (keyCode == LEFT_ARROW) {
      snake.toLeft();
    } else if (keyCode == DOWN_ARROW) {
      snake.toDown();
    }
  }
}

function draw() {
  if (playing) {
    background(0);

    if (snake.eat(food.getPos())) {
      food.createNew();
      snake.addTail();
    }

    if (snake.eatItself()) {
      playing = false;
    }

    snake.show();
    snake.update();
    food.show();
  }
}