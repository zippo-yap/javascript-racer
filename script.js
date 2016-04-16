

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

 var i = 0; 

function updatePlayerPosition (){
 // Loop through the array

 // select element with class "active"
 // select next sibling

if (player1[i].className = "active") {
  player1[i].className = "";
  player1[i].nextElementSibling.className = "active";
  i++;
  // set class = active 
} // <------- Close Loop
} // <-------Close function
var j = 0;

function updatePlayerPosition2 (){
 // Loop through the array

 // select element with class "active"
 // select next sibling
if (player2[j].className = "active") {
  player2[j].className = "";
  player2[j].nextElementSibling.className = "active";
  j++;
  // set class = active 
} // <------- Close Loop
} // <-------Close function

