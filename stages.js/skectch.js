var Tim,tom,TimImg,TomImg;
var TomWalkr,TimWalkr,TomWalkl,TimWalkl;
var jump;
var ground,groundImg;
var block,blockImg;
var background1,background2,background3;
var gameStates;
var Start = 0;
var play1 = 1;
var play2 = 2;
var power = 3
var play3 = 4;
var Won = 5;
var bulletsGroup;
var Bullets;
var Timer = 0;
var p1heart1;
var p1heart2;
var p1heart3;
var p2heart1;
var p2heart2;
var p2heart3;
var End = 6;
var instruction = 7;
var instruction2 = 9
var story = 8;
var gameOver;
var backgroundSong;
var bossSongSound;
var gameOverSound;
var bossAttackSound;
var stageSound;
var powerUpSound;
var worldSound
var bossOutSound;
var redHeart;
var heartless;
var p1lifes = 3;
var p2lifes = 3;
var bossImg;
var SnakeImg;
var firePower,icePower;
var timer2 = 400;
var timer3 = 1200;
var fire,ice;
var bossLifes = 3;
var bossLife1,bossLife2,bossLife3;
var powerUpImg;
var Power1,Power2;
var iceBall;
var text1 = 0;
var text2 = 0;
var text3 = 0;

function preload(){
  TimImg = loadImage("Images/player1/stand.png");
  TomImg = loadImage("Images/player2/stand 2.png");

  background1 = loadImage("Images/backgrounds/Stage 1 backround.png");
  background2 = loadImage("Images/backgrounds/stage 2 backround.png");
  background3 = loadImage("Images/backgrounds/stage 3 backround.png");

  Bullets = loadImage("Images/enemy/bullet.png");
  bossImg = loadImage("Images/enemy/enemy boss.png");
  SnakeImg = loadImage("Images/enemy/pirana snake.png");

  redHeart = loadImage("Images/top bar/heart red.png");
  firePower = loadImage("Images/top bar/fire power.png");
  icePower = loadImage("Images/top bar/ice power.png");
  powerUpImg = loadImage("Images/top bar/power up.png");

  jump = loadSound("Audio/smb_jump-small.wav");
  bossSongSound = loadSound("Audio/music boss.mp3")
  gameOverSound = loadSound("Audio/smb_gameover.wav");
  bossAttackSound = loadSound("Audio/smb_bowserfire.wav");
  stageSound = loadSound("Audio/smb_stage_clear.wav");
  powerUpSound = loadSound("Audio/smb_powerup.wav");
  worldSound = loadSound("Audio/smb_world_clear.wav");
  bossOutSound = loadSound("Audio/smb_bowserfalls.wav");
}

function setup() {
  createCanvas(1000, 600);

  gameStates = Start;

  bossSongSound.loop();

  bulletsGroup = new Group();

  Tim = createSprite(30,360,50,50);
  Tim.addImage("Tim",TimImg);

  Tom = createSprite(90,260,50,50);
  Tom.addImage("Tom",TomImg);

  ground = createSprite(500,580,2209,50);
  ground.visible = false;

  edge = createSprite(500,-10,1000,20);
  edge2 = createSprite(1020,300,20,600);
  edge3 = createSprite(-10,300,20,600);

  fire = createSprite(910,510);
  fire.addImage("fire",firePower);
  fire.scale = 0.1;
  fire.visible = false;

  ice = createSprite(90,510);
  ice.addImage("ice",icePower);
  ice.scale = 0.06;
  ice.visible = false;

  p1heart1 = createSprite(35,40,10,10);
  p1heart2 = createSprite(80,40,10,10);
  p1heart3 = createSprite(125,40,10,10);

  p1heart1.addImage("p1heart1",redHeart);
  p1heart2.addImage("p1heart2",redHeart);
  p1heart3.addImage("p1heart3",redHeart);

  Power = createSprite(85,80);
  Power.addImage("Power",powerUpImg);
  Power.scale = 0.8;
  Power.visible = false;

  Power2 = createSprite(915,80);
  Power2.addImage("Power",powerUpImg);
  Power2.scale = 0.8;
  Power2.visible = false;

  p2heart1 = createSprite(865,40,10,10);
  p2heart2 = createSprite(910,40,10,10);
  p2heart3 = createSprite(955,40,10,10);

  p2heart1.addImage("p1heart1",redHeart);
  p2heart2.addImage("p2heart2",redHeart);
  p2heart3.addImage("p3heart3",redHeart);
}

