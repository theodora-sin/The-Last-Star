/* Global Variables */
let screen=0;
let canvas;
let collectedGems=[];


//Screen0
let startButton;
let startBg

//Screen 1
let charImg1, charImg2;
let choosebutton1, choosebutton2;
let playerCharacter,character_name;

//Screen2
let IntroButton;
let IntroShown=false;

//Screen3
let prefaceButton;
let prefaceShown =false;

//screen 4
let choosebutton3, choosebutton4;
let ch1;//background

//screen 5-6
let continueButton1, continueButton2;
let gem1;//gem1
let cave;//background

//screen 7
let continueButton3,continueButton4;
let rottenFoodImages={};
let player,walls, obstacles;
let mazeStarted=false;
let mazeGameOver=false;
let mazeWon=false;
let mazeCollected=0;
let showEndZoneHint=false;
let mini1;

//screen 8
let ch2;//background
let choosebutton5,choosebutton6;

//screen9
let continueButton5;
let gem2;//gem2

//screen 10
let ch2_1;//background
let continueButton6;

//screen 11
let gem3, gem4, gem5, gem6; //gem for the game
let mini2;
//other variable already defined within the js file

//screen 12


/* PRELOAD LOADS FILES */
function preload() {
    charImg1=loadImage("assets/max.png");
    charImg2=loadImage("assets/maya.png");
    startBg=loadImage("assets/start.jpg")
    mini1=loadImage("assets/mini1.jpg");
    ch1=loadImage("assets/ch1.jpg");
    cave=loadImage("assets/cave.jpg");
    gem1=loadImage("assets/gem1.png");
    gem2=loadImage("assets/gem2.png");
    gem3=loadImage("assets/gem3.png");
    gem4=loadImage("assets/gem4.png");
    gem5=loadImage("assets/gem5.png");
    gem6=loadImage("assets/gem6.png");
    rottenFoodImages={
        apple:loadImage("assets/apple.png"),//
        avocado:loadImage("assets/avocado.png"),//
        canfish:loadImage("assets/canfish.png"),//
        fishcan:loadImage("assets/fishcan.png"),//
        flour:loadImage("assets/flour.png"),//
    }
    ch2=loadImage("assets/ch2.jpg");
    ch2_1=loadImage("assets/ch2_1.jpg");
    mini2=loadImage("assets/mini2.jpg")
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
/*setup runs once*/
function draw() {
    console.log("Drawing screen:", screen);
    if (screen == 0) {
        startscreen();
    } else if (screen == 1) {
        screen1();
    } else if (screen == 2) {
        screen2();
    }else if(screen==3){
        screen3()
    }else if (screen==4){
        chapter1()
    }else if (screen==5){
        transtionscreen1()
    }else if (screen==6){
        transtionscreen2()
    }else if(screen==7){
        if (!mazeStarted){
            mazegame();
        }else if (mazeGameOver){
            drawMazeEndScreen();
        }else{
            runMazeGame();
        }
    }else if(screen==8){
        chapter2();
    }else if(screen==9){
        chapter2_longpath();
    }else if(screen==10){
        chapter2_shortcut();
    }else if (screen==11){
        if(!gameStarted2){
            introScreen2()
        }else if(gameOver2){
            drawEndScreen2();
        }else{
            catchingGame();
        }
    }
} 
