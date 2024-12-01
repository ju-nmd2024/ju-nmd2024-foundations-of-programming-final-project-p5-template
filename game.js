function startScreen(){
  background(255,255,255);
  push();

  fill(200,0,0);
  rect(150,200,100,50,10);

  pop ();

  text("Start",187,230);
}


function gameScreen(){
  background(255,255,255);
  text("Game",187,230);
  obstacleGreen(10,10);
  /*jumper (x,300);
  
  if (keyIsDown(39)){
    speed = 9;
  } else if (keyIsDown (37)){
    speed = -9;
  } else {
    speed = 0;
  }
  
  if (x>400){
    x= 0;
  } else if (x<0){
    x = 400;
  }
  
  x+= speed;
  */
  player.display(x);
  player.move();

}

function resultScreenLoss(){
  background(255,255,255);
}
let player;
let speed = 0;
let x = 185;
let gravity = 0.6;
let velocityY = 0;
let jumperY = 300;

function obstacleGreen(x,y){
  push ();
  
  fill (34,177,76);
  rect (x,y,70,10,10);
  pop ();
}

function obstacleRed(x,y){
  push ();
  fill (237,28,36);
  rect (x,y,70,10,10);
  pop ();
}

class jumper {
  display(x){
    push ();
    fill(100,100,100);
    rect(x,jumperY,30,50);
    pop ();
  }

  move(){
    if (keyIsDown(39)){
      speed = 9;
    } else if (keyIsDown (37)){
      speed = -9;
    } else {
      speed = 0;
    }

    if (x>400){
    x= 0;
    } else if (x<0){
    x = 400;
    }

    x+= speed;

    velocityY += gravity;
    jumperY += velocityY;
    
  }

}
/*function jumper(x,y){

  push ();
  fill(100,100,100);
  rect(x,y,30,50);
  pop ();
}*/
function setup (){
  createCanvas(400,560);
  
  player = new jumper();
}

//Änsålänge kan vi använda denna för att ändra till vilken skärm vi vill ha för att jobba med en specifik skärm
let state = "start"; 

function draw(){
  if (state === "start") {
      startScreen();

        if ((mouseIsPressed) && (mouseX > 150) && (mouseX < 250) && (mouseY > 200) && (mouseY < 250)){
        state = "game";
        }

  } else if (state === "game") { 
      gameScreen();

  }
}

