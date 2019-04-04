// The constructor is the method triggered with the `new` keyword 

// const $player = document.querySelector(".player");
class Game {

    constructor(TOTAL_WIDTH, TOTAL_HEIGHT) {
        this.TOTAL_WIDTH = TOTAL_WIDTH
        this.TOTAL_HEIGHT = TOTAL_HEIGHT
        //     const NB_OF_TILES_WIDTH = board[0].length
        // const NB_OF_TILES_HEIGHT = board.length


        // This would represent the whole Board:
        // T = Tile
        // P = Player
        // B = Beer
        // K = Keg
        // E = Empty
        //SAVING LEVEL 1 FOR TESTING PURPOSES - UNCOMMENT AFTER BUGS FIXED-----
        this.board = [
            ["E", "E", "T", "T", "T", "T", "E", "E", "E"],
            ["T", "T", "T", "E", "E", "T", "T", "T", "T"],
            ["T", "E", "E", "E", "E", "E", "K", "E", "T"],
            ["T", "E", "T", "E", "E", "T", "K", "E", "T"],
            ["T", "E", "B", "E", "B", "T", "E", "P", "T"],
            ["T", "T", "T", "T", "T", "T", "T", "T", "T"]
        ];

        this.originalBoard = [...this.board];
        this.playerVariable;


        this.player = { //this defines the player and its initial position. should be diferent for each level, so should 
            direction: "down",
            // img: src='../img/Beer_Full.svg'//how to look for the image?
        }
        //     x: 6, //3 for testing //let keg1 = [6,2],[6,3] 
        //     y: 2, //3 for testing// let tiles1 = []
        // }
    }
    countKegs() {
        this.numberKegs = 0;
        for (let x = 0; x < this.board.length; x++) {
            for (let y = 0; y < this.board[x].length; y++) {
                if (this.board[x][y] === "K") {
                    this.numberKegs++;
                }
            }
        }
        return this.numberKegs
    }

    resetGame(){
        this.board = this.originalBoard;
        initialSetup();
    
        return this.board
    }


    getPlayerX() {
        for (let y = 0; y < this.board.length; y++) {
            for (let x = 0; x < this.board[y].length; x++) {
                if (this.board[y][x].includes("P")) {
                    return x
                }
            }
        }
        throw new Error("There is no Player")
    }
    getPlayerY() {
        for (let y = 0; y < this.board.length; y++) {
            for (let x = 0; x < this.board[y].length; x++) {
                if (this.board[y][x].includes("P")) {
                    return y
                }
            }
        }
        throw new Error("There is no Player")
    }
//CREATE NEW FUNCTION - CARLA
    // checkIfBeerOriginal(){

    // }

