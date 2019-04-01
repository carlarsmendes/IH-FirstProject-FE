
var $player = document.querySelector(".player");
const $board = document.querySelector(".board-container");

var $width = $board.offsetWidth
var $height = $board.offsetHeight

// Some constants
const NB_OF_TILES_WIDTH = 9
const NB_OF_TILES_HEIGHT = 7

const TILE_SIZE_WIDTH = $width / NB_OF_TILES_WIDTH
const TILE_SIZE_HEIGHT = $height / NB_OF_TILES_HEIGHT

let game1 = new Game(9,7,2,2);  //this should be the initial sizes and also the position of the player

window.addEventListener("keydown", function onEvent(event) {
    if (event.key === "ArrowLeft") {
        movePlayerLeft(game1);
        console.log("move left");
    }else if(event.key === "ArrowRight"){
        movePlayerRight(game1);
        console.log("move right");
    }else if(event.key === "ArrowUp"){
        movePlayerUp(game1);
        console.log("move up");
    }else if(event.key === "ArrowDown"){
        movePlayerDown(game1);
        console.log("move down");
    }
  });

//   function updateBoard() {
//     // $( ".tile" ).removeClass( "player" );
//     // $( ".tile" ).removeClass( "unvisited" );
    
//     for( var i = 0; i < $width; i++ ) {
//         for( var j = 0; j < $height; j++ ) {
//             if( (player.board[i][j] == "P") && (player.player.direction == "up") ) {
//                 $( "#" + i + "-" + j ).addClass( "player");
//                 $( ".player" ).css({ "background-image": "url('./images/dwarf/sprite-up.png')" });
//             }
//             if( (player.board[i][j] == "P") && (player.player.direction == "down") ) {
//                 $( "#" + i + "-" + j ).addClass( "player" );
//                 $( ".player" ).css({ "background-image": "url('./images/dwarf/sprite-down.png')" });
//             }
//             if( (player.board[i][j] == "P") && (player.player.direction == "left") ) {
//                 $( "#" + i + "-" + j ).addClass( "player" );
//                 $( ".player" ).css({ "background-image": "url('./images/dwarf/sprite-left.png')" });
//             }
//             if( (player.board[i][j] == "P") && (player.player.direction == "right") ) {
//                 $( "#" + i + "-" + j ).addClass( "player" );
//                 $( ".player" ).css({ "background-image": "url('./images/dwarf/sprite-right.png')" });
//             }
//             if( player.board[i][j] == "T" ) {
//                 $( "#" + i + "-" + j ).addClass( "tile" );
//             }
//             if( player.board[i][j] == "B" ) {
//                 $( "#" + i + "-" + j ).addClass( "beer-empty" );
//             }
//             if( player.board[i][j] == "K" ) {
//                 $( "#" + i + "-" + j ).addClass( "keg" );
//             }
//             if( player.board[i][j] == "E" ) {
//                 $( "#" + i + "-" + j ).addClass( "no-tile" );
//             }
//         }
//     }
   
// }
// updateBoard();

///Create the DIV elements with 'tile' and with correspondant IDs 

function structureCreation(){
for( var i = 0; i < NB_OF_TILES_WIDTH; i++ ) {
    for( var j = 0; j < NB_OF_TILES_HEIGHT; j++ ) {
        var newDiv = $( "<div id='" + i + "-" + j + "' class='tile'></div>" );
        $( ".board-container" ).append( newDiv );
        
        // document.board-container ).appendChild( newDiv );
        // document.getElementById(`"${i}-${j}"`).style.top = `'${i*TILE_SIZE_WIDTH}'`
    }
}
}

structureCreation();




