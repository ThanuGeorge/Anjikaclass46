function spawnObject() {
    //write code here to spawn the object
    if (frameCount % 220 === 0) {
      var object = createSprite(windowWidth,windowHeight-100,40,10);
      object.y = Math.round(random(windowHeight-80,windowHeight-100));
      object.addImage("fireball", fireball);
      //villain1.scale = 0.5;
      object.velocityX = -3;
      
       //assign lifetime to the variable
       object.lifetime = windowWidth/3;
      
       
      //add each cloud to the group
      ObjectGroup.add(object);
    }
  }