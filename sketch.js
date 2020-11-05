var monkey , monkey_running
var banana ,bananaImage, obstacleImage,ground,groundSprite
var FoodGroup, obstacleGroup
var score

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  //create monkey & adding animations 
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
 
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  foodGroup = new Group()
  obstacleGroup = new Group()
}
function draw() {
 food()
  obstacle()
monkey.collide(ground);

  

  background("orange");
  if(ground.x<0){
    ground.x=ground.width/2;
  

  }
 if(keyDown("space")){
  monkey.velocityY=-9
 }
  //you have to create an invisible ground and make the monkey supported with that so that it never falls down
  
monkey.velocityY=monkey.velocityY+2;
  
  stroke("white");
  textSize(20)
  fill("white");
  text("Score"+ score,500,50);
  
  stroke("black");
  textSize(20)
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivial time: "+ survivalTime,100,50 );
drawSprites()

  
  
}




 function food(){
   if(frameCount%80===0){
     banana=createSprite(400,500,20,20);
     banana.y=Math.round(random(120,200));
     banana.addImage(bananaImage);
     banana.velocityX=-5;
     banana.lifetime=100;
     foodGroup.add(banana)
     
   monkey.depth=banana.depth+1;
   banana.scale=0.1
   }
 }
   
 function obstacle(){
   if(frameCount%80===300){
var obstacle =createSprite(600,600,20,20);
 obstacle.addImage(obstacleImage);
obstacle.velocityX=-5;
  obstacle.lifetime=100;
}
  }  
 
   
   
   
 

  
  
 


 
 

