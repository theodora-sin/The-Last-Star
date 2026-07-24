//cafe intro
function chapter1(){
    image(ch1,0,0,width,height);//forest
    fill(255);
    textAlign(LEFT);
    textSize(17);
    textFont("Arial");
    text(character_name+"awaken in an endless forest where the whole world is dark.\n"+
        character_name+"had a dim light lit the road, suddenly a voice talking and say:\n"+
        "The darkness know you are here, he is searchng for you-- run!!!",
    30,140,width-60);
    

    if(playerCharacter){
        image(playerCharacter, 30,height-380,110,160);
    }

    if(!choosebutton3){
        choosebutton3=new Sprite(width/2, height-140, 340,50);
        choosebutton3.shapeColor=("#7D7098");
        choosebutton3.text="Run ";
        choosebutton3.textSize = 20;
        choosebutton3.textColor="black";

        choosebutton4=new Sprite(width/2, height-80, 150,50);
        choosebutton4.shapeColor=("#7D7098");
        choosebutton4.text="Ignore";
        choosebutton4.textSize = 20;
        choosebutton4.textColor="black";
    }

    if (choosebutton3.mouse.presses()){
        choosebutton3.remove();
        choosebutton4.remove();
        choosebutton3 = null;
        choosebutton4 = null;
        screen=5;
    }else if (choosebutton4.mouse.presses()){
        choosebutton3.remove();
        choosebutton4.remove();
        choosebutton3 = null;
        choosebutton4 = null;
        screen=6;
    }

}

function transtionscreen1() {
    image(cave,0,0,width,height);//cave
    fill(255);
    textAlign(LEFT);
    textSize(20);
    textFont("Arial");
    text("Immediately you run into a cave, escaping a huge crowd of people who are chasing you.", 30,110,width-60);

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

    if (gem1) {
        image(gem1, width / 2,350, 50, 50);
    }

    if (!continueButton1) {
        continueButton1 = new Sprite(width / 2, height - 100, 140, 50);
        continueButton1.shapeColor = color('#341539');
        continueButton1.text = "Continue";
        continueButton1.textSize = 20;
        continueButton1.textColor = "white";
    }
    for (let i = 0; i < collectedGems.length; i++) {
        image(collectedGems[i], 20 + i * 60, 20, 50, 50);
    }

    if (continueButton1 && continueButton1.mouse.presses()) {
        continueButton1.remove();
        continueButton1 = null;
        collectedGems.push(gem1);
        screen = 7;
    }
}

function transtionscreen2() {
    image(ch1,0,0,width,height);//forest
    fill(255);
    textAlign(LEFT);
    textSize(23);
    textFont("Arial");
    text("People are shouting, and you realise it wasn't a hallucination.",30,187,width -60);

    if (playerCharacter) {
        image(playerCharacter, 50, height - 200, 100, 150);
    }

    if (!continueButton2) {
        continueButton2 = new Sprite(width / 2, height - 100, 140, 50);
        continueButton2.shapeColor = color('#341539');
        continueButton2.text = "Continue";
        continueButton2.textSize = 20;
        continueButton2.textColor = "white";
    }


    if (continueButton2 && continueButton2.mouse.presses()) {
        continueButton2.remove();
        continueButton2 = null;
        screen = 7;
    }
    }
