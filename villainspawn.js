function spawnVillain1() {

    //write code here to spawn the villain
    if (frameCount % 220 === 0) {
      var villain1 = createSprite(windowWidth,windowHeight-40,50,50);
      villain1.y = Math.round(random(windowHeight-70,windowHeight-50));
      switch(Level){
        case 1:
          villain1.addAnimation("villainrunning", villainrunning);
          break;
          case 2:
            villain1.addAnimation("villainrunning", villainrunning);
            break;
            case 3:
          villain1.addAnimation("villainrunning", villainrunning);
          break;  
      }
      
      villain1.scale = 0.5;
      villain1.velocityX = -2;
      
       //assign lifetime to the variable
      villain1.lifetime = windowWidth/2;
      
       
      //add each cloud to the group
      Villain1Group.add(villain1);
    }
  }
  