// This code was heavily influenced by thecodingtrain

function setup() {
  createCanvas(600,600);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  drawCircle(300,200,300);
  noLoop();
}

function drawCircle(x, y, d) {
  ellipse(x, y, d);
  if(d > 2) {
    stroke('green');
    drawCircle(x+d*0.5, y, d*0.5);
    stroke('red');
    drawCircle(x-d*0.5, y, d*0.5);
    stroke('blue');
    drawCircle(x, y+d*0.5, d*0.5);
    //drawCircle(x, y-d*0.5, d*0.5);
  }
}

function mandelbrot() {
  for(var px = 0; px < width; px++) {
    for(var py =0; py < height; py++)
  }
}
