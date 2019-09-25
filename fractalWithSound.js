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
  /*if(songChosen) {
    if(song.isPlaying()) {
      translate(width/2,height/2);
      rotate(PI/Math.floor(amp.getLevel()*10))
      translate(-width/2,-height/2);
      sierpTri(width/2+30,height/2,350*amp.getLevel(),color(255,255,255),random(30,100)*amp.getLevel());
    }
    else {
      sierpTri(width/2,height/2,300,color(255,255,255),10);
    }
  }*/

  if(songChosen) {
    /*if(song.isPlaying() && !isNaN(amp.getLevel())) {
      sierpTri(50,50,500,color(255,255,255),70*amp.getLevel());
      console.log("yay");
    }
    else {
      sierpTri(50,50,500,color(255,255,255),70);
      console.log("hi");
    }*/
    //console.log(amp.getLevel(), isNaN(amp.getLevel()));
    if(!isNaN(amp.getLevel()) && amp.getLevel() >= 0.1) {
      shearX(mouseX*PI/width);
      sierpTri(50,50,300,color(255,255,255),Math.floor(50*amp.getLevel()));
      //noLoop();
    }
    else {
      console.log("else");
      fill(255,255,255);
      ellipse(100,100,100,100);
    }
  }
}

function changeSong() {
  songPath = document.getElementById("songList").value;
  preload();
}

function startDisp() {
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
