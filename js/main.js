
const $player = document.querySelector(".player");
const $board = document.querySelector(".board-container");

const $btnGame1reset = document.getElementById("reset-btn");

let game1 = new Game(9,6); 

// --------Function onclick to reset the game

$btnGame1reset.onclick = function resetGame(){
    game1.board = game1.originalBoard;
    
//Play the GONG Sound on RESET!!!
    let resetSound = new Audio("../sounds/NFF-gong.wav");
    resetSound.play();
    initialSetup();
    return game1.board;
};

//-------------DELETE IF ANYTHING WRONG

const $statusBaloon = document.querySelector(".status-baloon");

$statusBaloon.innerHTML= game1.playerWins();

//-------------DELETE IF ANYTHING WRONG

const boardWidth = $board.innerWidth //test like this
const boardHeight = $board.innerWidth

// Some constants
const NB_OF_TILES_WIDTH = game1.board[0].length
const NB_OF_TILES_HEIGHT = game1.board.length

const TILE_SIZE_WIDTH = boardWidth / NB_OF_TILES_WIDTH
const TILE_SIZE_HEIGHT = boardHeight / NB_OF_TILES_HEIGHT



// let game1 = new Game(9,6,7,4);  //this should be the initial sizes and also the initial position of the player

window.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        game1.movePlayerLeft();
    }else if(event.key === "ArrowRight"){
        game1.movePlayerRight();
    }else if(event.key === "ArrowUp"){
        game1.movePlayerUp();
    }else if(event.key === "ArrowDown"){
        game1.movePlayerDown();
    }
  });

    // T = Tile
    // P = Player
    // B = Beer
    // K = Keg
    // E = Empty


//-----------Creating the DIV elements with 'no-tile static' and with correspondant IDs ----

function structureCreation(){
    
    $statusBaloon.innerHTML= game1.playerWins();
    $( ".board-container" ).html("")
    for( var y = 0; y < game1.board.length; y++ ) {  
        for( var x = 0; x < game1.board[y].length; x++ ) { 
        var newDiv = $( "<div id='" + x + "-" + y + "' clays='game-tile no-tile static'></div>" );
        $( ".board-container" ).append( newDiv );
    }
}
}

// -------updating board with classes and images------------


function updateBoard() { //figure out wihout jQuery
    //     // $( ".tile static" ).removeClass( "player" );
    //     // $( ".tile static" ).removeClass( "unvisited" );

     $( ".game-tile" ).removeClass( "beer-empty static" );
     $( ".game-tile" ).removeClass( "player movable" );
     $( ".game-tile" ).removeClass( "keg movable" );
     $( ".game-tile" ).removeClass( "tile static" );
     $( ".game-tile" ).removeClass( "beer-full static" );
     $( ".game-tile" ).removeClass( "player-beer static" );


    for( var y = 0; y < game1.board.length; y++ ) {  
        for( var x = 0; x < game1.board[y].length; x++ ) { 
          $( "#" + x + "-" + y  ).removeClass( 'no-tile static' );

        switch (game1.board[y][x])
        {
            case "P": $( "#" + x + "-" + y ).addClass("player movable");
            break;
            case "T": $( "#" + x + "-" + y ).addClass("tile static");
            break;
            case "B": $( "#" + x + "-" + y ).addClass("beer-empty static");
            break;
            case "K": $( "#" + x + "-" + y ).addClass("keg movable");
            break;
            case "E": $( "#" + x + "-" + y ).addClass("no-tile static");
            break;
            case "KB": $( "#" + x + "-" + y ).addClass("beer-full static");
            break;
            case "PB": $( "#" + x + "-" + y ).addClass("player-beer static");
            break;
            default: console.log("Error: This tile is outside the game board");   
          }
         }
        }}       

// -------updating board with location based in ID's created previously------------

     function positionBoard() { 
      
        for( var y = 0; y < game1.board.length; y++ ) {  
            for( var x = 0; x < game1.board[y].length; x++ ) {
            
              $("#" + x + "-" + y  ).css("left" , x*5+"vw");
              $( "#" + x + "-" + y  ).css("top", y*5+"vw");
             }
            }}


// -------General update function which has all the others to update the board fully------------

function initialSetup(){
    structureCreation();
    updateBoard();
    positionBoard();
}

initialSetup();


// ------Create a rotated copy of the array in order to only write the movements for MoveLeft and the others only rotate---------

function rotateClockwise(a) {
    let height = a.length
    let width = a[0].length
    let b = []
    for (let y = 0; y < width; y++) {
        b.push([])
        for (let x = 0; x < height; x++) {
            b[y].push(null)
        }
    }
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            var tmp = a[y][x]
            b[x][height-y-1] = a[y][x]
        }
    }
    return b
}


//----------Function to change the little guy when the game is over --------------