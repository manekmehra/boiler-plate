var movingrect,fixedrect
function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(200,200,40,40);
}
function draw() {
  background(255,255,255);  
  fixedrect.shapeColor="red"
  movingrect.shapeColor="red"
  movingrect.x=mouseX
  movingrect.y=mouseY
  console.log(fixedrect.x-movingrect.x)
if (movingrect.x-fixedrect.x < movingrect.width/2 + fixedrect.width/2 &&
  fixedrect.x-movingrect.x <movingrect.width/2 + fixedrect.width/2 
  ) {

  fixedrect.shapeColor="yellow"
  movingrect.shapeColor="yellow"
}
else{
  fixedrect.shapeColor="red"
  movingrect.shapeColor="red"
}
if (movingrect.y-fixedrect.y < movingrect.height/2 + fixedrect.height/2 &&
  fixedrect.y-movingrect.y <movingrect.height/2 + fixedrect.height/2 
  ) {

  fixedrect.shapeColor="yellow"
  movingrect.shapeColor="yellow"
}
else{
  fixedrect.shapeColor="red"
  movingrect.shapeColor="red"
}
  drawSprites();
}