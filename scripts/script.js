document.addEventListener('DOMContentLoaded', function() {
    // Prompt the player if they're ready to play
    play();
});

// Create variables
var player1 = document.getElementById('player1_strip');
var player2 = document.getElementById('player2_strip');
var strip; // Player tracks
var numPlayers = 2;

// Activate keys to play game
function play () {
    document.addEventListener('keyup', keysPressed);
    var lengthOfTrack = prompt("Specify a track length", "1-10");
    track(lengthOfTrack);
};

function keysPressed (event) {
    // When M is pressed
    if (event.which === 90) {
        updatePlayerPosition('player1_strip');
    }
    // When Z is pressed
    else if (event.which === 77) {
        updatePlayerPosition('player2_strip');
    }
}; // Close keypressed function

// Set track length
function track (trackLength) {
    for (var i = 0; i < trackLength; i++){
        player1.appendChild(document.createElement('td'));
        player2.appendChild(document.createElement('td'));
    }
};

  // Function to Update player position
  function updatePlayerPosition (player) {
    strip = document.getElementById(player);
    for (var i = 0; i < strip.children.length -1; i++) {
        if (strip.children[i].className === 'active') {
            strip.children[i].className = '';
            strip.children[i].nextElementSibling.className = 'active';
            if (strip.children[i].nextElementSibling === strip.children[strip.children.length -1]) {
                document.removeEventListener('keyup', keysPressed);
            // Call a function that resets the game
            endGame();
        }
        else {
            break;
        }
    }
}
};

  // Do you want to play again?
  function endGame () {
    var playAgain = confirm('Do you want to play again?');
    if (playAgain) {
      // Call function to reset game
    //document.location.reload(); <--- this refreshes the page but I'm thinking of not using it so I can create a score board.
    reset();
}
else {
        console.log('Nope') // Work in progress
    }
};

  // Reset the game
  function reset () {
    // for (var i = 0; i < strip.children.length; i++){
    //     player1.children[i].className = '';
    //     player2.children[i].className = '';
    // }
    // player1.children[0].className = 'active';
    // player2.children[0].className = 'active';
    // play();
    document.location.reload();
};