function draw() {
  push();
  Tim.y = Tim.y + 10;
  Tom.y = Tom.y + 10;
  pop();

  if(gameStates === Start){
    background(background1);
    fill("#ff0000");
    textSize(90);
    text("Press space to Start",100,200);
    textSize(50)
    text("Press I for instructions",250,300);

    if(keyDown("SPACE")){
      gameStates = play1;
    } 

    if(keyDown("I")){
      gameStates = instruction;
    }
}

if(gameStates === instruction){
  background(background1);

  //text
  fill(text1);
  textSize(50);
  text("P1 INSTRUCTIONS",300,50);
  textSize(30);
  text("P1 controls",100,200);
  text("Press Up Arrow to jump.Press Right Arrow to ",370,200);
  text("go right. Press left Arrow to go left.",20,260)
  text("",20,312);
  text("P2 controls",100,372);
  text("Press W to jump.stage. Press D to go right ",370,372);
  text("Press A to go left.",20,432);

  text("Don't push the bullets. you lose all of your lifes",150,492)

  //lines
  strokeWeight(5);
  line(680,60,350,60);
  line(650,70,370,70);
  line(280,210,80,210);
  line(250,220,110,220);
  line(350,190,320,190);
  line(280,380,80,380);
  line(250,390,110,390);
  line(350,360,320,360);

  if(keyDown("space")){
    gameStates = play1
  }
}

//stage 1
  if(gameStates === play1){

    background(background1); 

    timer = Timer++;
    setInterval(timer,1000);
    
      controls2();

      lifes();

      if(Timer === 400){
        gameStates = play2;
      }
      bullets();
  }

  //stage 2
  if(gameStates === play2){
    background(background2);
    //snake1();

    timer2 = Timer++;
    setInterval(timer2,1000);

    controls();

    lifes();

    if(Timer === 1200){
      gameStates = power;
    }
    bullets2();
  }

  //power stage
  if(gameStates === power){
    background(background2);
    
    fire.visible = true;
    ice.visible = true;

    controls();


    if(Tim.isTouching(fire)){
      fire.visible = false;
      //Power1.visible = true;
    }

    if(Tom.isTouching(ice)){
      ice.visible = false;
      //Power2.visible = true;
    }

    if(Tim.isTouching(fire) && Tom.collide(ice)){
      gameStates = play3;
    }
  }

  //stage three
  if(gameStates === play3){

    background(background3);

    timer3 = Timer++;
    setInterval(timer3,1000);
    controls();

    lifes();

    bullets3();

    if(Timer === 2200){
      gameStates = Won;
    }

  }

  if(gameStates === Won){
    background(0);
    fill(0,0,255);
    textSize(90);
    text("You Won in part-1",150,300);
    textSize(50)
    text("You can easily lose every single try in next ",10,400);
    text("part. So stay tuned.",350,450);
    textSize(40);
    text("Press R to restart the game",350,550);
    bulletsGroup.destroyEach();

    if(keyDown("R")){
      gameStates = Start;
      Timer = 0;
      p1lifes = 3;
      p2lifes = 3;
      p1heart1.visible = true;
      p1heart2.visible = true;
      p1heart3.visible = true;
      p2heart1.visible = true;
      p2heart2.visible = true;
      p2heart3.visible = true;
    }
  }

  if(gameStates === End){
    background(0);
    fill(255,0,0);
    textSize(90);
    text("Game Over",300,300);
    textSize(40);
    text("Press R to restart the game",350,400);
    bulletsGroup.destroyEach(); 
    //Power1.visible = false;
    //Power2.visible = false;

    if(keyDown("R")){
      gameStates = Start;
      Timer = 0;
      p1lifes = 3;
      p2lifes = 3;
      p1heart1.visible = true;
      p1heart2.visible = true;
      p1heart3.visible = true;
      p2heart1.visible = true;
      p2heart2.visible = true;
      p2heart3.visible = true;
    }
  }
 
  Tim.collide(ground);
  Tom.collide(ground);
  Tom.collide(edge);
  Tim.collide(edge);
  Tom.collide(edge2);
  Tim.collide(edge2);
  Tom.collide(edge3);
  Tim.collide(edge3);

  drawSprites();
}

