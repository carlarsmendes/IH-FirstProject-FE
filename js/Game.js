// The constructor is the method triggered with the `new` keyword 

// const $player = document.querySelector(".player");
class Game {

constructor(TOTAL_WIDTH,TOTAL_HEIGHT,playerStartPositionX,playerStartPositionY) 
{
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
        ["E", "T", "T", "T", "T", "T", "E", "E", "E"],
        ["T", "T", "E", "E", "E", "T", "T", "T", "T"],
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
    // this.keg = { //this defines the beers and their initial positions. should be diferent for each level, so should be variables. should be plent so they should be arrays
    //     x: 6, //3 for testing //let keg1 = [6,2],[6,3] 
    //     y: 2, //3 for testing// let tiles1 = []
    // }
}

// ---EXEMPLO DO JOAQUIM---
        // this.storeVariable = [4, 7]
        // this.board[this.storeVariable[0]][this.storeVariable[1]] = "E"
        // this.storeVariable[0]--
        // this.board[this.storeVariable[0]][this.storeVariable[1]] ="P"

        // console.log(this.board)
        // updateBoard()


    //Player movements and also the interactions with the kegs
    movePlayerLeft(){
        // let boardMinX = 0;
        // this.player.x = Math.max(this.player.x-1,boardMinX);
        // this.player.x = this.player.x-1;
        this.player.direction = 'left'
            // if (this.player.y === this.keg.y && this.keg.x === this.player.x+1){
            // this.moveKegLeft()} 
            // $( ".player" ).css("left", this.player.x*5+"vw");
            console.log("I'm activating the Player function");

            // $player.style.left = this.player.x*4+"vw"
            //This stores the player current variable in a variable
            // this.playerVariable = [this.player.y,this.player.x]; //(4,7)
            // // if(this.board[(this.playerVariable[0]-1)][this.playerVariable[1]] ===  "E"){
            //     //this writes "E" over the previous "P"
            // this.board[this.playerVariable[0]][this.playerVariable[1]] ="E";
            // //this changes the variable x of the stored variable
            // this.playerVariable[1]--;
            // //this changes "P" to its wanted location
            // this.board[this.playerVariable[0]][this.playerVariable[1]] ="P";
                // initialSetup();
                console.log(this.board);

                switch (this.board[this.player.y][this.player.x-1])
                {
                    case "T": 
                        // doNotMove();--> How to write this function
                        this.board[this.player.y][this.player.x-1]="T";
                        console.log("on my left there is a tile");
                        initialSetup()
                    
                    break;
                    case "B": 
                        // doNotMove();--> How to write this function
                        this.board[this.player.y][this.player.x-1]="B";
                        console.log("on my left there is a beer");
                        initialSetup()
                    break;
                    case "K": 

                    if(this.board[this.player.y][this.player.x-1]==="K" && 
                    this.board[this.player.y][this.player.x-2]==="T"){
                        console.log("there's a tile two cols ahead")
                        this.board[this.player.y][this.player.x-1]==="K"
                        this.board[this.player.y][this.player.x]==="P"
                        this.board[this.player.y][this.player.x-2]="T"
                        this.player.y = y
                        initialSetup();}
                    
                        if(this.board[this.player.y][this.player.x-1]==="K" && 
                        this.board[this.player.y][this.player.x-2]==="K"){
                            console.log("there's a tile two cols ahead")
                            this.board[this.player.y][this.player.x-1]==="K"
                            this.board[this.player.y][this.player.x]==="P"
                            this.board[this.player.y][this.player.x-2]="K"
                            this.player.y = y
                            initialSetup();}


                        this.playerVariable = [this.player.y,this.player.x];
                        this.board[this.playerVariable[0]][(this.playerVariable[1]-1)]="P";
                        this.player.x = this.player.x-1;
                        this.board[this.playerVariable[0]][(this.playerVariable[1]-2)]="K";
                        this.board[this.playerVariable[0]][(this.playerVariable[1])]="E";
                        // this.player.x = this.player.x-1;
                        console.log("on my left there is a keg");
                        initialSetup();

                    break;
                    case "E": 
                        this.playerVariable = [this.player.y,this.player.x];
                        this.board[this.playerVariable[0]][(this.playerVariable[1]-1)]="P";
                        this.player.x = this.player.x-1;
                        this.board[this.playerVariable[0]][(this.playerVariable[1])]="E";
                        // this.playerVariable = [this.player.y,this.player.x];
                        
                        console.log("on my left there is empty space");
                        initialSetup();
                    break;
                    default: console.log("I don't know what to do with this going left");   
                    }

                    

            // }
        }
        
    

