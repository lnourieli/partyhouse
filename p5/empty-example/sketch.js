let r=0;
let g=0;
let b=0;
let lightSwitch = false;

function setup() {
  // put setup code here
    createCanvas(500,500);
}

function draw() {
  // put drawing code here
    background("#205533");//green
    fill("#e75480");//hot pink
    stroke("#2e1047");//dark purple
    strokeWeight(3);
    rect(165,250,170,250);//house frame
    fill("#fae");//light pink
    triangle(165,250,250,100,335,250);//roof
    fill("#fae");
    stroke("#2e1047");
    ellipse(random(248,252),random(98,102),20,20);//pink ball
    fill(r,g,b);
    strokeWeight(2);
    rect(190,275,40,70);//window
    fill(r,g,b);
    rect(270,275,40,70);
    fill("purple")
    rect(210,400,80,100);//door
    fill("yellow");
    stroke("yellow");
    strokeWeight(4);
    point(280,450);//doorknob
    fill("#978EFF")
    noStroke();
    rect(10,475,10,25);//fence
    rect(30,475,10,25);
    rect(50,475,10,25);
    rect(70,475,10,25);
    rect(90,475,10,25);
    rect(110,475,10,25);
    rect(130,475,10,25);
    rect(150,475,10,25);
    rect(170,475,10,25);
    rect(190,475,10,25);
    rect(210,475,10,25);
    rect(230,475,10,25);
    rect(250,475,10,25);
    rect(270,475,10,25);
    rect(290,475,10,25);
    rect(310,475,10,25);
    rect(330,475,10,25);
    rect(350,475,10,25);
    rect(370,475,10,25);
    rect(390,475,10,25);
    rect(410,475,10,25);
    rect(430,475,10,25);
    rect(450,475,10,25);
    rect(470,475,10,25);
    rect(490,475,10,25);
    rect(490,475,10,25);
    fill("#978EFF");
    stroke("#978EFF");
    strokeWeight(2);
    line(0,480,500,480);
    fill("#FF7F50");
    stroke("#FF7F50");
    strokeWeight(2);
    ellipse(mouseX,mouseY,25,1);//bird
    fill("yellow");
    noStroke();
    ellipse(mouseX,mouseY,10,15)//wings
    console.log(lightSwitch);
}

function mousePressed(){
    if(lightSwitch===false){
        //lights off
    r = random(0,255);
    b = random(0,255);
    g = random(0,255);
    lightSwitch = true;
}else{
    r=0;
    g=0;
    b=0;
    lightSwitch = false; 
    }
}
