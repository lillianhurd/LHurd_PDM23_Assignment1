function setup(){
    createCanvas(300,300);
    colorMode(HSB);
}
function draw(){
    background(240,80,55);
    
    stroke(100);
    strokeWeight(4);

    fill(120,80,50);
    circle(150,150,150);
    
    //creates the star
    fill(0,100,95);
    beginShape();
    vertex(150,75);
    vertex(168,125);
    vertex(220,125);
    vertex(180,155);
    vertex(195,210);
    vertex(150,178);
    vertex(105,210);
    vertex(120,155);
    vertex(80,125);
    vertex(132,125);
    endShape(CLOSE);
    
}