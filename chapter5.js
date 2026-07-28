function chapter5(){
    image(ch5,0,0,width,height);//slient path
    fill(255);
    textAlign(LEFT);
    textSize(17);
    textFont("Arial");
    text("After leaving the village, "+character_name+" walk alone along a narrow stone path."+
        "No wind, no birds, only your footsteps echo through the endless silence.\n"+
        character_name+" stop walking.",
    30,140,width-60);
    if (playerCharacter) {
        image(playerCharacter, 30, 480,100, 150);
    }
    if (!continueButton21) {
        continueButton21 = new Sprite(width / 2, height - 100, 140, 50);
        continueButton21.shapeColor = color('#341539');
        continueButton21.text = "Continue";
        continueButton21.textSize = 20;
        continueButton21.textColor = "white";
    }


    if (continueButton21 && continueButton21.mouse.presses()) {
        continueButton21.remove();
        continueButton21 = null;
        screen = 22;
    }    
}

const monologueLines = [
    { speaker: "Voice 1", line: "Why keep going?\n"+ "The world has already fallen into darkness" },
    { speaker: "Voice 2", line: "But you still remember the people you met, the child you saved" },
    { speaker: "Voice 1", line: "You could turn back, no one will blame you\n"+"Everyone already end up in despair." },
    { speaker: "Voice 2", line: "Who will save those who still believe?"},
    { speaker: "Voice 1", line: "This is your choice, you could be greedy."},
    { speaker: "Voice 2", line: "Or you could be a hero."}
];

function monologue(){
    image(ch5,0,0,width,height);//slient path 
    fill(255);
    noStroke();  
    rect(20,20,width-40,550,12); 

    let y=55;

    //speaker name
    for (const entry of monologueLines){
    fill("#e0c9ff");
    textAlign(LEFT);
    textFont("Arial");
    textStyle(BOLD);
    textSize(15);
    text(entry.speaker, 35,y);
    textStyle(NORMAL);

    fill(0);
    textSize(16);
    text(entry.line, 35, y + 15, 320, 80);
    y+=50;
    }

    fill(255);
    textSize(15);
    text("What do you do?,35,610")

    if (!choosebutton11) {
        choosebutton11 = new Sprite(width / 2, 700, 250, 50);
        choosebutton11.shapeColor = color("#7D7098");
        choosebutton11.text = "Continue walking";
        choosebutton11.textSize = 18;
        choosebutton11.textColor = "white";

        choosebutton12 = new Sprite(width / 2 ,755, 250, 50);
        choosebutton12.shapeColor = color("#709398");
        choosebutton12.text = "Return";
        choosebutton12.textSize = 18;
        choosebutton12.textColor = "white";
        }

        if (choosebutton11 && choosebutton11.mouse.presses()) {
            choosebutton11.remove();
            choosebutton12.remove();
            choosebutton11 = null;
            choosebutton12 = null;
            screen = 23;
        } else if (choosebutton12 && choosebutton12.mouse.presses()) {
            choosebutton11.remove();
            choosebutton12.remove();
            choosebutton11 = null;
            choosebutton12 = null;
            screen = 24;
        }
    }

function transtionscreen9() {
    image(ch5,0,0,width,height);
    fill(255);
    textAlign(LEFT);
    textSize(20);
    textFont("Arial");
    text("The path is frightening, the future is uncertain.\n"+
        "You choose to move forward, even through the end cannot be seen.\n"+
        "You take one final step, Darkness is waiting.", 30,200,width-60);

    fill(255);
    textAlign(CENTER);
    textStyle(BOLD);
    textSize(21);
    textFont("Nunito");
    text("You earn a gem!", width / 2, 300);
    textStyle(NORMAL);

    if (playerCharacter) {
        image(playerCharacter, width / 2-50, 380,100, 150);
    }

    if (gem5) {
        image(gem5, width / 2,480, 50, 50);
    }

    if (!continueButton22) {
        continueButton22 = new Sprite(width / 2, height - 100, 140, 50);
        continueButton22.shapeColor = color('#341539');
        continueButton22.text = "Continue";
        continueButton22.textSize = 20;
        continueButton22.textColor = "white";
    }
    for (let i = 0; i < collectedGems.length; i++) {
        image(collectedGems[i], 20 + i * 60, 20, 50, 50);
    }

    if (continueButton22 && continueButton22.mouse.presses()) {
        continueButton22.remove();
        continueButton22 = null;
        collectedGems.push(gem5);
        screen = 25;
    }
}

function transtionscreen10() {
    image(ch5,0,0,width,height);//forest
    fill(255);
    textAlign(LEFT);
    textSize(23);
    textFont("Arial");
    text("You are frightened, Hope is just an uncertainity.\n"+
        "Too much unknown lies ahead, so you choose to go backward\n"+
        "Walking the comfortable path instead.",30,187,width -60);

    if (playerCharacter) {
        image(playerCharacter, 50, height - 200, 100, 150);
    }

    if (!continueButton23) {
        continueButton23 = new Sprite(width / 2, height - 100, 140, 50);
        continueButton23.shapeColor = color('#341539');
        continueButton23.text = "Continue";
        continueButton23.textSize = 20;
        continueButton23.textColor = "white";
    }


    if (continueButton23 && continueButton23.mouse.presses()) {
        continueButton23.remove();
        continueButton23 = null;
        screen = 25;
    }
    }
