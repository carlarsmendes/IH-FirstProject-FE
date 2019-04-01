// The constructor is the method triggered with the `new` keyword 

class Game {

constructor(TOTAL_WIDTH,TOTAL_HEIGHT,playerStartPositionX,playerStartPositionY) 
{
    this.TOTAL_WIDTH = TOTAL_WIDTH
    this.TOTAL_HEIGHT = TOTAL_HEIGHT
//this creates a matrix with width/height to define for each level.
//
    this.board = function generateMatrix(){
        let arr = []
        for(let i = 0 ; i< this.TOTAL_HEIGHT ; i++){
          arr[i] = [''];
          for(let j=0 ; j < this.TOTAL_WIDTH; j++){
            arr[i][j]= '';
          }
        }
        return arr
        },
        // Taken from Lucas' dwarf for analysis
    // this.board = [
    //     ["U", "R", "U", "U", "U", "R", "U", "R", "U", "U", "U", "U", "R", "U", "U", "U", "U", "U", "R"],
    //     ["U", "R", "U", "U", "U", "U", "U", "R", "U", "R", "U", "U", "R", "U", "U", "R", "U", "U", "R"],
    //     ["U", "U", "U", "R", "U", "R", "U", "R", "U", "R", "R", "U", "R", "U", "R", "U", "R", "U", "R"],
    //     ["U", "U", "R", "U", "U", "R", "U", "U", "U", "R", "R", "U", "R", "T", "R", "U", "R", "U", "U"],
    //     ["U", "U", "R", "U", "U", "R", "U", "U", "R", "U", "U", "U", "R", "R", "R", "U", "R", "R", "U"],
    //     ["U", "R", "R", "U", "U", "R", "U", "R", "U", "U", "R", "U", "U", "U", "R", "U", "U", "U", "U"],
    //     ["U", "R", "R", "R", "U", "R", "U", "U", "U", "U", "U", "R", "R", "U", "U", "U", "R", "R", "R"],
    //     ["U", "R", "U", "U", "U", "R", "U", "U", "R", "R", "U", "U", "R", "U", "U", "R", "U", "U", "U"],
    //     ["U", "U", "U", "U", "U", "R", "U", "R", "U", "U", "U", "U", "U", "R", "U", "U", "U", "R", "U"],
    //     ["U", "U", "R", "R", "R", "R", "U", "R", "U", "P", "U", "R", "U", "R", "U", "R", "R", "R", "U"],
    //     ["U", "U", "U", "U", "U", "R", "U", "R", "U", "U", "U", "R", "U", "U", "U", "R", "R", "U", "U"],
    //     ["R", "R", "R", "R", "U", "R", "U", "U", "U", "U", "R", "R", "R", "R", "R", "U", "U", "U", "R"],
    //     ["U", "U", "U", "U", "U", "U", "R", "R", "U", "U", "U", "R", "R", "U", "U", "U", "U", "R", "U"],
    //     ["U", "R", "R", "R", "R", "U", "U", "R", "R", "U", "U", "U", "U", "U", "U", "R", "U", "U", "R"],
    //     ["U", "U", "R", "R", "R", "U", "U", "R", "U", "U", "R", "R", "R", "R", "U", "R", "U", "U", "R"],
    //     ["U", "U", "U", "R", "R", "U", "U", "R", "U", "R", "R", "U", "U", "U", "U", "R", "U", "R", "U"],
    //     ["R", "U", "U", "U", "U", "U", "U", "U", "U", "R", "R", "U", "R", "U", "U", "R", "U", "R", "U"],
    //     ["R", "R", "U", "R", "R", "U", "R", "R", "U", "U", "U", "U", "U", "R", "U", "R", "U", "U", "U"],
    //     ["R", "R", "U", "U", "U", "R", "U", "U", "U", "U", "R", "R", "U", "U", "R", "R", "U", "R", "U"]
    //     ];
    this.player = { //this defines the player and its initial position. should be diferent for each level, so should 
        x: playerStartPositionX,
        y: playerStartPositionY,
        direction: "down",
        img: src='../img/Beer_Full.svg'
    }
    this.keg = { //this defines the beers and their initial positions. should be diferent for each level, so should be variables
        x: 3, //3 for testing
        y: 3, //3 for testing
    }
}
    
    movePlayerLeft(){
        let boardMinX = 0
        this.player.x = Math.max(this.player.x-1,boardMinX);
        this.player.direction = 'left'
            if (this.player.y === this.keg.y && this.keg.x === this.player.x+1){
            moveKegLeft()
        }
    }

    movePlayerRight(){
        let boardMaxX = this.TOTAL_WIDTH
        this.player.x = Math.min(this.player.x+1,boardMaxX);
        this.player.direction = 'right'
        if (this.player.y === this.keg.y && this.keg.x === this.player.x-1){
            moveKegRight()}
    }

    movePlayerUp(){
        let boardMinY = 0
        this.player.y = Math.max(this.player.y-1,boardMinY);
        this.player.direction = 'up'
    }

    movePlayerDown(){
        let boardMaxY = this.TOTAL_HEIGHT
        this.player.y = Math.min(this.player.y+1,boardMaxY);
        this.player.direction = 'down'
    }

    moveKegLeft(){
        let boardMinX = 0
        this.keg.x = Math.max(this.keg.x-1,boardMinX);    
     }

    moveKegRight(){
        let boardMaxX = this.TOTAL_WIDTH
        this.keg.x = Math.min(this.keg.x+1,boardMaxX);
    }

    moveKegUp(){
        let boardMinY = 0
        this.keg.y = Math.max(this.keg.y-1,boardMinY);
    }

    moveKegDown(){
        let boardMaxY = this.TOTAL_HEIGHT
        this.keg.y = Math.min(this.keg.y+1,boardMaxY);
    }
    
};
