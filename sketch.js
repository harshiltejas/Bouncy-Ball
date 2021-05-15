var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(800,800);

    block1 = createSprite(50,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(280,580,200,30);
    block2.shapeColor = "red";

    //create two more blocks i.e. block3 and block4 here

    block3 = createSprite(520,580,200,30);
    block3.shapeColor = "green";

    block4 = createSprite(750,580,200,30);
    block4.shapeColor = "yellow";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX = (random(-2,4));
    ball.velocityY = (random(-3,5));

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball)){
        ball.bounceOff(block1)
        ball.shapeColor = "blue";
    }
    if(block3.isTouching(ball)){
        ball.bounceOff(block3)
        ball.shapeColor = "green";
    }
    if(block4.isTouching(ball) ){
        ball.bounceOff(block4)
        ball.shapeColor = "yellow";
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "red";
        //write code to set velocityX and velocityY of ball as 0
          ball.velocityX = 0;
          ball.velocityY = 0
        //write code to stop music
    }

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}
