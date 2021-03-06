var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600, 400);

  car = createSprite(20, 150, 50, 50);
  wall = createSprite(1500, 200, 60, height / 2);
  wall.shapeColor = rgb(80, 80, 80);

  speed = random(55, 90);
  weight = random(400, 1500);

  car.velocityX = speed;
}

function draw() {
  background(255, 255, 255);

  deformation = (0.5 * weight * speed * speed) / 22500


  // if (car.isTouching(wall)) {
  if (wall.x - car.x < (car.width + wall.width) /2){
    car.velocityX = 0;

    if (deformation < 100) {
      wall.shapeColor = rgb(0, 255, 0);
    }

    if (deformation > 100 && deformation < 180) {
      wall.shapeColor = rgb(230, 230, 0);
    }

    if (deformation > 180) {
      wall.shapeColor = rgb(255, 0, 0);
    }

  }

  drawSprites();
}
