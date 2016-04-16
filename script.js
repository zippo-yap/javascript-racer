

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

// Function to Update player position
function updatePlayerPosition(player) {
  for (var i = 0; i < player.length; i++){
    if (player[i].className === "active" && player[i].nextElementSibling !== null) {
    player[i].className = '';
    player[i].nextElementSibling.className = "active";
    break;
    }
  }
} // <-------Close function

document.addEventListener('keyup', updatePlayerPosition)


// Z = 90
// M = 77
