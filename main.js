/* Global Variables */
let screen=0;
let canvas;

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
//let choosebutton3, choosebutton4;

//Screen 5, define within the program

//Screen 6
//let choosebutton5;

//screen 7
//let continueButton1,continueButton2;
//let rottenFoodImage={};
//let player,walls, obstacles;
//let mazeStarted=false;
//let mazeGameover=false;
//let mazeWon=false;
//let mazeCollected=0;
//let showEndZoneHint=false;

/* PRELOAD LOADS FILES */
function preload() {
    charImg1=loadImage("assets/max.png");
    charImg2=loadImage("assets/maya.png");
    startBg=loadImage("assets/start.jpg")
    mini1=loadImage("assets/mini1.jpg");
    //rottenFoodImage={
        //apple:loadImage("assets/apple.png"),//
        //avocado:loadImage("assets/avocado.png"),//
        //canfish:loadImage("assets/canfish.png"),//
        //fishcan:loadImage("assets/fishcan.png"),//
        //flour:loadImage("assets/flour.png"),//
    //}
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
    }
} 
