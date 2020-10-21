var bullet,wall;
var speed,weight,damage;
var thickness
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(100, 200, 50, 20);
  thickness=random(22,83)
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=(color(80,80,80))
  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));
  bullet.velocityX=speed;
}

function draw() {
  background("black");  
  drawSprites();
  if(bullet.isTouching((wall)))
  {
    bullet.velocityX=0;
    wall.velocityX=0;
   // deformation=(0.5*weight*speed*speed)/22509
   damage=(0.5*speed*speed*weight)/(thickness*thickness*thickness)
    if (damage>10) 
  {
    wall.shapeColor="red";
  }
  else
  {
    wall.shapeColor="green";
  }
  }
  
  
}
