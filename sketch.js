var James, James_Stand1, James_Running1, James_Running2, James_Running3, James_Running4;
var James_Running5, James_Running6, James_Punch1, James_Punch2, James_Punch3, James_Punch4;
var James_Punch5, SideCharacter1, SideCharacter2;

var Gamestate = "start";
var score = 0;
var villainrunning, fireball;
var Level;
var answercheck = "  ";
var QuestionBank,Answer1,Answer2,Answer3;

//load sounds and images
function preload(){
  City = loadImage("MC Images/City.jpg");
  James_Stand1 = loadImage("MC Images/CharacterStand1.png");

  
  //loadImage("MC Images/SideCharacter.png", "MC Images/SideCharacter2.png");

  James_running = loadAnimation("MC Images/CharacterRun1.png", "MC Images/CharacterRun2.png", "MC Images/CharacterRun3.png","MC Images/CharacterRun4.png", 
  "MC Images/CharacterRun5.png", "MC Images/CharacterRun6.png");
  
  James_punching = loadAnimation("MC Images/CharacterPunch1.png", "MC Images/CharacterPunch2.png", "MC Images/CharacterPunch3.png", 
  "MC Images/CharacterPunch4.png","MC Images/CharacterPunch5.png");

  villainrunning = loadAnimation("Enemy Images/Enemy1Walk1 copy 2.png", "Enemy Images/Enemy1Walk2.png")
  fireball = loadImage("Enemy Images/Fireball.png");
  gameoverImg = loadImage("gameover.png");
 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  Level = 1;

  //background sprite
  Background = createSprite(windowWidth/2, windowHeight/2);
  Background.addImage("City",City);
  Background.scale = 1.35;

  //invisible ground
  Ground = createSprite(windowWidth/2, windowHeight-35, windowWidth,10);
  Ground.visible = false;
// Main character
  James = createSprite(295,windowHeight-300,10,40);
  James.addImage("James_Stand1", James_Stand1);
  James.addAnimation("James_running",James_running);
  James.addAnimation("James_punching",James_punching);



  ObjectGroup = new Group();
  Villain1Group = new Group();
}

function draw() {
  background(255,255,255);  
  //game start
  if(Gamestate === "start" && keyDown("P")){
    Gamestate = "Play";
  
  }
  // game has 3 levels; when level become more then make it gameover
  if (Level > 3 ){
    Gamestate = "Gameover";
  }

  //End of game
  if(Gamestate === "Gameover"){
    imageMode(CENTER)
    image(gameoverImg,windowWidth/2,windowHeight/2,windowWidth-300,windowHeight-100);
    fill("white");
    textSize(30);
    textFont("Georgia")
   // playSpeech("Congratulations! You won the game.", "female", "English");
   text("Congratulations! You won the game", windowWidth/2-200,windowHeight/2);
   text("Final Score: "+ score, windowWidth/2-150,windowHeight/2+150);
  }
  if(frameCount % 1200 === 0 && Gamestate === "Play"){
    Gamestate = "Quiz";
    Background.visible = false;
    James.visible = false;
    ObjectGroup.destroyEach();
    Villain1Group.destroyEach();
    Quiz();
    //score move to next level
    
  } 
  if(answercheck === "correct"){
    fill("blue");
    textSize(25)
    text("That's correct!", 100, windowHeight/2);
    fill("purple");
    text("Please press 'C' to continue to next level", 100, windowHeight/2 +100 )
  }
   else if(answercheck === "wrong"){
    fill("red");
    textSize(25)
    text("That's wrong!", 100, windowHeight/2);
  }
  if(Gamestate === "Quiz" && keyDown("C")){
    Gamestate = "Play";
    Level++;
    QuestionBank.remove();
    Answer1.remove();
    Answer2.remove();
    Answer3.remove();
    quizbg.remove();
    answercheck = " ";
    Background.visible = true;
    James.visible = true;
    
  }
if(Level <= 3){
  Levelup();
}
if(Gamestate === "start"){
  textSize(30);
textFont("Comic Sans")
fill("black")
  text("Press 'P' to begin the game!", windowWidth/2-50, windowHeight/2);
}  
}






