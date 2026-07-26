const GRID_COLS4 =20;
const GRID_ROWS4 =40;
const Move_interval4=100;
const target_score4=10;

let CELL_SIZE4;
let Started4=false;
let gameOver4 = false;
let Won4=false;
let foodX, foodY;
let snakeX, snakeY;
let velocityX=0,velcoityY=0;
let snakeBody=[];
let foodX,foodY;
let lastMoveTime4=0;
let score4=0;
let highScore4=0;
let conitnueButton16,continueButton17;

function introScreen4(){
    image(ch4,0,0,width,height);
    fill(255);
    textAlign(CENTER);
    textSize(26);
    text("Snake Game", width/2,100);

    textSize(16);
    text("Use the arrow keys to move.\n"+
        "Eat the glowing food to grow and score points.\n"+
        "Reach 10 points to win--but don't hit the walls or yourself.",
        width/2,150,width-60);
    if (!continueButton16){
        continueButton16=new Sprite (width/2,height/2+140,120,44);
        continueButton16.shapeColor=color("blue");
        continueButton16.text="Start"
        continueButton16.textColor="white";
        continueButton16.collider="static";
    }

    if (continueButton16.mouse.presses()) {
    continueButton16.remove();
    continueButton16 = null;
    initializeSnake4();
    Started4 = true;
}
}
function initializeSnake4(){
    CELL_SIZE4=width/GRID_COLS4;
    snakeX=Math.floor(GRID_COLS4/2);
    snakeY=Math.floor(GRID_ROWS4/2);
    velocityX=0;
    velocityY=0;
    snakeBody= [[snakeX, snakeY]];
    score4 = 0;
    GameOver4 = false;
    Won4 = false;
    lastMoveTime4 = millis();
    
    updateFoodPosition4();
}
function updateFoodPosition4() {
  foodX = Math.floor(Math.random() * GRID_COLS4);
  foodY = Math.floor(Math.random() * GRID_ROWS4);
}
function playSnake4(){
    background(20,20,30);
    //food
    fill(255,200,0);
    rect(foodX * CELL_SIZE4, foodY * CELL_SIZE4, CELL_SIZE4, CELL_SIZE4);    

    if (snakeX === foodX && snakeY === foodY) {
      updateFoodPosition4();
      snakeBody.push([foodX, foodY]);
      score4++;
      if (score4 > highScore4) highScore4 = score4;
      if (score4 >= TARGET_SCORE4) {
        endSnake4(true);
        return;
      }
    }
    snakeX += velocityX;
    snakeY += velocityY;
    for(let i=snakeBody.length -1;i>0;i--){
        snakeBody[i]=snakeBody[i-1];
    }
    snakeBody[0]=[snakeX,snakeY];
    if (snakeX4 < 0 || snakeX4 >= GRID_COLS4 || snakeY4 < 0 || snakeY4 >= GRID_ROWS4) {
      endSnake4(false);
      return;
    }
    for(let i=1;i<snakeBody.length;i++){
        if(snakeBody[i][0]=== snakeX&&snakeBody[i][1]===snakeY){
            endSnake4(false);
            return;
        }
    }
    
    fill(120,220,150);
  for (const segment of snakeBody) {
    rect(segment[0] * CELL_SIZE4, segment[1] * CELL_SIZE4, CELL_SIZE4, CELL_SIZE4);
    }
    
    fill(255);
    textAlign(LEFT, TOP);
    textSize(16);
    text(`Score: ${score4}`, 10, 10);
    text(`High Score: ${highScore4}`, 10, 32);
}


function keyPressed() {
  if (screen !== 20|| !Started4 || GameOver4) return;
 
  if (keyCode === UP_ARROW && velocityY !== 1) {
    velocityX = 0; velocityY = -1;
  } else if (keyCode === DOWN_ARROW && velocityY !== -1) {
    velocity4 = 0; velocity4 = 1;
  } else if (keyCode === LEFT_ARROW && velocity4 !== 1) {
    velocity4 = -1; velocity4 = 0;
  } else if (keyCode === RIGHT_ARROW && velocity4 !== -1) {
    velocity4 = 1; velocity4 = 0;
  }
}

function endSnake(won){
    gameOver4=true;
    gameWon4=won;
}

function drawSnakeEndScreen4() {
  background(20, 20, 30);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(22);
  if (snakeWon4) {
    text(`You reached ${TARGET_SCORE4} points!`, width / 2, height / 2 - 40, width - 60);
  } else {
    text("Game Over", width / 2, height / 2 - 60);
    textSize(16);
    text(`Final Score: ${score4}`, width / 2, height / 2 - 20);
  }
 
  if (!continueButton17) {
    continueButton17 = new Sprite(width / 2, height / 2 + 60, 140, 48);
    continueButton17.shapeColor = color(snakeWon4 ? "green" : "blue");
    continueButton17.text = "Continue";
    continueButton17.textColor = "white";
    continueButton17.collider = "static";
  }
 
  if (continueButton17.mouse.presses()) {
    continueButton17.remove();
    continueButton17 = null;
    Started4 = false;
    GameOver4 = false;
    screen=21
     }
}
