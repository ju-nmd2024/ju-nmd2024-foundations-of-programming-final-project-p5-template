function startScreen(){
  background(255,255,255);
  push();

  fill(200,0,0);
  rect(150,200,100,50,10);

  pop ();
  text("start",187,230);
  
  obstacleGreen(10,10);
  jumper (100,100);
}

function gameScreen(){
  background(255,255,255);
}

function resultScreenLoss(){
  background(255,255,255);
}

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

function jumper(x,y){

  push ();
  fill(100,100,100);
  rect(x,y,30,50);
  pop ();
}
function setup (){
  createCanvas(400,560);
  
}

//Änsålänge kan vi använda denna för att ändra till vilken skärm vi vill ha för att jobba med en specifik skärm
let state = "start"; 

function draw(){
  if (state === "start") {
      startScreen();
  } else if (state === "game") { 
      gameScreen();
  }
}

function mousePressed() {
  if ( (mouseX > 100) && (mouseX < 300) && (mouseY > 100) && (mouseY < 200)){
  console.log ("Hello Garrit");
  }
}  