// note need to run python -m SimpleHTTPServer 8000 in terminal before starting

var songChosen = false;
var songPath = './songs/TheWho-WontGetFooledAgain.mp3';
var song;
var amp;
var pattern = "moving";
var oldAmpLvl;
var colVal = 255;
var col;

function preload() {
  song = loadSound(songPath);
  amp = new p5.Amplitude();
  amp.toggleNormalize();
}

function setup() {
  createCanvas(600,600);
  col = color(colVal,(colVal+100)%256,(colVal+200)%256);
}

function draw() {
  background(0);
  if(pattern == "moving") {
    movePattern();
  }
  else if(pattern == "depth") {
    depthPattern();
  }
}


function movePattern() {
  if(songChosen) {
    translate(width/2,height/2);
    rotate(PI/Math.floor(amp.getLevel()*10))
    translate(-width/2,-height/2);
    if((amp.getLevel() > 0.4 || amp.getLevel() < 0.05) && second() % 5 < 2) {
      colVal = Math.floor(amp.getLevel()*255);
      col = color(colVal,(colVal+100)%256,(colVal+200)%256);
    }
    sierpTri(width/2+30,height/2,350*amp.getLevel(),col,random(30,100)*amp.getLevel());
  }
}

function depthPattern() {
  if(songChosen) {
    if(!isNaN(amp.getLevel()) && amp.getLevel() >= 0.1) {
      if((amp.getLevel() > 0.4 || amp.getLevel() < 0.05) && second() % 5 < 2) {
        colVal = Math.floor(amp.getLevel()*255);
        col = color(colVal,(colVal+100)%256,(colVal+200)%256);
      }
      sierpTri(50,50,300,col,Math.floor(50*amp.getLevel()));
      oldAmpLvl = amp.getLevel();
    }
    else {
      sierpTri(50,50,300,color(100,100,100),Math.floor(50*oldAmpLvl));
    }
  }
}


function changeSong() {
  songPath = document.getElementById("songList").value;
  preload();
}

function pickPattern() {
  pattern = document.getElementById("patternList").value;
}

function startDisp() {
  songChosen = true;
}

function startSong() {
  song.play();
  loop();
}

function pauseSong() {
  song.pause();
  noLoop();
}


function sierpTri(x,y,l,c,limit) {
  fill(c);
  triangle(x,y,x+l,y,x+l/2,y+l*sqrt(3)/2.0);
  if(l > limit) {
    sierpTri(x,y,l/2,color((red(c)*2)%256,(blue(c)*3)%256,(green(c)*5)%256),limit);
    sierpTri(x+l/2,y,l/2,color((red(c)*2)%256,(blue(c)*3)%256,(green(c)*5)%256),limit);
    sierpTri(x+(l/2.0)*0.5,y+(l/2.0)*sqrt(3)/2.0,l/2,color((red(c)*2)%256,(blue(c)*3)%256,(green(c)*5)%256),limit);
  }
}
