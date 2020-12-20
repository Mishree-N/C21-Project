//variables
var bullet, wall, rect1, rect2;
var speed, weight, thickness;


function setup() {
  createCanvas(1600,400);

  //give speed random value btwn 223 and 321
  speed=random(223,321);
  //give weight random value btwn 30 and 52
  weight=random(30,52);
  //give thickness random value btwn 22 and 83
  thickness=random(22,83);

  //create wall sprite
  wall=createSprite(1200,200,thickness,height/2);
  //make it gray
  wall.shapeColor="gray";

  //create bullet sprite
  bullet = createSprite(50,200,50,20);
  //set color to white
  bullet.shapeColor="white";
  //set it's velocity to speed (random)
  bullet.velocityX=speed;
  
}

function draw() {
  background("black"); 
  
  //if bullet and wall collide,
  if (collide(wall,bullet)) {

    //stop movement
    bullet.velocityX=0;
    wall.velocityX=0;

    //calculate damage
    var damage = 0.5 * weight * speed * speed / (thickness*thickness*thickness);

    //if damage is greater than 10,
    if (damage>10){
      //make wall red
      wall.shapeColor=color(255,0,0);
    }

    //if damage is lesser than 10,
    if (damage<10){
      //make wall green
      wall.shapeColor=color(0,255,0);
    }


  }


  drawSprites();
}


//detect collision
function collide(rect1,rect2){

  if (rect1.x-rect2.x<=rect1.width/2+rect2.width/2){

    return true;

  } else {

    return false;

  }

}