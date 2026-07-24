//Screen 8 chapter 2, dark
function chapter2() {
    image(ch2,0,0,width,height);
    fill(0);
    textAlign(LEFT);
    textSize(17);
    textFont("Arial");
    text("After collecting all 3 safe food, " + character_name + " steps out of the cave into the open dark.\n" +
        "The sky has no stars except a faint golden light flickers in the distance,\n" +
        character_name + " you believe it is one of the scattered gem pieces.\n"+
        "What path do you take"
        , 30, 140, width - 60);

    if(!choosebutton5){
        choosebutton5=new Sprite(width/2, height-140, 150,50);
        choosebutton5.shapeColor=color("#7D7098");
        choosebutton5.text="Take longer path ";
        choosebutton5.textSize = 20;
        choosebutton5.textColor="black";

        choosebutton6=new Sprite(width/2, height-80, 150,50);
        choosebutton6.shapeColor=color("#709398");
        choosebutton6.text="Take shortcut";
        choosebutton6.textSize = 20;
        choosebutton6.textColor="black";
    }

    if (choosebutton5.mouse.presses()){
        choosebutton5.remove();
        choosebutton6.remove();
        choosebutton5 = null;
        choosebutton6 = null;
        screen=9;
    }else if (choosebutton6.mouse.presses()){
        choosebutton5.remove();
        choosebutton6.remove();
        choosebutton5 = null;
        choosebutton6 = null;
        screen=10;
    }
}

function chapter2_longpath() {
    image(ch2,0,0,width,height);//forest
    fill(255);
    textAlign(LEFT);
    textSize(20);
    textFont("Arial");
    text("The road is difficult and filled with broken bridges and fallen trees, but it has avoid Darkness.", 30,110,width-60);

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

    if (gem2) {
        image(gem2, width / 2,350, 50, 50);
    }

    if (!continueButton5) {
        continueButton5 = new Sprite(width / 2, height - 100, 140, 50);
        continueButton5.shapeColor = color('#341539');
        continueButton5.text = "Continue";
        continueButton5.textSize = 20;
        continueButton5.textColor = "white";
    }
    for (let i = 0; i < collectedGems.length; i++) {
        image(collectedGems[i], 20 + i * 60, 20, 50, 50);
    }

    if (continueButton5 && continueButton5.mouse.presses()) {
        continueButton5.remove();
        continueButton5 = null;
        collectedGems.push(gem2);
        screen = 11;
    }
}

function chapter2_shortcut() {
    image(ch2_1,0,0,width,height);//
    fill(255);
    textAlign(LEFT);
    textSize(23);
    textFont("Arial");
    text("At first, it seems faster, but when you slowly walk pass, the light become unstable, drifting and dimming as the Darkness is closer to the gem and try to snuff all the hope out before player can reach it.",30,187,width -60);

    if (playerCharacter) {
        image(playerCharacter, 50, height - 200, 100, 150);
    }

    if (!continueButton6) {
        continueButton6 = new Sprite(width / 2, height - 100, 140, 50);
        continueButton6.shapeColor = color('#341539');
        continueButton6.text = "Continue";
        continueButton6.textSize = 20;
        continueButton6.textColor = "white";
    }


    if (continueButton6 && continueButton6.mouse.presses()) {
        continueButton6.remove();
        continueButton6= null;
        screen = 11;
    }
    }

