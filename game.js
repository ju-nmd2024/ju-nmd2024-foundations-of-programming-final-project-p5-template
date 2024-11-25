import MountainBackground from "./mountainBackground.js";

const mountainB = new MountainBackground(100, 330);

state = "start";

function setup() {
  createCanvas(900, 900);

  noStroke();

  width = 900;
  height = 900;
}
window.setup = setup;

function mousePressed() {
  if (state === "start") {
    if (mouseX > 200 && mouseX < 400 && mouseY > 650 && mouseY < 730) {
      state = "game";
    }
    if (mouseX > 500 && mouseX < 700 && mouseY > 650 && mouseY < 730) {
      state = "options";
    }
  }

  if (state === "result") {
    if (mouseX > 320 && mouseX < 620 && mouseY > 600 && mouseY < 680) {
      state = "start";
    }
    if (mouseX > 320 && mouseX < 620 && mouseY > 750 && mouseY < 830) {
      state = "game";
    }
  }
}

function startScreen() {
  background(133, 206, 244);
  mountainB.draw();

  //Start and options button
  fill(255, 244, 220);
  rect(width / 2 - 250, height - 250, 200, 80, 30);
  rect(width / 2 + 50, height - 250, 200, 80, 30);

  //Start and Options text for button
  push();
  fill(0, 0, 0);
  textSize(70);
  textStyle(BOLD);
  text("SNOW-RIDER", width / 2 - 200, height / 2 - 20);
  textSize(30);
  text("START", width / 2 - 195, height - 200);
  text("OPTIONS", width / 2 + 85, height - 200);
  pop();
}

function optionScreen() {
  background(133, 206, 244);
  mountainB.draw();

  fill(255, 244, 220);
  rect(width / 2 - 335, height / 2 + 50, 250, 80, 30);
  rect(width / 2 + 75, height / 2 + 50, 250, 80, 30);
  rect(width / 2 - 90, height / 2 + 200, 200, 80, 30);
  rect(width / 2 - 425, height / 2 + 350, 330, 80, 30);

  push();
  fill(0, 0, 0);
  textSize(50);
  textStyle(BOLD);
  text("Choose between:", width / 2 - 175, height / 2 - 50);

  textSize(30);
  text("WASD KEYS", width / 2 - 300, height / 2 + 100);
  text("ARROW KEYS", width / 2 + 100, height / 2 + 100);
  text("MOUSE", width / 2 - 45, height / 2 + 250);
  text("Back to startscreen", width / 2 - 400, height / 2 + 400);
  pop();
}

function gameScreen() {
  background(133, 206, 244);
  mountainB.draw();
}

function resultScreen() {
  background(133, 206, 244);
  mountainB.draw();

  fill(255, 244, 220);
  rect(width / 2 - 130, height / 2 + 150, 300, 80, 30);
  rect(width / 2 - 130, height / 2 + 300, 300, 80, 30);

  push();
  fill(0, 0, 0);
  textSize(70);
  textStyle(BOLD);
  text("GAME OVER", width / 2 - 200, height / 2 - 20);

  textSize(30);
  text("START SCREEN", width / 2 - 95, height / 2 + 200);
  text("RESTART GAME", width / 2 - 100, height / 2 + 350);
  pop();
}

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "options") {
    optionScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "result") {
    resultScreen();
  }
}
