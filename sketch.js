function setup () {
  createCanvas(400,400);
}
 

 function draw (){
   background(220);

if (keyIsDown(DOWN_ARROW)){

background('red');

}

if (keyIsDown(UP_ARROW)){

background('blue');

}

if (keyIsDown(RIGHT_ARROW)){

background('yellow');

}

if (keyIsDown(LEFT_ARROW)){

background('green');

}
drawSprites();

 }

 

