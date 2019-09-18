// This code was heavily influenced by thecodingtrain

function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  drawCircle(300,200,300);
  //binaryTree(width/2,0,200,90);
  //noLoop();
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

function binaryTree(x,y,l,angle) {
  stroke(color(0,255,0));
  line(x,y,x+l*cos(angle),y+l*sin(angle));
  stroke(color(255,0,0));
  line(x,y,x-l*cos(angle),y+l*sin(angle));
  if(l > 10) {
    binaryTree(x+l*cos(angle),y+l*sin(angle),l/2.0,angle+45);
    binaryTree(x-l*cos(angle),y+l*sin(angle),l/2.0,angle+45);
  }
}

/* These functions iare based on the Escape Time algorithm whose pseudocode is
  * given at https://en.wikipedia.org/wiki/Mandelbrot_set
*/
function mandelbrot(colors) {
  for(var px = 0; px < width; px++) {
    for(var py =0; py < height; py++) {
      x0 = px * 3.5/width - 2.5;
      y0 = py * 2/height - 1;
      x = 0;
      y = 0;
      iteration = 0;
      max_iteration = 1000;
      while(sq(x) + sq(y) < 4 && iteration < max_iteration) {
        xtemp = sq(x)-sq(y)+x0;
        y = 2*x*y+y0;
        x = xtemp;
        iteration++;
      }
      c=colors[iteration%colors.length];
      stroke(c);
      point((x+2.5)*width/2.5,(y+1)*height/2);
      noStroke();
    }
  }
}
function mandelbrot() {
  for(var px = 0; px < width; px++) {
    for(var py =0; py < height; py++) {
      x0 = px * 3.5/width - 2.5;
      y0 = py * 2/height - 1;
      x = 0;
      y = 0;
      iteration = 0;
      max_iteration = 1000;
      while(sq(x) + sq(y) < 4 && iteration < max_iteration) {
        xtemp = sq(x)-sq(y)+x0;
        y = 2*x*y+y0;
        x = xtemp;
        iteration++;
      }
      c=color(random(256),random(256),random(256));
      stroke(c);
      point((x+2.5)*width/2.5,(y+1)*height/2);
      noStroke();
    }
  }
}
