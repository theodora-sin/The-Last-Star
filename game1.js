//Maze Game+Collect game screen 7

function mazeScaleX(v) { return v * (width / 600); }
function mazeScaleY(v) { return v * (height / 600); }

const GoodFoodEmoji = {
    sandwich: "🥪",
    bread: "🍞",
    rice: "🍙"
};
const goodFoodList = Object.values(GoodFoodEmoji);

//walls 
const wallDefs = [
    [300, 100, 500, 8],
    [550, 300, 8, 400],
    [350, 500, 300, 8],
    [150, 500, 200, 8],
    [50, 350, 8, 200],
    [50, 200, 8, 200],
    [150, 160, 6, 60],
    [200, 200, 60, 6],
    [320, 160, 6, 80],
    [260, 240, 50, 6],
    [180, 300, 6, 60],
    [240, 340, 80, 6],
    [380, 270, 6, 100],
    [430, 340, 60, 6],
    [300, 420, 6, 80],
    [200, 440, 100, 6],
    [150, 380, 60, 6],
    [460, 200, 60, 6]
];

//Obstacle(good=safe to collect, bad =unwanted food)
const obstacleDefs = [
    { x: 360, y: 320, type: "good" },
    { x: 180, y: 200, type: "good" },
    { x: 320, y: 280, type: "good" },
    { x: 180, y: 220, type: "bad" },
    { x: 230, y: 280, type: "bad" },
    { x: 180, y: 400, type: "bad" },
    { x: 534, y: 460, type: "bad" },
    { x: 70, y: 280, type: "bad" },
    { x: 430, y: 150, type: "bad" },
    { x: 100, y: 120, type: "bad" },
    { x: 460, y: 482, type: "bad" }

]



function mazegame() {
    image(mini1,0,0,width,height);//food background,
    fill(0);
    textAlign(CENTER);
    textSize(26);
    text("Maze", width / 2, 100);

    textSize(16);
    text(
    "Use the arrow keys or swipe to guide your character through the cave.\n" +
    "Collect 3 food which is safe to eat during journey while avoiding rotten, opened food.\n" +
    "Reach the exit to continue your journey.",
    30, 150, width - 60
);
    if (playerCharacter) {
        image(playerCharacter, 30, height - 380, 110, 160);
    }

    if (!continueButton3) {
        continueButton3 = new Sprite(width / 2, height / 2 + 140, 120, 44);
        continueButton3.text = "start";
        continueButton3.color = "blue";
        continueButton3.textColor = "white";
        continueButton3.collider = "static";
    }
    if (continueButton3 && continueButton3.mouse.presses()) {
        continueButton3.remove();
        continueButton3 = null;
        initializeMazeGame();
        mazeStarted = true;
    }
}

function initializeMazeGame() {
    if (player) player.remove();
    if (walls) walls.removeAll();
    if (obstacles) obstacles.removeAll();

    mazeCollected = 0;
    mazeGameOver = false;
    mazeWon = false;
    showEndZoneHint = false;

    player = new Sprite(mazeScaleX(320), mazeScaleY(90), 24, 24);
    player.text = "📦";
    player.textSize = 26;
    player.collider = "dynamic";

    //create walls
    walls = new Group();
    walls.color = "black";
    walls.collider = "static";
    walls.stroke = "white";
    walls.strokeWeight = 2;

    for (const [x, y, w, h] of wallDefs) {
        new walls.Sprite(mazeScaleX(x), mazeScaleY(y), mazeScaleX(w), mazeScaleY(h));
    }

    //creating obstacles
    obstacles = new Group();
    obstacles.collider = "static";
    for(const key of Object.keys(rottenFoodImages)){
        rottenFoodImages[key].resize(26,26)
    }

    //counting good and bad food
    let goodIndex = 0;
    let badIndex = 0;
    const rottenKeys=Object.keys(rottenFoodImages)
    for (const def of obstacleDefs) {
        const item = new obstacles.Sprite(mazeScaleX(def.x), mazeScaleY(def.y), 26, 26);
        item.isGood = def.type == "good";
        if (item.isGood) {
            item.text = goodFoodList[goodIndex % goodFoodList.length];
            item.textSize = 22;
            goodIndex++;
        } else {
            item.image = rottenFoodImages[Object.keys(rottenFoodImages)[badIndex % Object.keys(rottenFoodImages).length]];
            badIndex++;
        }
    }
}

