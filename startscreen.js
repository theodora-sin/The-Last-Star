//screen 0,start screen
function startscreen(){
    image(startBg,0,0,width, height);//dark background
    fill(255);
    textAlign(CENTER);
    textFont("DMSerifDisplay");
    textSize(32);
    text("The Last Star");
    textSize(20);
    text("Click start button to start the game!", 30, height/2 + 70, width - 60);

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
    fill(255);
    textAlign(CENTER);
    textFont("DM Serif Display");
    textSize(28);
    text("Introduction", width / 2 , 60);    

    //Introduction
    textAlign(LEFT);
    textSize(15);
    textFont("Arial");
    text("Every person carries a tiny star inside them--quiet, steady, waiting. It is called--hope.\n"+
        "No one knows when their story will end, but everyone gets to choose what path they walk.\n"+
        "Some choice are dark, some choice are bright. Somewhere along this journey, five gems are hidden, each holding a single letter--fragement of a word almost forgotten.\n"+
        "Only those who collect every Gem will discover the truth, the star that has been trying to reveal.\n"+
         "Your Journey begins now.",
    30,110,width-60);

    //Show Chosen character:
    const imgSize=140;
    image(playerCharacter, width / 2 - imgSize/2 , height / 2 + 20, imgSize, imgSize);

    //continue button:
    if (!IntroButton&& !IntroShown){
        IntroButton= new Sprite(width /2, height -80,160,50);
        IntroButton.shapeColor=color("#759dc7");
        IntroButton.text="Continue";
        IntroButton.textSize= 20 ;
        IntroButton.textColor ="black"
    }
     if (IntroButton.mouse.presses()){
        IntroButton.remove();
        IntroButton=null;
        IntroShown=true;
        screen=3;
     }
}

function screen3(){
    image(startBg,0,0,width, height)
    fill(255);
    textFont("DM Serif Display");
    textSize(28);
    text("Preface", 150, 60);    

    textAlign(LEFT);
    textSize(18);
    text("One night, without warning, the player's star suddenly begins to fade away, no illness, no wound, no explanation.\n"+
        "There is a person who the player dreaming tell the player you only have 1 day left before your star disappear forever.",
    30,100,width-60)
    text("The secret--the player isn't an ordinary person, "+ character_name+ " is the Last star keeper who is the only person capable to restoring hope.\n"+
        "Nowadays, when humanity becomes greedy and hopeless, it only cares about materialism; the light has shattered into countless gems.",
    30,250,width-60)
    text("The Darkness: The Darkness is a villain who was the first Star Keeper.\n"+
        "After watching countless people betray, hate and destroy others, he abandoned Hope.\n"+
        "His own star became black. He wished to extinguish every remaining star so no one could feel any pain.",
    30,420,width-60)

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
        screen=4;
     }    
    
}
