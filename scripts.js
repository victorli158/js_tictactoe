// refactor click listeners
// refactor checkVictory

$(document).ready(function() {
  let currentPlayer = 'x';
  let one = $('#one');
  let two = $('#two');
  let three = $('#three');
  let four = $('#four');
  let five = $('#five');
  let six = $('#six');
  let seven = $('#seven');
  let eight = $('#eight');
  let nine = $('#nine');
  let places = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  let player = $('#player');
  let replay = $('#replay');

  function removeListeners() {
    $('#one, #two, #three, #four, #five, #six, #seven, #eight, #nine').off();
  }

  function setupReplay() {
    replay.css('display', 'block');
    replay.on('click', 'button', function() {
      places = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
      currentPlayer = 'x';
      $('img').attr('src', 'images/blank.png');
      player.attr('src', 'images/x.png');
      addListeners();
      replay.css('display', 'none');
      console.log(places);
    });
  }

  function checkVictory() {
    if (places[0][0] === 'x' && places[0][1] === 'x' && places[0][2] === 'x'){
      alert('X wins!');
      removeListeners();
      setupReplay();
    } else if (places[0][0] === 'x' && places[1][0] === 'x' && places[2][0] === 'x'){
      alert('X wins!');
      removeListeners();
      setupReplay();
    } else if (places[0][1] === 'x' && places[1][1] === 'x' && places[2][1] === 'x') {
      alert('X wins!');
      removeListeners();
      setupReplay();
    } else if (places[1][0] === 'x' && places[1][1] === 'x' && places[1][2] === 'x') {
      alert('X wins!');
      removeListeners();
      setupReplay();
    } else if (places[2][0] === 'x' && places[2][1] === 'x' && places[2][2] === 'x') {
      alert('X wins!');
      removeListeners();
      setupReplay();
    } else if (places[0][2] === 'x' && places[1][2] === 'x' && places[2][2] === 'x') {
      alert('X wins!');
      removeListeners();
      setupReplay();
    } else if (places[0][2] === 'x' && places[1][1] === 'x' && places[2][0] === 'x') {
      alert('X wins!');
      removeListeners();
      setupReplay();
    } else if (places[0][0] === 'x' && places[1][1] === 'x' && places[2][2] === 'x') {
      alert('X wins!');
      removeListeners();
      setupReplay();
    } else if (places[0][0] === 'o' && places[0][1] === 'o' && places[0][2] === 'o'){
      alert('O wins!');
      removeListeners();
      setupReplay();
    } else if (places[0][0] === 'o' && places[1][0] === 'o' && places[2][0] === 'o'){
      alert('O wins!');
      removeListeners();
      setupReplay();
    } else if (places[0][1] === 'o' && places[1][1] === 'o' && places[2][1] === 'o') {
      alert('O wins!');
      removeListeners();
      setupReplay();
    } else if (places[1][0] === 'o' && places[1][1] === 'o' && places[1][2] === 'o') {
      alert('O wins!');
      removeListeners();
      setupReplay();
    } else if (places[2][0] === 'o' && places[2][1] === 'o' && places[2][2] === 'o') {
      alert('O wins!');
      removeListeners();
      setupReplay();
    } else if (places[0][2] === 'o' && places[1][2] === 'o' && places[2][2] === 'o') {
      alert('O wins!');
      removeListeners();
      setupReplay();
    } else if (places[0][2] === 'o' && places[1][1] === 'o' && places[2][0] === 'o') {
      alert('O wins!');
      removeListeners();
      setupReplay();
    } else if (places[0][0] === 'o' && places[1][1] === 'o' && places[2][2] === 'o') {
      alert('O wins!');
      removeListeners();
      setupReplay();
    } else if (!places[0].includes(0) && !places[1].includes(0) && !places[2].includes(0)) {
      alert('Tie!');
      removeListeners();
      setupReplay();
    }
  }

  function addListeners() {
    one.on('click', function() {
      if (places[0][0] === 0 && currentPlayer === 'x') {
        $(this).find('img').attr('src', 'images/x.png');
        places[0][0] = 'x';
        currentPlayer = 'o';
        player.attr('src', 'images/o.png');
        setTimeout(checkVictory, 100);
      } else if (places[0][0] === 0 && currentPlayer === 'o') {
        $(this).find('img').attr('src', 'images/o.png');
        places[0][0] = 'o';
        currentPlayer = 'x';
        player.attr('src', 'images/x.png');
        setTimeout(checkVictory, 100);
      } else {
        alert('Invalid move!');
      }
    });

    two.on('click', function() {
      if (places[0][1] === 0 && currentPlayer === 'x') {
        $(this).find('img').attr('src', 'images/x.png');
        places[0][1] = 'x';
        currentPlayer = 'o';
        player.attr('src', 'images/o.png');
        setTimeout(checkVictory, 100);
      } else if (places[0][1] === 0 && currentPlayer === 'o') {
        $(this).find('img').attr('src', 'images/o.png');
        places[0][1] = 'o';
        currentPlayer = 'x';
        player.attr('src', 'images/x.png');
        setTimeout(checkVictory, 100);
      } else {
        alert('Invalid move!');
      }
    });

    three.on('click', function() {
      if (places[0][2] === 0 && currentPlayer === 'x') {
        $(this).find('img').attr('src', 'images/x.png');
        places[0][2] = 'x';
        currentPlayer = 'o';
        player.attr('src', 'images/o.png');
        setTimeout(checkVictory, 100);
      } else if (places[0][2] === 0 && currentPlayer === 'o') {
        $(this).find('img').attr('src', 'images/o.png');
        places[0][2] = 'o';
        currentPlayer = 'x';
        player.attr('src', 'images/x.png');
        setTimeout(checkVictory, 100);
      } else {
        alert('Invalid move!');
      }
    });

    four.on('click', function() {
      if (places[1][0] === 0 && currentPlayer === 'x') {
        $(this).find('img').attr('src', 'images/x.png');
        places[1][0] = 'x';
        currentPlayer = 'o';
        player.attr('src', 'images/o.png');
        setTimeout(checkVictory, 100);
      } else if (places[1][0] === 0 && currentPlayer === 'o') {
        $(this).find('img').attr('src', 'images/o.png');
        places[1][0] = 'o';
        currentPlayer = 'x';
        player.attr('src', 'images/x.png');
        setTimeout(checkVictory, 100);
      } else {
        alert('Invalid move!');
      }
    });

    five.on('click', function() {
      if (places[1][1] === 0 && currentPlayer === 'x') {
        $(this).find('img').attr('src', 'images/x.png');
        places[1][1] = 'x';
        currentPlayer = 'o';
        player.attr('src', 'images/o.png');
        setTimeout(checkVictory, 100);
      } else if (places[1][1] === 0 && currentPlayer === 'o') {
        $(this).find('img').attr('src', 'images/o.png');
        places[1][1] = 'o';
        currentPlayer = 'x';
        player.attr('src', 'images/x.png');
        setTimeout(checkVictory, 100);
      } else {
        alert('Invalid move!');
      }
    });

    six.on('click', function() {
      if (places[1][2] === 0 && currentPlayer === 'x') {
        $(this).find('img').attr('src', 'images/x.png');
        places[1][2] = 'x';
        currentPlayer = 'o';
        player.attr('src', 'images/o.png');
        setTimeout(checkVictory, 100);
      } else if (places[1][2] === 0 && currentPlayer === 'o') {
        $(this).find('img').attr('src', 'images/o.png');
        places[1][2] = 'o';
        currentPlayer = 'x';
        player.attr('src', 'images/x.png');
        setTimeout(checkVictory, 100);
      } else {
        alert('Invalid move!');
      }
    });

    seven.on('click', function() {
      if (places[2][0] === 0 && currentPlayer === 'x') {
        $(this).find('img').attr('src', 'images/x.png');
        places[2][0] = 'x';
        currentPlayer = 'o';
        player.attr('src', 'images/o.png');
        setTimeout(checkVictory, 100);
      } else if (places[2][0] === 0 && currentPlayer === 'o') {
        $(this).find('img').attr('src', 'images/o.png');
        places[2][0] = 'o';
        currentPlayer = 'x';
        player.attr('src', 'images/x.png');
        setTimeout(checkVictory, 100);
      } else {
        alert('Invalid move!');
      }
    });

    eight.on('click', function() {
      if (places[2][1] === 0 && currentPlayer === 'x') {
        $(this).find('img').attr('src', 'images/x.png');
        places[2][1] = 'x';
        currentPlayer = 'o';
        player.attr('src', 'images/o.png');
        setTimeout(checkVictory, 100);
      } else if (places[2][1] === 0 && currentPlayer === 'o') {
        $(this).find('img').attr('src', 'images/o.png');
        places[2][1] = 'o';
        currentPlayer = 'x';
        player.attr('src', 'images/x.png');
        setTimeout(checkVictory, 100);
      } else {
        alert('Invalid move!');
      }
    });

    nine.on('click', function() {
      if (places[2][2] === 0 && currentPlayer === 'x') {
        $(this).find('img').attr('src', 'images/x.png');
        places[2][2] = 'x';
        currentPlayer = 'o';
        player.attr('src', 'images/o.png');
        setTimeout(checkVictory, 100);
      } else if (places[2][2] === 0 && currentPlayer === 'o') {
        $(this).find('img').attr('src', 'images/o.png');
        places[2][2] = 'o';
        currentPlayer = 'x';
        player.attr('src', 'images/x.png');
        setTimeout(checkVictory, 100);
      } else {
        alert('Invalid move!');
      }
    });
  }

  addListeners();
});
