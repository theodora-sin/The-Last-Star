/* Global Variables */
let screen=0;
let canvas;
let collectedGems = [];
 
 
//Screen0
let startButton;
let startBg
 
//Screen 1
let charImg1, charImg2;
let choosebutton1, choosebutton2;
let playerCharacter, character_name;
 
//Screen2
let IntroButton;
let IntroShown = false;
 
//Screen3
let prefaceButton;
let prefaceShown = false;
 
//screen 4
let choosebutton3, choosebutton4;
let ch1;//background
 
//screen 5-6
let continueButton1, continueButton2;
let gem1;//gem1
let cave;//background
 
//screen 7
let continueButton3, continueButton4;
let rottenFoodImages = {};
let player, walls, obstacles;
let mazeStarted = false;
let mazeGameOver = false;
let mazeWon = false;
let mazeCollected = 0;
let showEndZoneHint = false;
let mini1;
 
//screen 8
let ch2;//background
let choosebutton5, choosebutton6;
 
//screen9
let continueButton5;
let gem2;//gem2
 
//screen 10
let ch2_1;//background
let continueButton6;
 
//screen 11
let mini2;
//other variable already defined within the js file
 
//screen 12
let ch3;
let continueButton9
 
//screen 13
let ch3_1;
let choosebutton7, choosebutton8
let dialogueIndex = 0
let dialogueContinueButton;
 
//screen 14
let gem3; //gem 3
let continueButton10;
 
//screen 15
let continueButton11;
 
//screen16
let continueButton12;
let ch4;
 
//screen17
let choosebutton9, choosebutton10;
let gem4;

//screen18
let continueButton14;
//screen19
let continueButton15;
//Screen 20 define on its js file

//screen 21
let ch5;
let continueButton21;
//screen 22 
let choosebutton11, choosebutton12;
//screen 23
let continueButton22;
let gem5;
//screen 24
let continueButton23;

//screen25
let ch6;
let continueButton24;
let Darkness;

//screen 26
let inputBox, submitButton;

//screen27
let continueButton25;

//screen 28
let ch6_1;
let continueButton26;

//screen29
let end;
let continueButton27;
 
//music
let bgm;
let isUserInteracted=false;

/* PRELOAD LOADS FILES */
function preload() {
  charImg1 = loadImage("assets/max.png");
  charImg2 = loadImage("assets/maya.png");
  startBg = loadImage("assets/start.jpg")
  mini1 = loadImage("assets/mini1.jpg");
  ch1 = loadImage("assets/ch1.jpg");
  cave = loadImage("assets/cave.jpg");
  gem1 = loadImage("assets/gem1.png");
  gem2 = loadImage("assets/gem2.png");
  gem3 = loadImage("assets/gem3.png");
  gem4 = loadImage("assets/gem4.png");
  gem5 = loadImage("assets/gem5.png");
  gem6 = loadImage("assets/gem6.png");
  rottenFoodImages = {
    apple: loadImage("assets/apple.png"),//
    avocado: loadImage("assets/avocado.png"),//
    canfish: loadImage("assets/canfish.png"),//
    fishcan: loadImage("assets/fishcan.png"),//
    flour: loadImage("assets/flour.png"),//
  }
  ch2 = loadImage("assets/ch2.jpg");
  ch2_1 = loadImage("assets/ch2_1.jpg");
  mini2 = loadImage("assets/mini2.jpg");
  ch3 = loadImage("assets/ch3.jpg");
  ch3_1 = loadImage("assets/ch3_1.jpg");
  ch4 = loadImage("assets/ch4.jpg");
  ch5= loadImage("assets/ch5.jpg");
  Darkness=loadImage("assets/Darkness.png");
  ch6=loadImage("assets/ch6.jpg");
  ch6_1=loadImage("assets/ch6_1.jpg");
  end=loadImage("assets/end.jpg");
  bgm=loadSound("bgm.mp3");
}
 
 
function setup() {
  canvas = createCanvas(400, 800);
  fitCanvasToWindow();
}
 
function fitCanvasToWindow() {
  const scaleFactor = min(windowWidth / 400, windowHeight / 800);
 
  canvas.elt.style.width = (400 * scaleFactor) + "px";
  canvas.elt.style.height = (800 * scaleFactor) + "px";
}
 
function windowResized() {
  fitCanvasToWindow();
}
function startMusic(){
  if (!isUserInteracted) {
    bgm.loop();
    bgm.setVolume(0.3);
    isUserInteracted = true;
  }  
}
/*setup runs once*/
function draw() {
  fitCanvasToWindow();
  startMusic();
  console.log("Drawing screen:", screen);
  if (screen == 0) {
    startscreen();
  } else if (screen == 1) {
    screen1();
  } else if (screen == 2) {
    screen2();
  } else if (screen == 3) {
    screen3()
  } else if (screen == 4) {
    chapter1()
  } else if (screen == 5) {
    transtionscreen1()
  } else if (screen == 6) {
    transtionscreen2()
  } else if (screen == 7) {
    if (!mazeStarted) {
      mazegame();
    } else if (mazeGameOver) {
      drawMazeEndScreen();
    } else {
      runMazeGame();
    }
  } else if (screen == 8) {
    chapter2();
  } else if (screen == 9) {
    chapter2_longpath();
  } else if (screen == 10) {
    chapter2_shortcut();
  } else if (screen == 11) {
    if (!GameStarted2) {
      introScreen2()
    } else if (gameOver2) {
      drawEndScreen2();
    } else {
      catchingGame2();
    }
  } else if (screen == 12) {
    chapter3();
  } else if (screen == 13) {
    conversation();
  } else if (screen == 14) {
    transtionscreen5();
  } else if (screen == 15) {
    transtionscreen6();
  } else if (screen == 16) {
    chapter4();
  } else if (screen == 17) {
    dilemma4();
  } else if (screen == 18) {
    transtionscreen7() 
  } else if (screen == 19) {
    transtionscreen8() 
  } else if (screen == 20) {
    if (!SnakeGameStarted) {
      introScreen4()
    } else if (gameOver4) {
      drawSnakeEndScreen4()
    } else {
      playSnake4()
    }
  }else if(screen==21){
    chapter5();
  }else if (screen==22){
    monologue();
  }else if(screen==23){
    transtionscreen9();
  }else if (screen==24){
    transtionscreen10();
  }else if(screen==25){
    chapter6();
  }else if(screen==26){
    hiddenmessage();
  }else if(screen==27){
    goodending();
  }else if(screen==28){
    badending();
  }else if(screen==29){
    endingscreen();
  }
}
