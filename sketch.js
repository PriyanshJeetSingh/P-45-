var boy;

function preload() {
 // boyImg = loadImage("")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  boy  = createSprite(200, 200, 30, 50);


  wall1 = createSprite(200, 10, 250, 5);
  wall2 = createSprite(325, 135, 5, 250);
  wall3 = createSprite()
} 

function draw() {
  background(51);
  drawSprites();
  }