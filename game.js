function startScreen(){
  background(255,255,255);
  text("start",160,50);
}

function gameScreen(){
  background(255,255,255);
}

function resultScreenLoss(){
  background(255,255,255);
}

function setup (){
  createCanvas(400,560);
  
}

//Änsålänge kan vi använda denna för att ändra till vilken skärm vi vill ha för att jobba med en specifik skärm
let state = "start"; 