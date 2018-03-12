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

  function removeListeners() {
    one.off();
    two.off();
    three.off();
    four.off();
    five.off();
    six.off();
    seven.off();
    eight.off();
    nine.off();
  }

  function checkVictory() {
    if (places[0][0] === 'x' && places[0][1] === 'x' && places[0][2] === 'x'){
      alert('X wins!');
      removeListeners();
    } else if (places[0][0] === 'x' && places[1][0] === 'x' && places[2][0] === 'x'){
      alert('X wins!');
      removeListeners();
    } else if (places[0][1] === 'x' && places[1][1] === 'x' && places[2][1] === 'x') {
      alert('X wins!');
      removeListeners();
    } else if (places[1][0] === 'x' && places[1][1] === 'x' && places[1][2] === 'x') {
      alert('X wins!');
      removeListeners();
    } else if (places[2][0] === 'x' && places[2][1] === 'x' && places[2][2] === 'x') {
      alert('X wins!');
      removeListeners();
    } else if (places[0][2] === 'x' && places[1][2] === 'x' && places[2][2] === 'x') {
      alert('X wins!');
      removeListeners();
    } else if (places[0][2] === 'x' && places[1][1] === 'x' && places[2][0] === 'x') {
      alert('X wins!');
      removeListeners();
    } else if (places[0][0] === 'x' && places[1][1] === 'x' && places[2][2] === 'x') {
      alert('X wins!');
      removeListeners();
    } else if (places[0][0] === 'o' && places[0][1] === 'o' && places[0][2] === 'o'){
      alert('O wins!');
      removeListeners();
    } else if (places[0][0] === 'o' && places[1][0] === 'o' && places[2][0] === 'o'){
      alert('O wins!');
      removeListeners();
    } else if (places[0][1] === 'o' && places[1][1] === 'o' && places[2][1] === 'o') {
      alert('O wins!');
      removeListeners();
    } else if (places[1][0] === 'o' && places[1][1] === 'o' && places[1][2] === 'o') {
      alert('O wins!');
      removeListeners();
    } else if (places[2][0] === 'o' && places[2][1] === 'o' && places[2][2] === 'o') {
      alert('O wins!');
      removeListeners();
    } else if (places[0][2] === 'o' && places[1][2] === 'o' && places[2][2] === 'o') {
      alert('O wins!');
      removeListeners();
    } else if (places[0][2] === 'o' && places[1][1] === 'o' && places[2][0] === 'o') {
      alert('O wins!');
      removeListeners();
    } else if (places[0][0] === 'o' && places[1][1] === 'o' && places[2][2] === 'o') {
      alert('O wins!');
      removeListeners();
    } else if (!places[0].includes(0) && !places[1].includes(0) && !places[2].includes(0)) {
      alert('Tie!');
      removeListeners();
    }
  }

  one.on('click', function() {
    if (places[0][0] === 0 && currentPlayer === 'x') {
      one.attr('src', 'images/x.png');
      places[0][0] = 'x';
      currentPlayer = 'o';
      player.attr('src', 'images/o.png');
      setTimeout(checkVictory, 100);
    } else if (places[0][0] === 0 && currentPlayer === 'o') {
      one.attr('src', 'images/o.png');
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
      two.attr('src', 'images/x.png');
      places[0][1] = 'x';
      currentPlayer = 'o';
      player.attr('src', 'images/o.png');
      setTimeout(checkVictory, 100);
    } else if (places[0][1] === 0 && currentPlayer === 'o') {
      two.attr('src', 'images/o.png');
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
      three.attr('src', 'images/x.png');
      places[0][2] = 'x';
      currentPlayer = 'o';
      player.attr('src', 'images/o.png');
      setTimeout(checkVictory, 100);
    } else if (places[0][2] === 0 && currentPlayer === 'o') {
      three.attr('src', 'images/o.png');
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
      four.attr('src', 'images/x.png');
      places[1][0] = 'x';
      currentPlayer = 'o';
      player.attr('src', 'images/o.png');
      setTimeout(checkVictory, 100);
    } else if (places[1][0] === 0 && currentPlayer === 'o') {
      four.attr('src', 'images/o.png');
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
      five.attr('src', 'images/x.png');
      places[1][1] = 'x';
      currentPlayer = 'o';
      player.attr('src', 'images/o.png');
      setTimeout(checkVictory, 100);
    } else if (places[1][1] === 0 && currentPlayer === 'o') {
      five.attr('src', 'images/o.png');
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
      six.attr('src', 'images/x.png');
      places[1][2] = 'x';
      currentPlayer = 'o';
      player.attr('src', 'images/o.png');
      setTimeout(checkVictory, 100);
    } else if (places[1][2] === 0 && currentPlayer === 'o') {
      six.attr('src', 'images/o.png');
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
      seven.attr('src', 'images/x.png');
      places[2][0] = 'x';
      currentPlayer = 'o';
      player.attr('src', 'images/o.png');
      setTimeout(checkVictory, 100);
    } else if (places[2][0] === 0 && currentPlayer === 'o') {
      seven.attr('src', 'images/o.png');
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
      eight.attr('src', 'images/x.png');
      places[2][1] = 'x';
      currentPlayer = 'o';
      player.attr('src', 'images/o.png');
      setTimeout(checkVictory, 100);
    } else if (places[2][1] === 0 && currentPlayer === 'o') {
      eight.attr('src', 'images/o.png');
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
      nine.attr('src', 'images/x.png');
      places[2][2] = 'x';
      currentPlayer = 'o';
      player.attr('src', 'images/o.png');
      setTimeout(checkVictory, 100);
    } else if (places[2][2] === 0 && currentPlayer === 'o') {
      nine.attr('src', 'images/o.png');
      places[2][2] = 'o';
      currentPlayer = 'x';
      player.attr('src', 'images/x.png');
      setTimeout(checkVictory, 100);
    } else {
      alert('Invalid move!');
    }
  });
});
