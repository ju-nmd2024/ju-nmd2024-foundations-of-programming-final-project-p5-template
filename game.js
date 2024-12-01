function startScreen() {
  background(255, 255, 255);
  push();
  fill(200, 0, 0);
  rect(150, 200, 100, 50, 10);
  pop();
  textAlign(CENTER, CENTER);
  textSize(20);
  fill(0);
  text("Start", 200, 225);
}

function gameScreen() {
  background(255, 255, 255);
  text("Game", 187, 230);

  player.display();
  player.move();

  platta.display();
  platta.update();
}

function resultScreenLoss() {
  background(255, 255, 255);
}

let player;
let speed = 0;
let x = 185;
let gravity = 0.6;
let jumperY = 300;
let platta;

class jumper {
  constructor() {
    this.velocityY = 0;
  }

  display() {
    push();
    fill(100, 100, 100);
    rect(x, jumperY, 30, 50);
    pop();
  }

  move() {
    if (keyIsDown(RIGHT_ARROW)) {
      speed = 9;
    } else if (keyIsDown(LEFT_ARROW)) {
      speed = -9;
    } else {
      speed = 0;
    }

    if (x > 400) {
      x = 0;
    } else if (x < 0) {
      x = 400;
    }

    x += speed;

    this.velocityY += gravity;
    jumperY += this.velocityY;
  }
}

class platform {
  constructor(x, y) {
    this.platformX = x;
    this.platformY = y;
  }

  display() {
    fill(50, 200, 50);
    rect(this.platformX, this.platformY, 50, 10, 5);
  }

  update() {
    if (player.velocityY < 0) {
      this.platformY -= player.velocityY;
    }

    if (this.platformY > height) {
      this.platformY = -10;
      this.platformX = random(0, 350);
    }
  }
}

function setup() {
  createCanvas(400, 560);
  platta = new platform(random(0, 350), 500);
  player = new jumper();
}

let state = "start";

function draw() {
  if (state === "start") {
    startScreen();
    if (
      mouseIsPressed &&
      mouseX > 150 &&
      mouseX < 250 &&
      mouseY > 200 &&
      mouseY < 250
    ) {
      state = "game";
    }
  } else if (state === "game") {
    gameScreen();
  }
}