    //Player movements and also the interactions with the kegs
    movePlayerLeft() {
        this.player.direction = 'left'
        // $( ".player" ).css("left", this.getPlayerX()*5+"vw");
        // console.log("I'm activating the Player function");
        // console.log(this.board);

        switch (this.board[this.getPlayerY()][this.getPlayerX() - 1]) {
            case "T": //Not supposed to move the tile, or with the tile
                this.board[this.getPlayerY()][this.getPlayerX() - 1] = "T";
                // console.log("on my left there is a tile");
                initialSetup()
                break;
            case "B":
                this.playerVariable = [this.getPlayerY(), this.getPlayerX()];
                this.board[this.playerVariable[0]][(this.playerVariable[1] - 1)] = "PB";

                this.board[this.playerVariable[0]][(this.playerVariable[1])] =
                this.originalBoard[this.playerVariable[0]][(this.playerVariable[1])]

                initialSetup();
                break;
            case "K":
                if (this.board[this.getPlayerY()][this.getPlayerX() - 1] === "K" &&
                    this.board[this.getPlayerY()][this.getPlayerX() - 2] === "T") {
                    
                    this.board[this.getPlayerY()][this.getPlayerX() - 1] === "K"
                    this.board[this.getPlayerY()][this.getPlayerX()] === "P"
                    this.board[this.getPlayerY()][this.getPlayerX() - 2] = "T"
                    initialSetup();
                }
                else if (this.board[this.getPlayerY()][this.getPlayerX() - 1] === "K" &&
                    this.board[this.getPlayerY()][this.getPlayerX() - 2] === "K"){
                  
                    this.board[this.getPlayerY()][this.getPlayerX() - 1] === "K"
                    this.board[this.getPlayerY()][this.getPlayerX()] === "P"
                    this.board[this.getPlayerY()][this.getPlayerX() - 2] = "K"
            
                    initialSetup();
                }

                else if (this.board[this.getPlayerY()][this.getPlayerX() - 1] === "K" &&
                    this.board[this.getPlayerY()][this.getPlayerX() - 2] === "KB"){
            
                    this.board[this.getPlayerY()][this.getPlayerX() - 1] === "K"
                    this.board[this.getPlayerY()][this.getPlayerX()] === "P"
                    this.board[this.getPlayerY()][this.getPlayerX() - 2] = "KB"
            
                    initialSetup();
                }

                else if (this.board[this.getPlayerY()][this.getPlayerX() - 1] === "K" &&
                    this.board[this.getPlayerY()][this.getPlayerX() - 2] === "B") {
        
                    this.playerVariable = [this.getPlayerY(), this.getPlayerX()];
                    this.board[this.playerVariable[0]][(this.playerVariable[1] - 1)] = "P";
                   
                    this.board[this.playerVariable[0]][(this.playerVariable[1] - 2)] = "KB";
                    
                    this.board[this.playerVariable[0]][(this.playerVariable[1])] =
                    this.originalBoard[this.playerVariable[0]][(this.playerVariable[1])]

                }
                else if (this.board[this.getPlayerY()][this.getPlayerX() - 1] === "K" &&
                    this.board[this.getPlayerY()][this.getPlayerX() + 1] === "PB") {
                    this.playerVariable = [this.getPlayerY(), this.getPlayerX()];
                    this.board[this.playerVariable[0]][(this.playerVariable[1] - 1)] = "P";
                   
                    this.board[this.playerVariable[0]][(this.playerVariable[1] - 2)] = "K";
                    this.board[this.playerVariable[0]][(this.playerVariable[1])] = "B";
                    initialSetup()
                }

                else {
                    this.playerVariable = [this.getPlayerY(), this.getPlayerX()];
                    this.board[this.playerVariable[0]][(this.playerVariable[1] - 1)] = "P";
                   
                    this.board[this.playerVariable[0]][(this.playerVariable[1] - 2)] = "K";
                    initialSetup();
                   

                    if (this.originalBoard[this.playerVariable[0]][(this.playerVariable[1])] === "B") {
                        this.board[this.playerVariable[0]][(this.playerVariable[1])] = "B";
                        initialSetup();
                    }
                    else {
                        this.board[this.playerVariable[0]][(this.playerVariable[1])] = "E";
                        initialSetup();
                    }
                };

                break;
            case "E":
                this.playerVariable = [this.getPlayerY(), this.getPlayerX()];
                this.board[this.playerVariable[0]][(this.playerVariable[1] - 1)] = "P";
          

                if (this.originalBoard[this.playerVariable[0]][(this.playerVariable[1])] === "B") {
                    this.board[this.playerVariable[0]][(this.playerVariable[1])] = "B";
                    initialSetup();
                }
                else {
                    this.board[this.playerVariable[0]][(this.playerVariable[1])] = "E";
                    initialSetup();
                }
             
                initialSetup();
                break;
            case "KB":

                if (this.board[this.getPlayerY()][this.getPlayerX() - 1] === "KB" &&
                    this.board[this.getPlayerY()][this.getPlayerX() - 2] === "T") {
                  
                    this.board[this.getPlayerY()][this.getPlayerX() - 1] === "KB"
                    this.board[this.getPlayerY()][this.getPlayerX()] === "P"
                    this.board[this.getPlayerY()][this.getPlayerX() - 2] = "T"
                    initialSetup();} 

                 else {this.playerVariable = [this.getPlayerY(), this.getPlayerX()];
                    this.board[this.playerVariable[0]][(this.playerVariable[1] - 1)] = "PB";
                    // this.getPlayerX() = this.getPlayerX() - 1;
                    this.board[this.playerVariable[0]][(this.playerVariable[1] - 2)] = "K";
                    this.board[this.playerVariable[0]][(this.playerVariable[1])] = "E";
                    initialSetup();
                    // console.log("on my left there is a beer and a player");
                    initialSetup();}

                break;
            default: console.log("Critical error on interaction with KB");
        }

        // if (this.board[this.getPlayerY()][this.getPlayerX()] === "PB" && this.board[this.getPlayerY()][this.getPlayerX() - 1] === "K") {
        //     //     console.log("INTERACTION WIH THE BEER FULL EMPTY")
        //     this.playerVariable = [this.getPlayerY(), this.getPlayerX()];
        //     this.board[this.playerVariable[0]][(this.playerVariable[1])] = "PB";
        //     // this.getPlayerX() = this.getPlayerX()-1;
        //     this.board[this.playerVariable[0]][(this.playerVariable[1] - 1)] = "K";
        //     // this.board[this.playerVariable[0]][(this.playerVariable[1])]="B";
        //     initialSetup();
        //     console.log(this.board);
        //     // console.log("PB - Player inside the beer");

        // }

        if (this.board[this.getPlayerY()][this.getPlayerX() - 1] === "K" && this.board[this.getPlayerY()][this.getPlayerX()] === "PB") {
            this.playerVariable = [this.getPlayerY(), this.getPlayerX()];
            // this.board[this.playerVariable[0]][(this.playerVariable[1])]="PB";
            // this.getPlayerX() = this.getPlayerX()-1;
            // this.board[this.playerVariable[0]][(this.playerVariable[1]-1)]="K";
            this.board[this.playerVariable[0]][(this.playerVariable[1])] = "PB";
            initialSetup();
            // console.log(this.board);
            // console.log("INSIDE THE BEER");
        }

    }

