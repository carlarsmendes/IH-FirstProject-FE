
let game2 = new Game(6,8); 


const $btnGame2reset = document.getElementById("reset-btn2");
const $board2 = document.querySelector("#board2-container");


$btnGame2reset.onclick = function resetGame(){
    game2.board = game2.originalBoard;
    initialSetup();

    return game2.board;
};

const boardWidth = $board2.innerWidth //test like this
const boardHeight = $board2.innerWidth

// Some constants
const NB_OF_TILES_WIDTH = game2.board[0].length
const NB_OF_TILES_HEIGHT = game2.board.length

// const TILE_SIZE_WIDTH = boardWidth / NB_OF_TILES_WIDTH
// const TILE_SIZE_HEIGHT = boardHeight / NB_OF_TILES_HEIGHT

const TILE_SIZE_WIDTH = 5
const TILE_SIZE_HEIGHT = 5

// $(".movable.static" ).width(TILE_SIZE_WIDTH+"vw");

// document.getElementsByClassName("static").style.width = "5vw";

// $(".movable.static" ).css("height" , TILE_SIZE_HEIGHT+"vw");


// .movable, .static{
//     position:absolute;
//     padding:0;
//     text-align:center;
//     background-color: transparent;
//     width: 5vw;
//     height: 5vw;
//     margin:0;
//     background-size: 100% 100%;
//     /* border: 3px yellow solid; */
    
// }


game2.board = [
        ["T", "T", "T", "T", "T", "T","T","T"],
        ["T", "E", "E", "P", "E", "E","E","T"],
        ["T", "E", "E", "T", "K", "K","E","T"],
        ["T", "T", "E", "K", "E", "E","T","T"],
        ["E", "T", "E", "E", "K", "B","T","T"],
        ["E", "T", "T", "E", "B", "T","T","E"],
        ["E", "E", "T", "B", "B", "T","E","E"],
        ["E", "E", "T", "T", "T", "T","E","E"]
        ];

game2.originalBoard = [...game2.board];

// game2.fixedItemsBoard = [
//     ["T", "T", "T", "T", "T", "T","T","T"],
//     ["T", "E", "E", "P", "E", "E","E","T"],
//     ["T", "E", "E", "T", "E", "E","E","T"],
//     ["T", "T", "E", "E", "E", "E","T","T"],
//     ["E", "T", "E", "E", "E", "B","T","T"],
//     ["E", "T", "T", "E", "B", "T","T","E"],
//     ["E", "E", "T", "B", "B", "T","E","E"],
//     ["E", "E", "T", "T", "T", "T","E","E"]
//     ];






        window.addEventListener("keydown", function (event) {
            if (event.key === "ArrowLeft") {
                game2.movePlayerLeft();
            }else if(event.key === "ArrowRight"){
                game2.movePlayerRight();
            }else if(event.key === "ArrowUp"){
                game2.movePlayerUp();
            }else if(event.key === "ArrowDown"){
                game2.movePlayerDown();
            }
          });

          function structureCreation(){

            $( "#board2-container" ).html("")
            for( var y = 0; y < game2.board.length; y++ ) {  
                for( var x = 0; x < game2.board[y].length; x++ ) { 
                var newDiv = $( "<div id='" + x + "-" + y + "' class='game-tile no-tile static'></div>" );
                $( "#board2-container" ).append( newDiv );
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
             $( ".game-tile" ).removeClass( "beer-full static" );
             $( ".game-tile" ).removeClass( "player-beer static" );
        
            //  $( ".game-tile" ).removeClass( "unvisited" );
        
        
            for( var y = 0; y < game2.board.length; y++ ) {  
                for( var x = 0; x < game2.board[y].length; x++ ) { 
                  $( "#" + x + "-" + y  ).removeClass( 'no-tile static' );
        
                switch (game2.board[y][x])
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
        // updateBoard();
        
             function positionBoard() { //figure out wihout jQuery
                //     // $( ".tile static" ).removeClass( "player" );
                //     // $( ".tile static" ).removeClass( "unvisited" );
                for( var y = 0; y < game2.board.length; y++ ) {  
                    for( var x = 0; x < game2.board[y].length; x++ ) {
                    
                      $("#" + x + "-" + y  ).css("left" , x*TILE_SIZE_HEIGHT+"vw");
                      $( "#" + x + "-" + y  ).css("top", y*TILE_SIZE_WIDTH+"vw");
                    //   $( "#" + x + "-" + y  ).css("width", TILE_SIZE_WIDTH+"px");
                    //   $( "#" + x + "-" + y  ).css("height", TILE_SIZE_HEIGHT+"px");
                     }
                    }}


    function initialSetup(){
        structureCreation();
        updateBoard();
        positionBoard();
    }
    
    initialSetup();


    // Create a rotated copy of the array 
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
    