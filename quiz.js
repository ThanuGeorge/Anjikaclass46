function Quiz(){
   
    if(Gamestate === "Quiz"){
      
    quizbg = createImg('Quizimage.png')
    quizbg.position(windowWidth/2-150, windowHeight/2-170);
  //  quizbg.size(windowWidth,windowHeight)
      
    question(Level);
    QuestionBank = createElement('h2');
    QuestionBank.html(Ask);
    QuestionBank.style('color','white');
    QuestionBank.position(windowWidth/2,windowHeight/2-100);
    
    Answer1 = createButton(Answer[0]);
    Answer1.position(windowWidth/2, windowHeight/2);
    Answer1.mousePressed(function(){
      //create a switch variable, populate it with correct and wrong
      if(Answer[0]=== CorrectAnswer){
        answercheck = "correct";
        score+= 80;
      }
      else{
        answercheck = "wrong" 
        score-=20;
      }
    })
    
    Answer2 = createButton(Answer[1]);
    Answer2.position(windowWidth/2+100, windowHeight/2);
    Answer2.mousePressed(function(){
      if(Answer[1]=== CorrectAnswer){
        answercheck = "correct";
        score+= 80;
      }
      else{
        answercheck = "wrong" 
        score-=20;
      }
    })
  
    Answer3 = createButton(Answer[2]);
    Answer3.position(windowWidth/2+200, windowHeight/2);
    Answer3.mousePressed(function(){
      if(Answer[2]=== CorrectAnswer){
        answercheck = "correct" 
        score+= 80;
      }
      else{
        answercheck = "wrong" 
        score-=20;
      }
    })
    
  }
  
  }
  
  function question(L){
    switch(L){
      case 1: 
      Ask = "What is your name?"
      Answer = ["A","Anjika","B"];
      CorrectAnswer = "Anjika";
      break;
      case 2:
      Ask = "What is your age?"
      Answer = ["10","15","13"];
      CorrectAnswer = "13";
      break;
      case 3:
      Ask = "How are you"
      Answer = ["Good","Bad","Ok"];
      CorrectAnswer = "Good";
      break;
    }
  }
  