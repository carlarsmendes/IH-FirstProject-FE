let game1 = new Game(5,5,2,2);



window.addEventListener("keydown", function onEvent(event) {
    if (event.key === "ArrowLeft") {
      turnLeft(rover);
    }else if(event.key === "ArrowRight"){
      turnRight(rover);
    }else if(event.key === "ArrowUp"){
      moveForward(rover);
    }else if(event.key === "ArrowDown"){
      moveBackwards(rover);
    }
  });