    movePlayerRight() {
        this.board = rotateClockwise(this.board)
        this.originalBoard = rotateClockwise(this.originalBoard)
        this.board = rotateClockwise(this.board)
        this.originalBoard = rotateClockwise(this.originalBoard)
        this.movePlayerLeft()
        this.board = rotateClockwise(this.board)
        this.originalBoard = rotateClockwise(this.originalBoard)
        this.board = rotateClockwise(this.board)
        this.originalBoard = rotateClockwise(this.originalBoard)
        this.player.direction = 'right';
        initialSetup();
    }

    movePlayerUp() {
        this.board = rotateClockwise(this.board)
        this.originalBoard = rotateClockwise(this.originalBoard)
        this.board = rotateClockwise(this.board)
        this.originalBoard = rotateClockwise(this.originalBoard)
        this.board = rotateClockwise(this.board)
        this.originalBoard = rotateClockwise(this.originalBoard)
        this.movePlayerLeft()
        this.board = rotateClockwise(this.board)
        this.originalBoard = rotateClockwise(this.originalBoard)
        this.player.direction = 'up';
        initialSetup();
    }

    movePlayerDown() {
        this.board = rotateClockwise(this.board)
        this.originalBoard = rotateClockwise(this.originalBoard)
        this.movePlayerLeft()
        this.board = rotateClockwise(this.board)
        this.originalBoard = rotateClockwise(this.originalBoard)
        this.board = rotateClockwise(this.board)
        this.originalBoard = rotateClockwise(this.originalBoard)
        this.board = rotateClockwise(this.board)
        this.originalBoard = rotateClockwise(this.originalBoard)
        this.player.direction = 'down';
        initialSetup();
    }


}

