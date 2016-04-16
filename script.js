

// Create a function to advance a particular player1Grid's position by one each time their key is pressed.
// You should set player as a parameter e.g.
var game = document.querySelector('.game');
var player = game.querySelectorAll('.players'); //tracks all players
// Create an array of the grids for each player.

//for (var i = 0; i >players.length; i++) {
//  player[i].addEventListener('click',function)
//}

var player1 = document.querySelector('.one').children
var player2 = document.querySelector('.two').children

 var i = 0; // Player 1 Position
 var j = 0; // Player 2 Position


 function updatePlayerPosition (event,player){
  if (event.which == 90){
    if (player1[i].className === "active" && player1[i].nextElementSibling !== null) {
      player1[i].className = "";
      player1[i].nextElementSibling.className = "active";
      i++;
    }
  } // <--- Close first if
  if (event.which == 77){
    if(player2[j].className == "active" && player2[j].nextElementSibling !== null){ 
      player2[j].className = "";
      player2[j].nextElementSibling.className = "active";
      j++;
    }
  }
} // <-------Close function

document.addEventListener('keyup', updatePlayerPosition)


// Z = 90
// M = 77

var p1keys = 90;
var p2keys = 77;