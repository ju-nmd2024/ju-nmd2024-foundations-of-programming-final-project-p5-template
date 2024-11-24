let state = "start";

function setup() {
  createCanvas(900, 900);

  noStroke();

  width = 900;
  height = 900;
}

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

function mountainBackground(x, y) {
  //Mountains, counted from left to right
  //9th mountain
  fill(125, 112, 79);
  triangle(x + 555, y, x + 710, y - 250, x + 830, y);

  //5th mountain
  fill(128, 120, 100);
  triangle(x + 250, y, x + 380, y - 290, x + 510, y);

  //8th mountain
  fill(95, 83, 55);
  triangle(x + 570, y, x + 650, y - 190, x + 730, y);

  //6th mountain
  fill(128, 120, 100);
  triangle(x + 390, y, x + 465, y - 230, x + 580, y);

  //7th mountain
  fill(95, 83, 55);
  triangle(x + 410, y, x + 550, y - 260, x + 700, y);

  //3rd mountain
  fill(128, 120, 100);
  triangle(x - 50, y, x + 100, y - 270, x + 250, y);

  //4th mountain
  fill(95, 83, 55);
  triangle(x + 100, y, x + 250, y - 260, x + 370, y);

  //10th mountain
  fill(128, 120, 100);
  triangle(x + 680, y, x + 780, y - 280, x + 870, y);

  //2nd mountain
  fill(125, 112, 79);
  triangle(x - 100, y, x, y - 280, x + 100, y);

  //1st mountain
  fill(125, 112, 79);
  triangle(x - 150, y, x - 70, y - 210, x, y);

  //Snow
  fill(255, 255, 255);
  rect(x - 100, y, x + 900, y + 570);
  ellipse(x - 80, y + 10, width / 2 - 40, height / 2 - 500);
  ellipse(x, y, width / 2 - 270, height / 2 - 500);
  ellipse(x + 150, y, width / 2 - 240, height / 2 - 400);
  ellipse(x + 300, y + 10, width / 2 - 100, height / 2 - 410);
  ellipse(x + 540, y, width / 2 - 100, height / 2 - 400);
  ellipse(x + 780, y + 15, width / 2 - 250, height / 2 - 400);

  fill(242, 244, 244);
  ellipse(x, y + 50, width / 2 - 50, height - 900);
  ellipse(x + 300, y + 150, width / 2 - 60, height - 900);
  ellipse(x + 100, y + 400, width / 2 - 10, height - 900);
  ellipse(x + 700, y + 260, width / 2 - 10, height - 900);
}

function startScreen() {
  background(133, 206, 244);
  mountainBackground(100, 330);

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
  mountainBackground(100, 330);

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
  mountainBackground(100, 330);
}

function resultScreen() {
  background(133, 206, 244);
  mountainBackground(100, 330);

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
