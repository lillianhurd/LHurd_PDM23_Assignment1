function setup(){
    createCanvas(300,300);
}
function draw(){
    background(360);
    noStroke();

    //creates top circle (red)
    fill(360,0,0,100);
    circle(150,110,150);

    //creates left circle (purple)
    fill(50,10,350,100);
    circle(100,190,150);

    //creates right circle (green)
    fill(0,290,30,100);
    circle(200,190,150);

}