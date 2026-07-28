function chapter3(){
    image(mini2,0,0,width,height);
    fill(255);
    textAlign(LEFT);
    textSize(17);
    textFont("Arial");
    text("While "+character_name+" walking on the road.\n"
        +character_name+ " reach an old crossroad\n"+
       "Two strangers standing on a shaky bridge\n"+
        "Their stars are barely visible.\n"+character_name+ " can hear their conversation.",
    30,140,width-60);

    if(playerCharacter){
        image(playerCharacter,30,height-380,110,160);
    }

    if(!continueButton9){
        continueButton9=new Sprite(width /2, height-100 ,140,50);
        continueButton9.shapeColor=color("#a08ba3");
        continueButton9.text="Continue";
        continueButton9.textSize = 20;
        continueButton9.textColor="white";
    }
    if(continueButton9 && continueButton9.mouse.presses()){
        continueButton9.remove();
        continueButton9=null;
        dialogueIndex=0;
        screen= 13
    }
}

//Screen 13--the conversation
const conversationLines = [
    { speaker: "Stranger 1", line: "What's the point of trying anymore? Every road just ends in despair." },
    { speaker: "Stranger 2", line: "Maybe, but if we stop walking, we'll never find another path." },
    { speaker: "Stranger 1", line: "But... I've tried so many times. Every ending is the same — it always ends in disappointment." }
];

function conversation(){
    image(ch3_1,0,0,width,height);
    fill(255);
    noStroke();
    rect(20,460,width-40,150,12); //create chat box

    //speaker name
    fill("#e0c9ff");
    textAlign(LEFT);
    textFont("Arial");
    textStyle(BOLD);
    textSize(15);
    text(conversationLines[dialogueIndex].speaker, 35, 490);
    textStyle(NORMAL);

    // dialogue text 
    fill(0);
    textSize(17);
    text(conversationLines[dialogueIndex].line, 35, 515, 330, 80);

    const isLastLine=dialogueIndex >= conversationLines.length - 1;
  if (!isLastLine) {
    if(!dialogueContinueButton){
        dialogueContinueButton= new Sprite(width/2, 645,160,44);
        dialogueContinueButton.shapeColor=color("#4a3f5c");
        dialogueContinueButton.text="Next";
        dialogueContinueButton.textSize=18;
        dialogueContinueButton.textColor="white";
    }
    if(dialogueContinueButton.mouse.presses()){
        dialogueIndex++;
    }
    }else{
        if(dialogueContinueButton){
            dialogueContinueButton.remove();
            dialogueContinueButton=null;
        }
    
        fill(255);
        textSize(15);
        text("How do you respond?", 35,645);

        if (!choosebutton7) {
            choosebutton7 = new Sprite(width / 2, 700, 340, 50);
            choosebutton7.shapeColor = color("#7D7098");
            choosebutton7.text = "Maybe this time it'll be different — keep moving.";
            choosebutton7.textSize = 14;
            choosebutton7.textColor = "white";

            choosebutton8 = new Sprite(width / 2,755, 340, 50);
            choosebutton8.shapeColor = color("#709398");
            choosebutton8.text = "It's okay to give up sometimes.";
            choosebutton8.textSize = 14;
            choosebutton8.textColor = "white";
        }

        if (choosebutton7 && choosebutton7.mouse.presses()) {
            choosebutton7.remove();
            choosebutton8.remove();
            choosebutton7 = null;
            choosebutton8 = null;
            screen = 14;
        } else if (choosebutton8 && choosebutton8.mouse.presses()) {
            choosebutton7.remove();
            choosebutton8.remove();
            choosebutton7 = null;
            choosebutton8 = null;
            screen = 15;
        }
    }
}

function transtionscreen5() {
    image(ch3_1,0,0,width,height);

    fill(255);
    textAlign(CENTER);
    textStyle(BOLD);
    textSize(21);
    textFont("Nunito");
    text("You earn a gem!", width / 2, 240);
    textStyle(NORMAL);

    if (playerCharacter) {
        image(playerCharacter, width / 2-50, 280,100, 150);
    }

    if (gem3) {
        image(gem3, width / 2,380, 50, 50);
    }

    if (!continueButton10) {
        continueButton10 = new Sprite(width / 2, height - 100, 140, 50);
        continueButton10.shapeColor = color('#341539');
        continueButton10.text = "Continue";
        continueButton10.textSize = 20;
        continueButton10.textColor = "white";
    }
    for (let i = 0; i < collectedGems.length; i++) {
        image(collectedGems[i], 20 + i * 60, 20, 50, 50);
    }

    if (continueButton10 && continueButton10.mouse.presses()) {
        continueButton10.remove();
        continueButton10 = null;
        collectedGems.push(gem3);
        screen = 16;
    }
}

function transtionscreen6(){
    image(ch3_1,0,0,width,height);
    fill(255);
    textAlign(LEFT);
    textSize(18);
    textFont("Arial");
    text("Something quieter passess between them.\n The stranger aren't quite as alone as they were a moment ago.",
        30,130,width-60
    )
    if(playerCharacter){
        image(playerCharacter, width/2-50,height/2+40,100,150);
    }
    if(!continueButton11){
        continueButton11=new Sprite(width/2, height-100,140,50);
        continueButton11.shapeColor=color("#341539");
        continueButton11.text="Continue";
        continueButton11.textSize=20;
        continueButton11.textColor="white";
    }
    if(continueButton11&& continueButton11.mouse.presses()){
        continueButton11.remove();
        continueButton11=null;
        screen=16;
    }
}
