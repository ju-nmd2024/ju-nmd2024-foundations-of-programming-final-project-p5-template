function startScreen(){
  background(255,255,255);
  text("start",160,50);

  
  obstacleGreen(100,100);
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
  rect (0,0,70,10,10);
  pop ();
}
function obstacleRed(x,y){
  push ();
  fill (237,28,36);
  rect (0,0,70,10,10);
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