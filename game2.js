//minigame 2:Using a slider to catch color gem and avoid black gem.
//screen11

let score2=0;
let blackHits2=3;
let GameStarted2 =false;
let gameOver2 =false;
let gameWon2=false;
let timeLeft2=30;
let lastSecondTick2 =0;

let catcher2=null;
let leftWall2=null;
let rightWall2=null;
let continueButton7, continueButton8;
let fallingObjects2=[];

const gemColorEmoji={
    orange:"🟠",
    blue:"🔵",
    red:"🔴",
    purple:"🟣",
    yellow:"🟡",
    black:"⚫"
}
const gemTypeWeights2=["orange","red","blue","yellow","purple","black","black"]

function introScreen2(){
    image(mini2,0,0,width,height);
    fill(255);
    textAlign(CENTER);
    textSize(26);
    text("Collect Gems", width / 2, 100);
    if(!continueButton7){
        continueButton7= createSprite(width/2,height/2+140,120,44);
        continueButton7.text="Start";
        continueButton7.color="blue";
        continueButton7.textColor="white";
        continueButton7.collider="static";
    }

    push();
    textAlign(LEFT);
    textSize(15);
    fill(255);
    text(
        "Use the basket to catch colored gems and avoid black gems.\n" +
        "You can either use arrow keys on a computer, or drag on the screen.\n"+
        "You have 3 lives — lose one if a black jem is caught,\n" +
        "If you can't miss a color gem, you lose 1 mark,\n"+
        "Score at least 5 marks within 30 seconds to win.",
        30, height / 2 - 60, width - 60
    );
    pop();

    if (continueButton7.mouse.presses()) {
    GameStarted2 = true;
    continueButton7.remove();
    continueButton7=null;
    initializeGame2();
}
}
function initializeGame2(){
    if(catcher2)catcher2.remove();
    for(let gem of fallingObjects2)gem.remove();
    fallingObjects2=[];

    score2=0;
    blackHits2=3;
    timeLeft=30;
    lastSecondTick2=millis();
    gameOver2=false;
    gameWon2=false;


    //Create walls:
    leftWall2= new Sprite(10,height/2,20, height);
    leftWall2.color="black";
    leftWall2.collider="static";

    rightWall2=new Sprite(width-10, height/2, 20,height);
    rightWall2.color="black";
    rightWall2.collider="static";

    //create Catcher
    catcher2=new Sprite(width/2, height-60,70,20);
    catcher2.text = "🧺";
    catcher2.textSize = 40;
    catcher2.collider = "kinematic"; 

    // Create falling gems
    for (let i = 0; i < 7; i++) {
        let gem = new Sprite(random(40, width - 40), random(-200, -50), 25, 25);
        gem.type = random(gemTypeWeights2);
        gem.text = gemColorEmoji[gem.type];
        gem.textSize=24;
        gem.vel.y = random(3,5);
        gem.vel.x = 0;
        gem.collider = "dynamic"; 
        gem.hitCounted = false;
        fallingObjects2.push(gem);
    }
}

    

function catchingGame2(){
    if(!catcher2){
        initializeGame2();
        return 
    }
    //Countdown timer
    if(mills()-lastSecondTick2>=1000){
        timeLeft2--;
        lastSecondTic2k=millis();
        if(timeLeft2<=0){
            endGame2(score >=5);
            return;
        }
    }

    //move catcher arrow key (keyboard):
    if (kb.pressing("left") || kb.pressing("ArrowLeft")) {
        catcher2.x -= 5;
    } else if (kb.pressing("right") || kb.pressing("ArrowRight")) {
        catcher2.x += 5;
    }
    //move using finger (i-pad)
    if (catcher2.mouse.dragging()){
        catcher2.x = mouse.x;
    }

    //KEEP CATCHER WITHIN SCREEN BOUNDS
    catcher2.x=constrain(catcher2.x, 40, width-40);

    for(let gem of fallingObjects2){
        let resetNeeded=false;

    //missed a color gem (fell past the bottom)
    if(gem.y>height+50){
        if(gem.type !== "black"){
            score2--;

            }
        }
        resetNeeded=true;
    }

    // caught by the catcher
    if(!resetNeeded&& gem.colliding(catcher2)&& !gem.hitCounted){
        gem.hitCounted=true;
        if(gem.type==="black"){
            blackHits2++;
            if(blackHits2>=3){
                endGame2(false);
                return;
            }
        }else{
            score2++;
        }resetNeeded=true;

    // Reset gem position after collision
    if(resetNeeded){
      gem.y = random(-100, -50);
      gem.x = random(40, width - 40);
      gem.vel.y = random(3,5); 
      gem.hitCounted = false;
      gem.type=random(gemTypeWeights);
      gem.text= gemColorEmoji[gem.type];

     }
   } 

   drawHUD2();
}

 function drawHUD2(){
    push();
    textAlign(LEFT,TOP);
    textSize(15);
    text(`Lives: ${lives}`, 16, 16);
    text(`Score: ${score} / 5`, 16, 38);
    text(`Time: ${timeLeft}s`, 16, 60);
    pop();
 }

function endGame2(won){
    gameOver2=true;
    gameWon2 =won;

    for(let gem of fallingObjects2)gem.remove();
    fallingObjects2=[];
    if (leftWall) {
    leftWall.remove();
    leftWall = null;
  }
    if (rightWall2) {
    rightWall2.remove();
    rightWall2 = null;
  }
    if (catcher2) {
    catcher2.remove();
    catcher2 = null;
  }
}

function drawEndScreen2(){
    push();
    fill(0);
    textAlign(CENTER);
    if (gameWon2) {
        textSize(22);
        text("You Win!\n Final Score: " +score
        , width / 2, height / 2 - 60, width-60);
    } else {
        textSize(22);
        text("You Lost!", width / 2, height / 2 - 80);
        textSize(15);
        if(blackHits2>=3){
            text("You caught 3 black gems.", width/2, height/2-30, width-60);
        }else{
            text("You didn't reach 5 marks in time.\n Final Marks: " +score2, width/2, height/2 - 30, width - 60);
        }
    }
    pop()
    image(playerCharacter,width/2-50, height / 2 + 140, 100, 150)

    if(!continueButton8){
        continueButton8=new Sprite(width/2, height/2+120,140,48);
        ontinueButton8.text="Continue";
        continueButton8.color= gameWon? "green": "blue";
        continueButton8.textColor="black";
        continueButton8.collider="static";
    }

    if (continueButton8.mouse.presses()) {
        cleanupGame2();
        screen =12 ; // Go to chapter 3
    }    
}




function cleanupGame2() {
    GameStarted2 = false;
    gameOver2=false;

    if (catcher2) {
        catcher2.remove();
        catcher2 = null;
    }

    for (let gem of fallingObjects2) {
        gem.remove();
    }
    fallingObjects2 = [];

    if (gamecontinueButton8) {
        gamecontinueButton8.remove();
        gamecontinueButton8 = null;
    }

    if (leftWall2) {
        leftWall2.remove();
        leftWall2 = null;
    }
  
    if (rightWall2) {
        rightWall2.remove();
        rightWall2 = null;
  }

  score2 = 0;
  blackHits2=3;
}