function drawMazeMarkers() {
    //Write Start
    fill(0, 255, 0);
    rect(mazeScaleX(285), mazeScaleY(70), mazeScaleX(75), mazeScaleY(25));
    fill(0);
    textAlign(CENTER);
    textSize(16);
    text("Start", mazeScaleX(320), mazeScaleY(90));

    //Write End
    fill(255, 0, 0);
    rect(mazeScaleX(30), mazeScaleY(515), mazeScaleX(50), mazeScaleY(25));
    fill(255);
    text("End", mazeScaleX(55), mazeScaleY(532));
}
function drawMazeHUD() {
    push();
    fill(0);
    textAlign(LEFT, TOP);
    textSize(15);
    text(`Collected: ${mazeCollected} / 3`, 16, 16);
    pop();

    if (showEndZoneHint) {
        push();
        fill(200, 0, 0);
        textAlign(CENTER, TOP);
        textSize(15);
        text("Collect all 3 items first!", width / 2, 44, width - 60);
        pop();
    }
}

function isPlayerInEndZone() {
    if (!player) return false;
    const half = 12;
    const zoneX = mazeScaleX(30);
    const zoneY = mazeScaleY(515);
    const zoneW = mazeScaleX(50);
    const zoneH = mazeScaleY(25);
    return (
        player.x + half > zoneX &&
        player.x - half < zoneX + zoneW &&
        player.y + half > zoneY &&
        player.y - half < zoneY + zoneH
    );
}


function runMazeGame() {
    image(mini1,0,0,width,height);
    drawMazeMarkers();

    if (player) {
        player.vel.x = 0;
        player.vel.y = 0;

        //move catcher arrow key (keyboard):
        if (kb.pressing("left") || kb.pressing("ArrowLeft")) player.vel.x = -3;
        if (kb.pressing("right") || kb.pressing("ArrowRight")) player.vel.x = 3;
        if (kb.pressing("up") || kb.pressing("ArrowUp")) player.vel.y = -3;
        if (kb.pressing("down") || kb.pressing("ArrowDown")) player.vel.y = 3;

        //move using finger (i-pad)
        if(player.mouse.dragging()){
            player.x = mouse.x;
            player.y = mouse.y;
        }
        player.collide(walls);
        
        if(obstacles){
            for (const item of obstacles){
                if(player.colliding(item)){
                    if(item.isGood){
                        item.remove();
                        mazeCollected++;
                    } else{
                        endMazeGame(false);
                        return;
                    }
                }
            }
        }

    if (isPlayerInEndZone()) {
        if (mazeCollected >= 3) {
            endMazeGame(true);
            return;
        } else {
            showEndZoneHint = true;
        }
    } else {
        showEndZoneHint = false;
    }
  } 
    drawMazeHUD();
}

function endMazeGame(won) {
    mazeGameOver = true;
    mazeWon = won;
    if (player) { player.remove(); player = null; }
    if (walls) { walls.removeAll(); walls = null }
    if (obstacles) { obstacles.removeAll(); obstacles = null; }
}

function drawMazeEndScreen() {
    image(mini1,0,0,width,height);
    push();
    fill(0);
    textAlign(CENTER, CENTER);

    if (mazeWon) {
        textSize(22);
        text("You made it! You collected 3 good items." 
            , width / 2, height / 2 - 40, width - 60);
    } else {
        textSize(22);
        text("That food wasn't save to eat."
            , width / 2, height / 2 - 40, width - 60);
    }
    pop();

    if (!continueButton4) {
        continueButton4= createSprite(width / 2, height / 2 + 100, 140, 48);
        continueButton4.text = "Continue";
        continueButton4.color = mazeWon ? "green" : "blue";
        continueButton4.textColor = "white";
        continueButton4.collider = 'static';
    }
    if (continueButton4.mouse.presses()) {
        continueButton4.remove();
        continueButton4 =null;
        mazeStarted = false;
        mazeGameOver = false;
        screen = 8;
    }
}
