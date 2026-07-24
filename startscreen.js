//screen 0,start screen
function startscreen(){
    image(startBg,0,0,width, height);//dark background
    fill(255);
    textAlign(CENTER);
    textSize(20);
    textFont("DMSerifDisplay");
    text("Click the start button below to start the game!", width/2, height/2 +70,width-60);

    //Create the start button:
    if (!startButton){
        startButton=new Sprite(width/2, height/2 +130,130,48);
        startButton.shapeColor=color("#cad8fd");
        startButton.text="Start";
        startButton.textSize= 22;
        startButton.textColor="black";
    }

    if (startButton.mouse.presses()){
        startButton.remove();
        startButton=null;
        screen=1;
    }
}

//screen 1,character screen
function screen1(){
    image(startBg,0,0,width, height);
    fill(255);
    textAlign(CENTER);
    textSize(24);
    text("Choose Your Character",width/2,90);

    //Display character images
    const imgSize=140;
    const gap = 20;
    const pairWidth = imgSize *2 +gap;
    const startX =(width-pairWidth)/2;
    const imgY =220;

    const boyX=startX;
    const girlX=startX +imgSize +gap;

    image(charImg1, boyX, imgY, imgSize, imgSize); //boy
    image(charImg2, girlX, imgY, imgSize, imgSize); //Girl

    //Create buttons 
    if (!choosebutton1 && !choosebutton2){
        choosebutton1=new Sprite(boyX +imgSize/2, imgY +imgSize+50,120,50);
        choosebutton1.shapeColor = color('#79BAEC');
        choosebutton1.text= "Max";
        choosebutton1.textSize = 22;
        choosebutton1.textColor="black";

        choosebutton2= new Sprite(girlX +imgSize/2,imgY+ imgSize+50,120,50);
        choosebutton2.shapeColor= color('#AC94F4'); 
        choosebutton2.text="Maya";
        choosebutton2.textSize=22;
        choosebutton2.textColor="black";

    }
    if(choosebutton1&& choosebutton1.mouse.presses()){
        playerCharacter=charImg1;
        character_name="Max";
        gotoPreface();
    }else if(choosebutton2 && choosebutton2.mouse.presses()){
        playerCharacter= charImg2;
        character_name="Maya";
        gotoPreface();
    }
}

function gotoPreface(){
    choosebutton1.remove();
    choosebutton2.remove();
    choosebutton1=null;
    choosebutton2=null;
    screen=2;
}

function screen2(){
    image(startBg,0,0,width, height)
    fill(0);
    textAlign(CENTER);
    textFont("DM Serif Display");
    textSize(28);
    text("Preface", width / 2 , 60);    

    //Introduction
    textAlign(LEFT);
    textSize(15);
    text("Every person carries a tiny star inside them--quiet, steady, waiting. It is called--hope.\n"+
        "No one knows when their story will end, but everyone gets to choose what path they walk.\n"+
        "Some choice are dark, some choice are bright. Somewhere along this journey, five gems are hidden, each holding a single letter--fragement of a word almost forgotten.\n"+
        "Only those who collect every Gem will discover the truth their star has been trying to reveal, Your Journey begins now.",
    30,110,width-60);

    //Show Chosen character:
    const imgSize=140;
    image(playerCharacter, width / 2 - imgSize/2 , height / 2 + 20, imgSize, imgSize);

    //continue button:
    if (!prefaceButton&& !prefaceShown){
        prefaceButton= new Sprite(width /2, height -80,160,50);
        prefaceButton.shapeColor=color("#759dc7");
        prefaceButton.text="Continue";
        prefaceButton.textSize= 20 ;
        prefaceButton.textColor ="black"
    }
     if (prefaceButton.mouse.presses()){
        prefaceButton.remove();
        prefaceButton=null;
        prefaceShown=true;
        
     }
}
