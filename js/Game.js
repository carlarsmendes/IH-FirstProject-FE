// The constructor is the method triggered with the `new` keyword 
class Game {

constructor(TOTAL_WIDTH,TOTAL_HEIGHT,playerStartPositionX,playerStartPositionY) 
{
    this.TOTAL_WIDTH = TOTAL_WIDTH
    this.TOTAL_HEIGHT = TOTAL_HEIGHT
    // this.NR_OF_TILES = TOTAL_HEIGHT*TOTAL_WIDTH
    // this.measureY = this.TOTAL_HEIGHT/this.NR_OF_TILES//not correct
//this creates a matrix with width/height to define for each level.
//
    // this.board = function generateMatrix(){
    //     let arr = []
    //     for(let i = 0 ; i< this.TOTAL_HEIGHT ; i++){
    //       arr[i] = [''];
    //       for(let j=0 ; j < this.TOTAL_WIDTH; j++){
    //         arr[i][j]= '';
    //       }
    //     }
    //     return arr
    //     },

    // This would represent the whole Board:
    // T = Tile
    // P = Player
    // B = Beer
    // K = Keg
    // E = Empty

    this.board = [
        ["E", "E", "T", "T", "T", "T", "E", "E", "E"],
        ["T", "T", "T", "E", "E", "T", "T", "T", "T"],
        ["T", "E", "E", "E", "E", "E", "K", "E", "T"],
        ["T", "E", "T", "E", "E", "T", "K", "E", "T"],
        ["T", "E", "B", "E", "B", "T", "E", "P", "T"],     
        ["T", "T", "T", "T", "T", "T", "T", "T", "T"]
        ];

    this.player = { //this defines the player and its initial position. should be diferent for each level, so should 
        x: playerStartPositionX,  //level 1 -> 7
        y: playerStartPositionY,  //level 1 -> 4
        direction: "down",
        // img: src='../img/Beer_Full.svg'//how to look for the image?
    }
    this.keg = { //this defines the beers and their initial positions. should be diferent for each level, so should be variables. should be plent so they should be arrays
        x: 3, //3 for testing //let keg1 = [6,2],[6,3] 
        y: 3, //3 for testing// let tiles1 = []
    }
}
    
    movePlayerLeft(){
        let boardMinX = 0
        this.player.x = Math.max(this.player.x-1,boardMinX);
        this.player.direction = 'left'
            if (this.player.y === this.keg.y && this.keg.x === this.player.x+1){
            moveKegLeft()}   
    }

    movePlayerRight(){
        let boardMaxX = this.TOTAL_WIDTH;
        this.player.x = Math.min(this.player.x+1,boardMaxX);
        this.player.direction = 'right';
        if (this.player.y === this.keg.y && this.keg.x === this.player.x-1){
            moveKegRight()}
    }

    movePlayerUp(){
        let boardMinY = 0;
        this.player.y = Math.max(this.player.y-1,boardMinY);
        this.player.direction = 'up';
        // $player.style.top = moveY();//DOM Manipulation
        if (this.player.x === this.keg.x && this.keg.y === this.player.y+1){
            moveKegUp()}
    }

    movePlayerDown(){
        let boardMaxY = this.TOTAL_HEIGHT
        this.player.y = Math.min(this.player.y+1,boardMaxY);
        this.player.direction = 'down'
        if (this.player.x === this.keg.x && this.keg.y === this.player.y-1){
            moveKegDown()}
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

    moveY (){
        let measureY = 4*board.y ;
        return `${measureY}vw`
    }

    moveX (){
        let measureX = 4*board.x ;
        return `${measureX}vw`
    }

}

    


  