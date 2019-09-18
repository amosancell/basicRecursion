// note need to run python -m SimpleHTTPServer 8000 in terminal before starting

var songPath = './songs/TheWho-WontGetFooledAgain.mp3';
var song;

function preload() {
  song = loadSound(songPath);
}

function setup() {
  createCanvas(600,600);
}

function draw() {
  background(0);
  sierpTri(200,200,350);
}

function startSong() {
  song.play();
}

function pauseSong() {
  song.pause();
}


function sierpTri(x,y,l) {
  noFill();
  stroke(color(255,255,255));
  triangle(x,y,x+l,y,x+l/2,y+l*sqrt(3)/2.0);
  if(l > 10) {
    sierpTri(x,y,l/2);
    sierpTri(x+l/2,y,l/2);
    sierpTri(x+(l/2.0)*0.5,y+(l/2.0)*sqrt(3)/2.0,l/2);
  }
}