function snake1(){
  if(frameCount % 60){
    var snake = createSprite(1000,520);
    snake.velocityX = -3;
    snake.addImage("snake",SnakeImg);
    snake.scale = 0.1;
    snake.lifetime = 160;
    snake.debug = true;
    }
}

function bullets(){
  if(frameCount % 50 === 0){
    var bullet = createSprite(Math.round(random(50,950)),0,20,20);
    bullet.velocityY = 5;
    bullet.addImage("bullet",Bullets);
    bullet.scale = 0.2;
    bullet.lifetime = 128;
    bullet.setCollider("rectangle",0,0,100,500);
    bulletsGroup.add(bullet);
  }
}

function bullets2(){
  if(frameCount % 50 === 0){
    var bullet = createSprite(Math.round(random(50,950)),0,20,20);
    bullet.velocityY = 5;
    bullet.addImage("bullet",Bullets);
    bullet.scale = 0.2;
    bullet.lifetime = 128;
    bullet.setCollider("rectangle",0,0,100,500);
    bulletsGroup.add(bullet);
  }
}

function bullets3(){
  if(frameCount % 10 === 0){
    var bullet = createSprite(Math.round(random(50,950)),0,20,20);
    bullet.velocityY = 5;
    bullet.addImage("bullet",Bullets);
    bullet.scale = 0.2;
    bullet.lifetime = 128;
    bullet.setCollider("rectangle",0,0,100,500);
    bulletsGroup.add(bullet);
  }
}

function controls(){
  if(keyDown(UP_ARROW)){
    Tim.y = Tim.y - 10;
    if(Tim.y = Tim.y - 10){
      jump.play();
    }
  }

  if(keyDown(RIGHT_ARROW)){
    Tim.x = Tim.x + 10;
  }

if(keyDown(LEFT_ARROW)){
    Tim.x = Tim.x - 10;
  }

  //Tom controls
  if(keyDown("W")){
    Tom.y = Tom.y - 20;
    if(Tom.y = Tom.y - 20){
      jump.play();
    }
  }

  if(keyDown("D")){
    Tom.x = Tom.x + 10;
  }

if(keyDown("A")){
    Tom.x = Tom.x - 10;
  }
}

function controls2(){
  if(keyDown(RIGHT_ARROW)){
    Tim.x = Tim.x + 10;
  }

if(keyDown(LEFT_ARROW)){
    Tim.x = Tim.x - 10;
  }

  if(keyDown("D")){
    Tom.x = Tom.x + 10;
  }

if(keyDown("A")){
    Tom.x = Tom.x - 10;
  }
}

function lifes(){
  if(bulletsGroup.collide(Tim)){
    p1lifes = p1lifes - 1;
  }

  if(bulletsGroup.collide(Tom)){
    p2lifes = p2lifes - 1;
  }

  if(p1lifes === 2){
    p1heart3.visible = false;
  }

  if(p1lifes === 1){
    p1heart2.visible = false;
  }

  if(p1lifes === 0){
    p1heart1.visible = false;
  }

  if(p2lifes === 2){
    p2heart3.visible = false;
  }

  if(p2lifes === 1){
    p2heart2.visible = false;
  }

  if(p2lifes === 0){
    p2heart1.visible = false;
  }

  if(p1lifes === 0 || p2lifes === 0){
    gameStates = End;
  }
}