// Run the code after the page has loaded
document.addEventListener('DOMContentLoaded', function () {

  // Create an array of the tracks for each player.
  var player1 = document.querySelector('.one').children;
  var player2 = document.querySelector('.two').children;
 
  // Prompt the player if they're ready to play
  var playerReady = confirm('Are you ready to play?');

  // Activate keys to play game
  function play () {
    if (playerReady){
      document.addEventListener('keyup', keysPressed);
    }
  }

  // Do you want to play again?
  function endGame () {
    var playAgain = confirm('Do you want to play again?');
    if (playAgain){
      console.log("Play Again");
      // Call function to reset game
      reset();
    }
    else {
      console.log('Nope')
    }
  }

//var player = game.querySelectorAll('.players'); //tracks all players

  // Reset the game
  function reset () {
    for (var i = 0; i < player1.length; i++){
      if (player1[i].className === 'active') {
        player1[i].className = '';
      }
      if (player2[i].className === 'active') {
        player2[i].className = '';
      }
    }
    player1[0].className = 'active'
    player2[0].className = 'active'
    play();
  }

  play();


  // Function to Update player position
  function updatePlayerPosition (player) {
    for (var i = 0; i < player.length -1; i++) {
      if (player[i].className === 'active') {
        player[i].className = '';
        player[i].nextElementSibling.className = 'active';
        if (player[i].nextElementSibling === player[player.length -1]) {
          document.removeEventListener('keyup', keysPressed);
          // Call a function that resets the game
          endGame();
        
        }
        else {
             break;
        }
      }
    }
  }

  function keysPressed (event) {
    // When M is pressed
    if (event.which === 90) {
      updatePlayerPosition(player1);
    }
    // When Z is pressed
    else if (event.which === 77) {
      updatePlayerPosition(player2);
    } //Close keysPressed
  } // Close event listener
}) // Close document loader
