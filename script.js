// Run the code after the page has loaded
document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('keyup', keysPressed);

  // Create an array of the tracks for each player.
  var player1 = document.querySelector('.one').children;
  var player2 = document.querySelector('.two').children;

  // Function to Update player position
  function updatePlayerPosition (player) {
    for (var i = 0; i < player.length -1; i++) {
      // if position on board is last position
      if (player[i].className === 'active') {
        player[i].className = '';
        player[i].nextElementSibling.className = 'active';
        break;
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
    }
  }
})
