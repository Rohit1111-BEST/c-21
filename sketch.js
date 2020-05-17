var fixedRect, movingRect;
var ball, square;
function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400, 400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

 movingRect.velocityY = -5;
 fixedRect.velocityY = +5;
 
 ball = createSprite(30,50,20,20);
 ball.shapeColor="orange";

 square = createSprite(60,170,56,23);
 square.shapeColor="pink";
 

}

function draw() {
  background(0,0,0);  
 bounceoff(movingRect,fixedRect);
  ball.x=mouseX;
  ball.y=mouseY;
if(istouching(ball,square)){
ball.shapeColor="brown";
square.shapeColor="brown";
}
else{
  square.shapeColor="pink";
  ball.shapeColor="orange";
}

  drawSprites();
}
function bounceoff (object1,object2){
if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
        object1.velocityX = object1.velocityX * (-1);
        object2.velocityX = object2.velocityX * (-1);

  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  }  
}

function istouching(object3,object4){
  if (object3.x - object4.x < object4.width/2 + object3.width/2
    && object4.x - object3.x < object4.width/2 + object3.width/2
 && object3.y - object4.y < object4.height/2 + object3.height/2
  && object4.y - object3.y < object4.height/2 + object3.height/2){
 return true 
}  
else {return false} 
}