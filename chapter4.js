//scenerio 4 
function chapter4(){
    image(ch4,0,0,width,height);//slient village
    fill(255);
    textAlign(LEFT);
    textSize(17);
    textFont("Arial");
    text(character_name+ " arrive at a village, every house is abandoned, every flower turn black.\n The villagers still walking around, but their eye are empty."+
        character_name+ " heard argument appear in every conner, sensed that they only chase wealth and power.",
        30,140,width-60);
    
    if(playerCharacter){
        image(playerCharacter,30,height-380,110,160);
    }
    if(!continueButton12){
        continueButton12= new Sprite(width/2, height-100,140,50);
        continueButton12.shapeColor= color("#341539");
        continueButton12.text="Continue";
        continueButton12.textSize=20;
        continueButton12.textColor="white";
    }

    if(continueButton12&&continueButton12.mouse.presses()){
        continueButton12.remove();
        continueButton12=null;
        screen=17;
    }
}

function dilemma4(){
    image(ch4,0,0,width,height);//slient village
    fill(255);
    textAlign(LEFT);
    textSize(17);
    textFont("Arial");
    text("Suddenly "+character_name+" saw a child get bully by their friends.\n"+
        "Yet, "+character_name+" saw the golden light of another Hope Gem appears inside the abandoned house.",
        30,140,width-60);
    
    textSize(20);
    textFont("Courier New");
    text("Decision:",30,300,width-60);

    if(playerCharacter){
        image(playerCharacter, 30,height-380,110,160);
    }
    
    if(!choosebutton9){
        choosebutton9= new Sprite(width/2, height-140, 300,50);
        choosebutton9.shapeColor=color("#7D7098");
        choosebutton9.text="Save the child";
        choosebutton9.textSize = 20;
        choosebutton9.textColor="black";

        choosebutton10=new Sprite(width/2, height-80, 150,50);
        choosebutton10.shapeColor=color("#7D7098");
        choosebutton10.text="Ignore";
        choosebutton10.textSize = 20;
        choosebutton10.textColor="black";        
    }

    if (choosebutton9.mouse.presses()){
        choosebutton9.remove();
        choosebutton10.remove();
        choosebutton9= null;
        choosebutton10 = null;
        screen=18;
    }else if (choosebutton10.mouse.presses()){
        choosebutton9.remove();
        choosebutton10.remove();
        choosebutton9 = null;
        choosebutton10= null;
        screen=19;
    }

}

function transtionscreen7(){
    image(ch4,0,0,width,height);//slient village
    fill(255);
    textAlign(LEFT);
    textSize(17);
    textFont("Arial");
    text("Although the Hope Gem disappear, a mysterious voice whispers:\n"+
        "Hope is never found by those who seek reward, only by those who choose compassion.",
    30,110,width-60);

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

    if (gem4) {
        image(gem4, width / 2,350, 50, 50);
    }

    if (!continueButton14) {
        continueButton14 = new Sprite(width / 2, height - 100, 140, 50);
        continueButton14.shapeColor = color('#341539');
        continueButton14.text = "Continue";
        continueButton14.textSize = 20;
        continueButton14.textColor = "white";
    }
    for (let i = 0; i < collectedGems.length; i++) {
        image(collectedGems[i], 20 + i * 60, 20, 50, 50);
    }

    if (continueButton14 && continueButton14.mouse.presses()) {
        continueButton14.remove();
        continueButton14 = null;
        collectedGems.push(gem4);
        screen = 20;
    }
}

function transtionscreen8() {
    image(ch4,0,0,width,height);//forest
    fill(255);
    textAlign(LEFT);
    textSize(20);
    textFont("Arial");
    text("Ignore the villagers,and chase the glowing gem.\n"+
        "Bullies continue bully the kids until the kids eventully turn into darkness."
        ,30,187,width -60);

    if (playerCharacter) {
        image(playerCharacter, 50, height - 200, 100, 150);
    }

    if (!continueButton15) {
        continueButton15= new Sprite(width / 2, height - 100, 140, 50);
        continueButton15.shapeColor = color('#341539');
        continueButton15.text = "Continue";
        continueButton15.textSize = 20;
        continueButton15.textColor = "white";
    }


    if (continueButton15 && continueButton15.mouse.presses()) {
        continueButton15.remove();
        continueButton15 = null;
        screen = 20;
    }
    }
