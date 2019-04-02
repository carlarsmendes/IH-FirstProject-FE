
const $player = document.querySelector(".player");
const $board = document.querySelector(".board-container");

////HERE FOR DEBUGGING AND TESTING
board = [
    ["E", "E", "T", "T", "T", "T", "E", "E", "E"],
    ["T", "T", "T", "E", "E", "T", "T", "T", "T"],
    ["T", "E", "E", "E", "E", "E", "K", "E", "T"],
    ["T", "E", "T", "E", "E", "T", "K", "E", "T"],
    ["T", "E", "B", "E", "B", "T", "E", "P", "T"],     
    ["T", "T", "T", "T", "T", "T", "T", "T", "T"]
    ];


const $width = $board.offsetWidth
const $height = $board.offsetHeight

// Some constants
const NB_OF_TILES_WIDTH = 9
const NB_OF_TILES_HEIGHT = 6

const TILE_SIZE_WIDTH = $width / NB_OF_TILES_WIDTH
const TILE_SIZE_HEIGHT = $height / NB_OF_TILES_HEIGHT

//which classes should I create?
//should I have a new game for each level?
//should I have a player class? or shoud always be the same? should player be a part of the Game class, or separate?

let game1 = new Game(9,6,2,2);  //this should be the initial sizes and also the position of the player

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



    // T = Tile
    // P = Player
    // B = Beer
    // K = Keg
    // E = Empty


///Creating the DIV elements with 'no-tile static' and with correspondant IDs  - How to do this without jQuery?

function structureCreation(){
    for( var i = 0; i < NB_OF_TILES_HEIGHT; i++ ) {
        for( var j = 0; j < NB_OF_TILES_WIDTH; j++ ) {
        var newDiv = $( "<div id='" + i + "-" + j + "' class='no-tile static'></div>" );
        $( ".board-container" ).append( newDiv );
        // document.getElementById(`"${i}-${j}"`).style.top = `"${i*TILE_SIZE_WIDTH}"`


        // var textedDiv = "<div id='" + i + "-" + j + "' class='tile'></div>"
        // var newDiv = document.createElement(textedDiv);
        // $board.appendChild(newDiv) ;
        
        // $board.appendChild( newDiv );
        // document.getElementById(`"${i}-${j}"`).style.top = `'${i*TILE_SIZE_WIDTH}'`
    }
}
}

//tesing wehther manipulating the style was failing because the DIV s had to be created first

// function classesAdded(){
//     for( var i = 0; i < NB_OF_TILES_WIDTH; i++ ) {
//         for( var j = 0; j < NB_OF_TILES_HEIGHT; j++ ) {
//             let idIj = `"${i}-${j}"`
//             document.getElementById(idIj).style.top = `"${i*TILE_SIZE_WIDTH}"`}
//         }
//     }

structureCreation();
// classesAdded();

function updateBoard() { //figure out wihout jQuery
    //     // $( ".tile static" ).removeClass( "player" );
    //     // $( ".tile static" ).removeClass( "unvisited" );
    for( var i = 0; i < NB_OF_TILES_HEIGHT; i++ ) {
        for( var j = 0; j < NB_OF_TILES_WIDTH; j++ ) {
          $( "#" + i + "-" + j  ).removeClass( 'no-tile static' );

        switch (board[i][j])
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
            default: console.log("This tile is outside the game board");   
          }
         }
        }}
       
updateBoard();


     function positionBoard() { //figure out wihout jQuery
        //     // $( ".tile static" ).removeClass( "player" );
        //     // $( ".tile static" ).removeClass( "unvisited" );
        for( var i = 0; i < NB_OF_TILES_HEIGHT; i++ ) {
            for( var j = 0; j < NB_OF_TILES_WIDTH; j++ ) {
            
                $("#" + i + "-" + j  ).css("left" , i*TILE_SIZE_HEIGHT+"px");
                // $("#" + i + "-" + j  ).css(`'left', '${i*TILE_SIZE_WIDTH}px'`);
              $( "#" + i + "-" + j  ).css("top", j*TILE_SIZE_WIDTH+"px");
              $( "#" + i + "-" + j  ).css("width", TILE_SIZE_WIDTH+"px");
            //   $( "#" + i + "-" + j  ).css("height", TILE_SIZE_HEIGHT+"px");
            //   $( '#0-5' ).css('top', '300px')
            //   $('.handle').css('left', '300px');

             }
            }}

  positionBoard();
    
//--------------Here to turn it from empty beer to full beer when the goal is achieved----------
    //  if(keg.positionX === beer.positionX && keg.positionY === beer.positionY){
        //change class to "full-beer"

    //  }