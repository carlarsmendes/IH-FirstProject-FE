
const $player = document.querySelector(".player");


const $board = document.querySelector(".board-container");

////HERE FOR DEBUGGING AND TESTING
 // T = Tile
    // P = Player
    // B = Beer
    // K = Keg
    // E = Empty (Background)

board = [
    ["E", "E", "T", "T", "T", "T", "E", "E", "E"],
    ["T", "T", "T", "E", "E", "T", "T", "T", "T"],
    ["T", "E", "E", "E", "E", "E", "K", "E", "T"],
    ["T", "E", "T", "E", "E", "T", "K", "E", "T"],
    ["T", "E", "B", "E", "B", "T", "E", "P", "T"],     
    ["T", "T", "T", "T", "T", "T", "T", "T", "T"]
    ];

const boardWidth = $board.innerWidth //test like this
const boardHeight = $board.innerWidth

// Some constants
const NB_OF_TILES_WIDTH = board[0].length
const NB_OF_TILES_HEIGHT = board.length

const TILE_SIZE_WIDTH = boardWidth / NB_OF_TILES_WIDTH
const TILE_SIZE_HEIGHT = boardHeight / NB_OF_TILES_HEIGHT

//which classes should I create?
//should I have a new game for each level?
//should I have a player class? or shoud always be the same? should player be a part of the Game class, or separate?

let game1 = new Game(9,6,7,4);  //this should be the initial sizes and also the initial position of the player

window.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        game1.movePlayerLeft();
        console.log("move left");
    }else if(event.key === "ArrowRight"){
        game1.movePlayerRight();
        console.log("move right");
    }else if(event.key === "ArrowUp"){
        game1.movePlayerUp();
        console.log("move up");
    }else if(event.key === "ArrowDown"){
        game1.movePlayerDown();
        console.log("move down");
    }
  });

    // T = Tile
    // P = Player
    // B = Beer
    // K = Keg
    // E = Empty


///Creating the DIV elements with 'no-tile static' and with correspondant IDs  - How to do this without jQuery?

function structureCreation(){
    // for( var i = 0; i < 7; i++ ) {  //BUG::   only works when the numbers with/height are inverted
    for( var i = 0; i < NB_OF_TILES_WIDTH; i++ ) {  
        for( var j = 0; j < NB_OF_TILES_HEIGHT; j++ ) { 
        var newDiv = $( "<div id='" + i + "-" + j + "' class='game-tile no-tile static'></div>" );
        $( ".board-container" ).append( newDiv );
    }
}
}

// structureCreation();


function updateBoard() { //figure out wihout jQuery
    //     // $( ".tile static" ).removeClass( "player" );
    //     // $( ".tile static" ).removeClass( "unvisited" );


     $( ".game-tile" ).removeClass( "beer-empty static" );
     $( ".game-tile" ).removeClass( "player movable" );
     $( ".game-tile" ).removeClass( "keg movable" );
     $( ".game-tile" ).removeClass( "tile static" );
    //  $( ".game-tile" ).removeClass( "unvisited" );


    for( var i = 0; i < NB_OF_TILES_WIDTH; i++ ) {  
        for( var j = 0; j < NB_OF_TILES_HEIGHT; j++ ) { 
          $( "#" + i + "-" + j  ).removeClass( 'no-tile static' );

        switch (game1.board[j][i])
        {
            case "P": $( "#" + i + "-" + j ).addClass("player movable");
            break;
            case "T": $( "#" + i + "-" + j ).addClass("tile static");
            break;
            case "B": $( "#" + i + "-" + j ).addClass("beer-empty static");
            break;
            case "K": $( "#" + i + "-" + j ).addClass("keg movable");
            break;
            case "E": $( "#" + i + "-" + j ).addClass("no-tile static");
            break;
            case "KB": $( "#" + i + "-" + j ).addClass("beer-full static");
            break;
            case "PB": $( "#" + i + "-" + j ).addClass("beer-full static");
            break;
            default: console.log("This tile is outside the game board");   
          }
         }
        }}       
// updateBoard();

     function positionBoard() { //figure out wihout jQuery
        //     // $( ".tile static" ).removeClass( "player" );
        //     // $( ".tile static" ).removeClass( "unvisited" );
        for( var i = 0; i < NB_OF_TILES_WIDTH; i++ ) {  
            for( var j = 0; j < NB_OF_TILES_HEIGHT; j++ ) { 
            
              $("#" + i + "-" + j  ).css("left" , i*5+"vw");
              $( "#" + i + "-" + j  ).css("top", j*5+"vw");
            //   $( "#" + i + "-" + j  ).css("width", TILE_SIZE_WIDTH+"px");
            //   $( "#" + i + "-" + j  ).css("height", TILE_SIZE_HEIGHT+"px");
            //   $( '#0-5' ).css('top', '300px')
            //   $('.handle').css('left', '300px');
             }
            }}

//  positionBoard();

function initialSetup(){
    structureCreation();
    updateBoard();
    positionBoard();
}

initialSetup();
    
//--------------Here to turn it from empty beer to full beer when the goal is achieved----------
    //  if(keg.positionX === beer.positionX && keg.positionY === beer.positionY){
        //change class to "full-beer"

    //  }

// function checkCollision(){  // ----this function should check whether there are any collisions with: "K","B","T","E" and if so, stay in the same place
//     let nearCollision = false;
    
//     for( var i = 0; i < NB_OF_TILES_WIDTH; i++ ) {  
//         for( var j = 0; j < NB_OF_TILES_HEIGHT; j++ ) { 
//         if(board[j][i] === "K" || board[j][i] === "T" ||  board[j][i] === "E" ){
//             nearCollision = true
//         } 

//         if(board[j][i] === "K"){
            
//         } 


       
//         }}
// }