    movePlayerRight(){
        // let boardMaxX = this.TOTAL_WIDTH;
        // this.player.x = Math.min(this.player.x+1,boardMaxX);
        this.player.direction = 'right';
        initialSetup();
        console.log(this.board);
        // if (this.player.y === this.keg.y && this.keg.x === this.player.x-1){
        //     this.moveKegRight()}
            // console.log("I'm activating the PLayer function");
            // $( ".player" ).css("left", this.player.x*5+"vw");

            switch (this.board[this.player.y][this.player.x+1])
                {
                    case "T": 
                        // doNotMove();--> How to write this function
                        this.board[this.player.y][this.player.x+1]="T";
                        console.log("on my right there is a tile");
                        initialSetup()
                    break;
                    case "B": 
                        // doNotMove();--> How to write this function
                        this.board[this.player.y][this.player.x+1]="B";
                        console.log("on my right there is a beer");
                        initialSetup()
                    break;
                    case "K": 

                    if(this.board[this.player.y][this.player.x+1]==="K" && 
                    this.board[this.player.y][this.player.x+2]==="T"){
                        console.log("there's a tile two cols ahead")
                        this.board[this.player.y][this.player.x+1]==="K"
                        this.board[this.player.y][this.player.x]==="P"
                        this.player.y = y;
                        initialSetup();}
                    
                        if(this.board[this.player.y][this.player.x+1]==="K" && 
                        this.board[this.player.y][this.player.x+2]==="K"){
                            console.log("there's a tile two cols ahead")
                            this.board[this.player.y][this.player.x+1]==="K"
                            this.board[this.player.y][this.player.x]==="P"
                            this.player.y = y;
                            initialSetup();}


                        this.playerVariable = [this.player.y,this.player.x];
                        this.board[this.playerVariable[0]][(this.playerVariable[1]+1)]="P";
                        this.player.x = this.player.x+1;
                        this.board[this.playerVariable[0]][(this.playerVariable[1]+2)]="K";
                        this.board[this.playerVariable[0]][(this.playerVariable[1])]="E";



                        console.log("on my right there is a keg");
                        initialSetup();
                    break;
                    case "E": 
                        this.playerVariable = [this.player.y,this.player.x];
                        this.board[this.playerVariable[0]][(this.playerVariable[1]+1)]="P";
                        this.player.x = this.player.x+1;
                        this.board[this.playerVariable[0]][(this.playerVariable[1])]="E";
                        initialSetup();
                        console.log("on my right there is empty space");
                    break;
                    default: console.log("I don't know what to do with this going right");   
                    }
    }

