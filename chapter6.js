const SECRET_WORD = "DESTINY";
function Chapter6(){
    image(ch6, 0,0,width,height);//
    fill(255);
    textAlign(LEFT,TOP);
    textSize(17);
    textFont("Arial");
    text(character_name+" finally reach the statue where the gem orginally placed."+
        character_name+" see Darkness standing in the middle of the statue and waiting your arrival.",
        30,140,width-60);

    if (playerCharacter){
        image(playerCharacter, 30, height-380,110,160);
        image(Darkness, 250, height-500,100,160);
    }
    if (!continueButton24) {
        continueButton24 = new Sprite(width / 2, height - 100, 140, 50);
        continueButton24.shapeColor = color('#341539');
        continueButton24.text = "Continue";
        continueButton24.textSize = 20;
        continueButton24.textColor = "white";
    }

    if (continueButton24 && continueButton24.mouse.presses()) {
        continueButton24.remove();
        continueButton24 = null;
        screen = 26;
    }
}

function getGemWord(gemImage) {
  if (gemImage === gem1) return "D";
  if (gemImage === gem2) return "Y";
  if (gemImage === gem3) return "E";
  if (gemImage === gem4) return "I";
  if (gemImage === gem5) return "S";
  return "";
}

const GEM_PER_ROW =3;
const GEM_START_Y=100;
const GEM_ROW_SPACING=90;

function drawWordSlots(){
    const slotSize=36;
    const gap =8;
    const totalWidth=SECRET_WORD.length * slotSize +(SECRET_WORD.length-1)*gap;
    const startX= width/2 - totalWidth/2;
    const numRows=Math.max(1, Math.ceil(collectedGems.length/GEM_PER_ROW));
    const y= GEM_START_Y + numRows * GEM_ROW_SPACING +20;

    for(let i =0; i<SECRET_WORD.length; i++){
        const x= startX + i *(slotSize +gap);
        fill(255);
        textAlign(CENTER,CENTER);
        textSize(22);
        text("_", x + slotSize / 2, y + slotSize / 2 + 2);
    }

}
function canvasToPageRect(x,y,w,h){
    const rect=canvas.elt.getBoundingClientRect();
    const scaleX=rect.width/width;
    const scaleY= rect.height/height;
    return{
        x: rect.left + x * scaleX,
        y: rect.top+ y * scaleY,
        w: w * scaleX,
        h: h * scaleY
    };
}




function hiddenmessage(){
    image(ch6,0,0,width,height)
    fill(255);
    textAlign(CENTER,TOP);
    textSize(20);
    textFont("Arial");
    text("Guess the hidden word with the hits provide.\n"+
        "Hint: It is a 7-letters word",width/2,40);
    
    displayGemsWithWords();
    drawWordSlots();

    if (!inputBox) {
        inputBox = createInput();
        inputBox.attribute("placeholder", "Enter the hidden word here..."); 
  }
    if (!submitButton) {
    submitButton = createButton('Submit');
    submitButton.mousePressed(checkHiddenMessage);
  }
  const inputRect = canvasToPageRect(width / 2 - 150, height / 2 + 50, 300, 30);
  inputBox.position(inputRect.x, inputRect.y);
  inputBox.size(inputRect.w, inputRect.h);
 
  const buttonRect = canvasToPageRect(width / 2 - 50, height / 2 + 90, 100, 30);
  submitButton.position(buttonRect.x, buttonRect.y);
  submitButton.size(buttonRect.w, buttonRect.h);
}

function checkHiddenMessage() {
    const rawValue=inputBox.value();
    const guess = inputBox.value().trim().toUpperCase();
    console.log("Raw input:", JSON.stringify(rawValue), "| Normalized guess:", JSON.stringify(guess), "| Expected:", JSON.stringify(SECRET_WORD), "| Match:", guess === SECRET_WORD);
    inputBox.remove();  
    submitButton.remove();
    inputBox=null;
    submitButton=null;
    wrongGuessMessage="";
    if(guess===SECRET_WORD){
        screen=27
    }else{
        screen=28
    }
}

function displayGemsWithWords() {
  fill(255);
  textAlign(LEFT,TOP);
  textSize(14);
  text("Your Collected Gems & Words:", 20, 80);

  const perRow=3;
  const colSpacing=110;
  const rowSpacing=90;
  const startX=20;
  const startY=100;

  for (let i = 0; i < collectedGems.length; i++) {
    const col = i % perRow;
    const row = Math.floor(i/perRow);
    const x = startX + col* colSpacing;
    const y = startY + row * rowSpacing;

    // Display gem
    image(collectedGems[i], x, y, 50, 50);
    
    // Display corresponding word below gem
    let word = getGemWord(collectedGems[i]);
    if (word) {
      fill(255); 
      textAlign(CENTER,TOP);
      textSize(12);
      text(`"${word}"`, x+25,y+70);
    }
  }
}

function goodending(){
    image(ch6, 0,0,width,height)//
    fill(255);
    textAlign(LEFT,TOP);
    textSize(17);
    textFont("Arial");
    text("The gems merge into the Star of Dentiny, restroing the darkness fading star."+
        "Once more and the darkness sees memories of the people whose lives were change by hope.",
        30,140,width-60);   
    if (!continueButton25) {
        continueButton25 = new Sprite(width / 2, height - 100, 140, 50);
        continueButton25.shapeColor = color('#341539');
        continueButton25.text = "Continue";
        continueButton25.textSize = 20;
        continueButton25.textColor = "white";
    }

    if (continueButton25 && continueButton25.mouse.presses()) {
        continueButton25.remove();
        continueButton25 = null;
        screen = 29;
    }     
}

function badending(){
    image(ch6_1, 0,0,width,height)//
    fill(255);
    textAlign(LEFT,TOP);
    textSize(17);
    textFont("Arial");
    text("Darkness spreads across the world, extinguishing every remaining star.\n"+
        "People lose the will to help one another, and the world falls into endless night.\n"+
        "When hope is abandoned, darkness needs no battle to win.",
        30,140,width-60);    
    if (!continueButton26) {
        continueButton26 = new Sprite(width / 2, height - 100, 140, 50);
        continueButton26.shapeColor = color('#341539');
        continueButton26.text = "Continue";
        continueButton26.textSize = 20;
        continueButton26.textColor = "white";
    }

    if (continueButton26 && continueButton26.mouse.presses()) {
        continueButton26.remove();
        continueButton26 = null;
        screen = 29;
    }          
}
