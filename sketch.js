
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,360)
monkey=createSprite(80,305,20,20)
  monkey.setCollider("circle",0,0,300)
  monkey.debug=true;
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.152;
  
  ground=createSprite(400,350,900,10)
   
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  ground.visible=false;
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  
  score=0;
  survivalTime=0;
  stroke("black")
  textSize(20);
  
}


function draw() {
  background(220);
  survivalTime=Math.round(frameCount/30); //frameRate();//Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50)
  
  ground.velocityX=-5;
  if(ground.x <0)
    ground.x=ground.width/2;
  if(keyDown("space") && monkey.y>=150)
    monkey.velocityY=-10;
  monkey.velocityY+=0.8;
  monkey.collide(ground)
  
  showFood();
  spawnObstacles();
  
  drawSprites();
}

function showFood()
{
  if(frameCount%80==0)
    {
       banana=createSprite(600,random(120,200),50,50)
      banana.addImage("ba",bananaImage)
      banana.velocityX=-5;
      banana.lifetime=200;
      banana.scale=0.13;
      
      bananaGroup.add(banana);
    }
      
  
  
}
function spawnObstacles()
{
  if(frameCount%200==0)
    {
       obstacle=createSprite(600, 350,50,50)
      obstacle.addImage("ob",obstacleImage)
      obstacle.velocityX=-5;
      obstacle.lifetime=200;
      obstacle.scale=0.17;
      
      obstacleGroup.add(obstacle)
    }
  
}