    movePlayerUp(){
        // let boardMinY = 0;
        // this.player.y = Math.max(this.player.y-1,boardMinY);
        this.player.direction = 'up';
        initialSetup();
        console.log(this.board);
        // $player.style.top = moveY();//DOM Manipulation
        // if (this.player.x === this.keg.x && this.keg.y === this.player.y+1){
        //     this.moveKegUp()}
            // console.log("I'm activating the PLayer function");
            // $( ".player" ).css("top", this.player.y*5+"vw");
        switch (this.board[this.player.y-1][this.player.x])
     
        {
            case "T": 
                this.board[this.player.y-1][this.player.x]="T";
                console.log("Looking UP there's a tile");
                initialSetup();
            break;
            case "B": 
                this.board[this.player.y-1][this.player.x]="B";
                console.log("Looking UP there's a beer");
                initialSetup();
            break;
            case "K": 

                if(this.board[this.player.y-1][this.player.x]==="K" && 
                this.board[this.player.y-2][this.player.x]==="T"){
                    console.log("there's a tile two cols ahead")
                    this.board[this.player.y-1][this.player.x]==="K"
                    this.board[this.player.y][this.player.x]==="P"
                    this.player.x = x;
                    initialSetup();}
                
                if(this.board[this.player.y-1][this.player.x]==="K" && 
                this.board[this.player.y-2][this.player.x]==="K"){
                    console.log("there's a tile two cols ahead")
                    this.board[this.player.y-1][this.player.x]==="K"
                    this.board[this.player.y][this.player.x]==="P"
                    this.player.x = x;
                    initialSetup();}

                this.playerVariable = [this.player.y,this.player.x];
                this.board[this.playerVariable[0]-1][(this.playerVariable[1])]="P";
                this.player.y = this.player.y-1;
                this.board[(this.playerVariable[0]-2)][this.playerVariable[1]]="K";
                this.board[this.playerVariable[0]][(this.playerVariable[1])]="E";
                console.log("Looking UP there's a keg");
                initialSetup();    
            break;
            case "E": 
                this.playerVariable = [this.player.y,this.player.x];
                this.board[this.playerVariable[0]-1][(this.playerVariable[1])]="P";
                this.player.y = this.player.y-1;
                this.board[this.playerVariable[0]][(this.playerVariable[1])]="E";
                console.log("Looking UP there's an empty space");
                initialSetup();
            break;
            default: 
                console.log("Looking UP and feeling LOST");  
            }


    }

    movePlayerDown(){ 
        // let boardMaxY = this.TOTAL_HEIGHT-1
        // this.player.y = Math.min(this.player.y+1,boardMaxY);
        this.player.direction = 'down'
        initialSetup();
        console.log(this.board);
            // $( ".player" ).css("top", this.player.y*5+"vw");
            //----INTERACTIONS CONDITIONS ETWEEN PLAYER AND OTHER ELEMENTS----
            switch (this.board[this.player.y+1][this.player.x])

            {
                case "T": 
                    this.board[this.player.y+1][this.player.x]="T";
                    console.log("Looking DOWN there's a tile");
                    initialSetup();
                break;
                case "B": 
                    this.board[this.player.y+1][this.player.x]="B";
                    console.log("Looking DOWN there's a beer");
                    initialSetup();
                break;
                case "K": 

                if(this.board[this.player.y+1][this.player.x]==="K" && 
                this.board[this.player.y+2][this.player.x]==="T"){
                    console.log("there's a tile two cols ahead")
                    this.board[this.player.y+1][this.player.x]==="K"
                    this.board[this.player.y][this.player.x]==="P"
                    this.player.x = x;
                    initialSetup();}
                
                if(this.board[this.player.y+1][this.player.x]==="K" && 
                this.board[this.player.y+2][this.player.x]==="K"){
                    console.log("there's a tile two cols ahead")
                    this.board[this.player.y+1][this.player.x]==="K"
                    this.board[this.player.y][this.player.x]==="P"
                    this.player.x = x;
                    initialSetup();}


                    this.playerVariable = [this.player.y,this.player.x];
                    this.board[this.playerVariable[0]+1][(this.playerVariable[1])]="P";
                    this.player.y = this.player.y+1;
                    this.board[(this.playerVariable[0]+2)][this.playerVariable[1]]="K";
                    this.board[this.playerVariable[0]][(this.playerVariable[1])]="E";
                    console.log("Looking DOWN there's a keg");
                    initialSetup();    
                break;
                case "E": 
                    this.playerVariable = [this.player.y,this.player.x];
                    this.board[this.playerVariable[0]+1][(this.playerVariable[1])]="P";
                    this.player.y = this.player.y+1;
                    this.board[this.playerVariable[0]][(this.playerVariable[1])]="E";
                    console.log("Looking DOWN there's an empty space");
                    initialSetup();
                break;
                default: 
                    console.log("Looking DOWN and feeling LOST");  
                }



            
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
