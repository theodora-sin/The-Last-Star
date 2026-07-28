function endingscreen(){
    image(end,0,0,width,height);
    fill(255);
    textAlign(LEFT);
    textSize(17);
    textFont("Arial");
    text("Each person has it own beginning and ending, no one knows when their final moment will come.\n"+
        "Each step, each decision shapes your future.\n"+
        "Inside every person, there is a shiny star shine through your life.\n "+
        "As long as hope remain, the star burns brightly.\n"+
        "When hope is lost, the star slowly fades into darkness, turning positive energy into dark energy.\n"+
        "No matter how dim the star may become, it can always shine again if hope is rekindled.",
    30,60,width-60)
    image(charImg1, 15, height-380,110,160);
    image(charImg2, 135, height-380,110,160);
    image(Darkness, 255, height-500,100,160);

    if (!continueButton27) {
        continueButton27 = new Sprite(width / 2, height - 100, 140, 50);
        continueButton27.shapeColor = color('#341539');
        continueButton27.text = "Return Home";
        continueButton27.textSize = 20;
        continueButton27.textColor = "white";
    }

    if (continueButton27 && continueButton27.mouse.presses()) {
        continueButton27.remove();
        continueButton27 = null;
        screen = 0;
    }
    
}
