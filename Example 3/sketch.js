function setup(){
    createCanvas(600,300);
    colorMode(HSB);
}
function draw(){
    background(0);
    noStroke();

    //makes yellow shape
    fill(55,75,100);
    arc(150,150,225,225,radians(225),radians(135));

    //makes red shape
    fill(5,80,95);
    arc(440,150,226,225,radians(180),radians(0));
    rect(327,150,226,112);

    //makes the eyes
    fill(100);
    circle(385,150,70);
    circle(495,150,70);

    //makes the pupils
    fill(240,80,100);
    circle(385,150,45);
    circle(495,150,45);
}