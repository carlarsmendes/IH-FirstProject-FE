// The constructor is the method triggered with the `new` keyword 

// const $player = document.querySelector(".player");
class Game {

    constructor(TOTAL_WIDTH, TOTAL_HEIGHT, playerStartPositionX, playerStartPositionY) {
        this.TOTAL_WIDTH = TOTAL_WIDTH
        this.TOTAL_HEIGHT = TOTAL_HEIGHT
        //     const NB_OF_TILES_WIDTH = board[0].length
        // const NB_OF_TILES_HEIGHT = board.length

        //this should create a matrix with width/height to define for each level.
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
            ["T", "E", "T", "E", "E", "T", "K", "P", "T"],
            ["T", "E", "B", "E", "B", "T", "E", "E", "T"],
            ["T", "T", "T", "T", "T", "T", "T", "T", "T"]
        ];

        this.originalBoard = [...this.board];


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
        console.log("I'm activating the Player function");
        console.log(this.board);

        switch (this.board[this.getPlayerY()][this.getPlayerX() - 1]) {
            case "T": //Not supposed to move the tile, or with the tile
                this.board[this.getPlayerY()][this.getPlayerX() - 1] = "T";
                console.log("on my left there is a tile");
                initialSetup()
                break;
            case "B":
                this.playerVariable = [this.getPlayerY(), this.getPlayerX()];
                this.board[this.playerVariable[0]][(this.playerVariable[1] - 1)] = "PB";
                // this.getPlayerX() = this.getPlayerX() - 1;
                if (this.originalBoard[this.playerVariable[0]][(this.playerVariable[1])] === "B") {
                        this.board[this.playerVariable[0]][(this.playerVariable[1])] = "B";
                        initialSetup();
                    }
                    else {
                        this.board[this.playerVariable[0]][(this.playerVariable[1])] = "E";
                        initialSetup();
                    }

                console.log("on my left there is a beer");
                initialSetup();
                break;
            case "K":
                if (this.board[this.getPlayerY()][this.getPlayerX() - 1] === "K" &&
                    this.board[this.getPlayerY()][this.getPlayerX() - 2] === "T") {
                    console.log("there's a tile two cols ahead")
                    this.board[this.getPlayerY()][this.getPlayerX() - 1] === "K"
                    this.board[this.getPlayerY()][this.getPlayerX()] === "P"
                    this.board[this.getPlayerY()][this.getPlayerX() - 2] = "T"
                    initialSetup();
                }
                else if (this.board[this.getPlayerY()][this.getPlayerX() - 1] === "K" &&
                    this.board[this.getPlayerY()][this.getPlayerX() - 2] === "K"){
                    console.log("there's a tile two cols ahead")
                    this.board[this.getPlayerY()][this.getPlayerX() - 1] === "K"
                    this.board[this.getPlayerY()][this.getPlayerX()] === "P"
                    this.board[this.getPlayerY()][this.getPlayerX() - 2] = "K"
                    // this.getPlayerY() = y
                    initialSetup();
                }
                else if (this.board[this.getPlayerY()][this.getPlayerX() - 1] === "K" &&
                    this.board[this.getPlayerY()][this.getPlayerX() - 2] === "B") {
                    console.log("there's a BEER two cols ahead")
                    this.playerVariable = [this.getPlayerY(), this.getPlayerX()];
                    this.board[this.playerVariable[0]][(this.playerVariable[1] - 1)] = "P";
                    // this.getPlayerX() = this.getPlayerX() - 1;
                    this.board[this.playerVariable[0]][(this.playerVariable[1] - 2)] = "KB";//HERE ADD CLASS
                    

                    if (this.originalBoard[this.playerVariable[0]][(this.playerVariable[1])] === "B") {
                        this.board[this.playerVariable[0]][(this.playerVariable[1])] = "B";
                        initialSetup();
                    }
                    else {
                        this.board[this.playerVariable[0]][(this.playerVariable[1])] = "E";
                        initialSetup();
                    }
                }
                else if (this.board[this.getPlayerY()][this.getPlayerX() - 1] === "K" &&
                    this.board[this.getPlayerY()][this.getPlayerX() + 1] === "PB") {
                    this.playerVariable = [this.getPlayerY(), this.getPlayerX()];
                    this.board[this.playerVariable[0]][(this.playerVariable[1] - 1)] = "P";
                    // this.getPlayerX() = this.getPlayerX() - 1;
                    this.board[this.playerVariable[0]][(this.playerVariable[1] - 2)] = "K";
                    this.board[this.playerVariable[0]][(this.playerVariable[1])] = "B";
                    // this.getPlayerX() = this.getPlayerX()-1;
                    console.log("ON MY RIGHT THERE'S AN EMPTY BEER");
                    initialSetup()
                }

                else {
                    this.playerVariable = [this.getPlayerY(), this.getPlayerX()];
                    this.board[this.playerVariable[0]][(this.playerVariable[1] - 1)] = "P";
                    // this.getPlayerX() = this.getPlayerX() - 1;
                    this.board[this.playerVariable[0]][(this.playerVariable[1] - 2)] = "K";
                    initialSetup();
                    // this.board[this.playerVariable[0]][(this.playerVariable[1])]="E";

                    if (this.originalBoard[this.playerVariable[0]][(this.playerVariable[1])] === "B") {
                        this.board[this.playerVariable[0]][(this.playerVariable[1])] = "B";
                        initialSetup();
                    }
                    else {
                        this.board[this.playerVariable[0]][(this.playerVariable[1])] = "E";
                        initialSetup();
                    }

                    // this.getPlayerX() = this.getPlayerX()-1;
                    console.log("on my left there is a keg");

                };

                break;
            case "E":
                this.playerVariable = [this.getPlayerY(), this.getPlayerX()];
                this.board[this.playerVariable[0]][(this.playerVariable[1] - 1)] = "P";
                // this.getPlayerX() = this.getPlayerX() - 1;


                if (this.originalBoard[this.playerVariable[0]][(this.playerVariable[1])] === "B") {
                    this.board[this.playerVariable[0]][(this.playerVariable[1])] = "B";
                    initialSetup();
                }
                else {
                    this.board[this.playerVariable[0]][(this.playerVariable[1])] = "E";
                    initialSetup();
                }
                // this.board[this.playerVariable[0]][(this.playerVariable[1])] = "E";
                // // this.playerVariable = [this.getPlayerY(),this.getPlayerX()];

                console.log("on my left there is empty space");
                initialSetup();
                break;
            case "KB":
                this.playerVariable = [this.getPlayerY(), this.getPlayerX()];
                this.board[this.playerVariable[0]][(this.playerVariable[1] - 1)] = "PB";
                // this.getPlayerX() = this.getPlayerX() - 1;
                this.board[this.playerVariable[0]][(this.playerVariable[1] - 2)] = "K";
                this.board[this.playerVariable[0]][(this.playerVariable[1])] = "E";
                initialSetup();
                console.log("on my left there is a beer and a player");
                initialSetup();

                break;
            default: console.log("I don't know what to do with this going left");
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
            //     console.log("INTERACTION WIH THE BEER FULL EMPTY")
            this.playerVariable = [this.getPlayerY(), this.getPlayerX()];
            // this.board[this.playerVariable[0]][(this.playerVariable[1])]="PB";
            // this.getPlayerX() = this.getPlayerX()-1;
            // this.board[this.playerVariable[0]][(this.playerVariable[1]-1)]="K";
            this.board[this.playerVariable[0]][(this.playerVariable[1])] = "PB";
            initialSetup();
            console.log(this.board);
            console.log("INSIDE THE BEER");
        }

        // }
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

