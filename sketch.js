function setup() {
  createCanvas(800,400);
  food = createSprite(400, 200, 50, 50);
  food.shapeColor = "blue"
  chicken = createSprite(400,100,30,30)
  chicken.shapeColor = "red"
}

function draw() {
  background(255,255,255);  
  drawSprites();
  chicken.x = World.mouseX
  chicken.y = World.mouseY
  if(food.x - chicken.x <= food.width/2 + chicken.width/2 && 
    chicken.x - food.x <= food.width/2 + chicken.width/2 &&
    food.y - chicken.y <= food.height/2 + chicken.height/2 &&
    chicken.y - food.y <= food.height/2 + chicken.height/2){
food.shapeColor = "pink"
chicken.shapeColor = "pink"
  }
  else{
food.shapeColor = "blue"
chicken.shapeColor = "red"
  }
  line(food.x,food.y,chicken.x,chicken.y)
}