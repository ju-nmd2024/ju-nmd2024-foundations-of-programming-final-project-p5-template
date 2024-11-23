class MountainBackground {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    background(133, 206, 244);
    noStroke();

    //Mountains, counted from left to right
    //9th mountain
    fill(125, 112, 79);
    triangle(
      this.x + 555,
      this.y,
      this.x + 710,
      this.y - 250,
      this.x + 830,
      this.y
    );

    //5th mountain
    fill(128, 120, 100);
    triangle(
      this.x + 250,
      this.y,
      this.x + 380,
      this.y - 290,
      this.x + 510,
      this.y
    );

    //8th mountain
    fill(95, 83, 55);
    triangle(
      this.x + 570,
      this.y,
      this.x + 650,
      this.y - 190,
      this.x + 730,
      this.y
    );

    //6th mountain
    fill(128, 120, 100);
    triangle(
      this.x + 390,
      this.y,
      this.x + 465,
      this.y - 230,
      this.x + 580,
      this.y
    );

    //7th mountain
    fill(95, 83, 55);
    triangle(
      this.x + 410,
      this.y,
      this.x + 550,
      this.y - 260,
      this.x + 700,
      this.y
    );

    //3rd mountain
    fill(128, 120, 100);
    triangle(
      this.x - 50,
      this.y,
      this.x + 100,
      this.y - 270,
      this.x + 250,
      this.y
    );

    //4th mountain
    fill(95, 83, 55);
    triangle(
      this.x + 100,
      this.y,
      this.x + 250,
      this.y - 260,
      this.x + 370,
      this.y
    );

    //10th mountain
    fill(128, 120, 100);
    triangle(
      this.x + 680,
      this.y,
      this.x + 780,
      this.y - 280,
      this.x + 870,
      this.y
    );

    //2nd mountain
    fill(125, 112, 79);
    triangle(this.x - 100, this.y, this.x, this.y - 280, this.x + 100, this.y);

    //1st mountain
    fill(125, 112, 79);
    triangle(this.x - 150, this.y, this.x - 70, this.y - 210, this.x, this.y);

    //Snow
    fill(255, 255, 255);
    rect(this.x - 100, this.y, this.x + 900, this.y + 570);
    ellipse(this.x - 80, this.y + 10, width / 2 - 40, height / 2 - 500);
    ellipse(this.x, this.y, width / 2 - 270, height / 2 - 500);
    ellipse(this.x + 150, this.y, width / 2 - 240, height / 2 - 400);
    ellipse(this.x + 300, this.y + 10, width / 2 - 100, height / 2 - 410);
    ellipse(this.x + 540, this.y, width / 2 - 100, height / 2 - 400);
    ellipse(this.x + 780, this.y + 15, width / 2 - 250, height / 2 - 400);

    fill(242, 244, 244);
    ellipse(this.x, this.y + 50, width / 2 - 50, height - 900);
    ellipse(this.x + 300, this.y + 150, width / 2 - 60, height - 900);
    ellipse(this.x + 100, this.y + 400, width / 2 - 10, height - 900);
    ellipse(this.x + 700, this.y + 260, width / 2 - 10, height - 900);
  }
}

const mountain = new MountainBackground(100, 330);

function draw() {
  mountain.draw();
}
