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

        this.board = [ 
            ["E", "E", "T", "T", "T", "T", "E", "E", "E"],
            ["T", "T", "T", "E", "E", "T", "T", "T", "T"],
            ["T", "E", "E", "E", "E", "E", "K", "E", "T"],
            ["T", "E", "T", "E", "E", "T", "K", "E", "T"],
            ["T", "E", "B", "E", "B", "T", "E", "P", "T"],
            ["T", "T", "T", "T", "T", "T", "T", "T", "T"]
        ];
//TESTING FOR FUTURE - ALWAYS HAVE A FIXED ITEMS BOARD
        // this.fixedItemsBoard = [
        //     ["E", "E", "T", "T", "T", "T", "E", "E", "E"],
        //     ["T", "T", "T", "E", "E", "T", "T", "T", "T"],
        //     ["T", "E", "E", "E", "E", "E", "E", "E", "T"],
        //     ["T", "E", "B", "B", "B", "E", "E", "E", "T"],
        //     ["T", "E", "E", "E", "E", "T", "E", "E", "T"],
        //     ["T", "T", "T", "T", "T", "T", "T", "T", "T"]
        // ];

        this.originalBoard = [...this.board];

        this.playerVariable = 0;


        this.player = { //this defines the DIRECTION OF THE PLAYER IN CASE THERE ARE OTHER IMAGES DOWN, UP, LEFT, ETC.
            direction: "down",
            
        }
        //     x: 6, //3 for testing //let keg1 = [6,2],[6,3] 
        //     y: 2, //3 for testing// let tiles1 = []
        // }
    }

    //THIS FUNCTION COUNTS THE TOTAL NUMBER OF KEGS WHICH ARE ON THE GAME------------
    countKegs() {
        this.numberKegs = 0;
        for (let x = 0; x < this.board.length; x++) {
            for (let y = 0; y < this.board[x].length; y++) {
                if (this.board[x][y] === "K" || this.board[x][y] === "KB") {
                    this.numberKegs++;
                }
            }
        }
        return this.numberKegs
    }



    //FUNCTION TO CALL WITH THE BUTTON
//-------------DELETE IF ANYTHING WRONG


    playerWins() {
        this.nrTotalKegs = 0;
        this.nrBeersFull = 0;
        this.nrBeersEmpty = 0;
        this.finalMessage = "";
        for (let x = 0; x < this.board.length; x++) {
            for (let y = 0; y < this.board[x].length; y++) {
                
                if (this.originalBoard[x][y] === "K" || this.originalBoard[x][y] === "KB") {
                    this.nrTotalKegs++;} 
                else if (this.board[x][y] === "B" || this.board[x][y] === "PB"){
                    this.nrBeersEmpty++;
                }
                else if (this.board[x][y] === "KB") {
                    this.nrBeersFull++;
                }
                else {}
            }
        }
                if(this.nrTotalKegs === this.nrBeersFull && this.nrBeersFull > 1 ){
                    this.finalMessage = `<p>Congrats!!</p> <p>${this.nrBeersFull} beers to drink!</p> <p>Go to the next level</p>`;
                    // document.getElementsByClassName("img-coder").src = "../img/Celebration-06.svg";
                } else if(this.nrTotalKegs !== this.nrBeersFull && this.nrBeersEmpty === 1 ){
                    this.finalMessage = `<p>Almost there!! </p><p>${this.nrBeersEmpty} beer left to fill!</p>`
                } 
                else {
                    this.finalMessage = `<p>Long way to go!</p> <p>${this.nrBeersEmpty} beers left to fill!</p>`
                }
        return this.finalMessage;
    }

    //-------------DELETE IF ANYTHING WRONG

//RESET FUNCTION TO CALL WITH THE BUTTON

    resetGame(){
        this.board = this.originalBoard;
        initialSetup();
    
        return this.board
    }

//------THIS INDICATES THE COORDINATES OF THE PLAYER----
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

//------THIS INDICATES THE COORDINATES OF THE PLAYER----
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
// -------THiS MOVELEFT() WORKS FOR ALL THE MOVEMENTS - RIGHT, UP, DOWN ----------------

    movePlayerLeft() {
        this.player.direction = 'left'
     //-------------DELETE IF ANYTHING WRONG
        // $statusBaloon.innerHTML = this.playerWins();
       //-------------DELETE IF ANYTHING WRONG

        switch (this.board[this.getPlayerY()][this.getPlayerX() - 1]) {
            case "T": //Not supposed to move the tile, or with the tile - Fixed element
                this.board[this.getPlayerY()][this.getPlayerX() - 1] = "T";
                // console.log("on my left there is a tile");
                initialSetup()
                break;
            case "B": //Not supposed to move the beer, or with the beer - Fixed element
                this.playerVariable = [this.getPlayerY(), this.getPlayerX()];
                this.board[this.playerVariable[0]][(this.playerVariable[1] - 1)] = "PB";
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
            case "K": //The keg is movable so here are all the possible interactions with the other elements
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
                    initialSetup();
                } else {this.playerVariable = [this.getPlayerY(), this.getPlayerX()];
                    this.board[this.playerVariable[0]][(this.playerVariable[1] - 1)] = "PB";
                    this.board[this.playerVariable[0]][(this.playerVariable[1] - 2)] = "K";
                    this.board[this.playerVariable[0]][(this.playerVariable[1])] = "E";
                    initialSetup();};

                break;
            default: console.log("Critical error on interaction with KB");
        }

        if (this.board[this.getPlayerY()][this.getPlayerX() - 1] === "K" && this.board[this.getPlayerY()][this.getPlayerX()] === "PB") {
            this.playerVariable = [this.getPlayerY(), this.getPlayerX()];
            this.board[this.playerVariable[0]][(this.playerVariable[1])] = "PB";
            initialSetup();
        }
        $statusBaloon.innerHTML = this.playerWins();
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

