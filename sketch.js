function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(5);
  angleMode(DEGREES);

  frameRate(48);
}

function draw() {
  // put drawing code here

  //Bulbs
  strokeWeight(0.5);
  stroke("white");
  line(width/2 + 250, height/2, width/2 + cos(frameCount*3)*250, height/2 + sin(frameCount*3)*250);
  line(width/2 + 250, height/2, width/2 + 300 + cos(frameCount*3)*50, height/2 + sin(frameCount*3)*50);
  stroke("Red");
  line(width/2 + 250, height/2, width/2 + 200 + cos(frameCount*3)*50, height/2 + sin(frameCount*3)*50);
  //Rays
  stroke("Red");
  strokeWeight(0.1);
  line(width/2 + 250, height/2, width/2 - 350 + cos(frameCount*3)*100, height/2 + sin(frameCount*3)*100);
  line(width/2 + 250, height/2, width/2 + 350 + cos(frameCount*3)*50, height/2 + 100 + sin(frameCount*3)*50);
  line(width/2 + 250, height/2, width/2 + 350 + cos(frameCount*3)*50, height/2 - 100 + sin(frameCount*3)*50);

  if(frameCount == 120) {
    noLoop();
  }
}
