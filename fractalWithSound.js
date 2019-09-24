// note need to run python -m SimpleHTTPServer 8000 in terminal before starting

var songChosen = false;
var songPath = './songs/TheWho-WontGetFooledAgain.mp3';
var song;
var amp;

function preload() {
  song = loadSound(songPath);
  amp = new p5.Amplitude();
  amp.toggleNormalize();
}

function setup() {
  createCanvas(600,600);

}

function draw() {
  background(0);
  if(songChosen) {
    if(song.isPlaying()) {
      translate(width/2,height/2);
      /*if(amp.getLevel() < 0.1) {
        rotate(PI/8);
      }
      else if(amp.getLevel() < 0.2) {
        rotate(2*PI/8);
      }
      else if(amp.getLevel() < 0.3) {
        rotate(3*PI/8);
      }*/
      rotate(PI/Math.floor(amp.getLevel()*10))
      translate(-width/2,-height/2);
      //rotate(PI/8*Math.sign(0.25 - amp.getLevel()));
      sierpTri(width/2,height/2,350*amp.getLevel(),color(255,255,255),random(30,100)*amp.getLevel());
    }
    else {
      sierpTri(width/2,height/2,300,color(255,255,255),10);
    }
  }
}
/*
// helper function. Returns angle to rotate given amplitude of song.
// one of 8 rotations
function angle(val) {
  return Math.floor(amp*10)
}
*/
function changeSong() {
  songPath = document.getElementById("songList").value;
  preload();
}

function startDisp() {
  console.log('hi');
  songChosen = true;
}

function startSong() {
  song.play();
}

function pauseSong() {
  song.pause();
}


function sierpTri(x,y,l,c,limit) {
  noFill();
  stroke(c);
  triangle(x,y,x+l,y,x+l/2,y+l*sqrt(3)/2.0);
  if(l > limit) {
    sierpTri(x,y,l/2,color(255,0,0),limit);
    sierpTri(x+l/2,y,l/2,color(0,255,0),limit);
    sierpTri(x+(l/2.0)*0.5,y+(l/2.0)*sqrt(3)/2.0,l/2,color(0,0,255),limit);
  }
}
