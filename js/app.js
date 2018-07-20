var activePlayer, score, scoreRound, player1, player2, winScore;

init();

function init() {
    activePlayer = 0;
    score = [0, 0];
    scoreRound = 0;
    gamePlay = true;
    // player1 = prompt('Please enter player 1 name');
    // player2 = prompt('Please enter player 2 name');
    // winScore = prompt('Add score to win');
    player1 = 'Player 1';
    player2 = 'Player 2';
    player3 = 'Player 3';
    player4 = 'Player 4';
    winScore = 20;
    document.querySelector('.dice').src = 'img/dice-6.png';
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('current-2').textContent = 0;
    document.getElementById('current-3').textContent = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('score-2').textContent = 0;
    document.getElementById('score-3').textContent = 0;
    document.getElementById('name-0').textContent = player1;
    document.getElementById('name-1').textContent = player2;
    document.getElementById('name-2').textContent = player3;
    document.getElementById('name-3').textContent = player4;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-2-panel').classList.remove('winner');
    document.querySelector('.player-3-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-2-panel').classList.remove('active');
    document.querySelector('.player-3-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-2-panel').classList.add('not-play');
    document.querySelector('.player-3-panel').classList.add('not-play');
}

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlay) {
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'img/dice-' + dice + '.png';
        scoreRound += dice;
        document.getElementById('current-' + activePlayer).textContent = scoreRound;
        // console.log(dice);
        if (dice === 1) {
            nextPlayer();
        }
        // console.log('player ' + activePlayer);
    }
});

function nextPlayer() {
    var x = score.length - 1;
    if (activePlayer === x) {
        activePlayer = 0;
    } else {
        activePlayer += 1;
    }
    // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('current-2').textContent = 0;
    document.getElementById('current-3').textContent = 0;
    scoreRound = 0;
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-2-panel').classList.remove('active');
    document.querySelector('.player-3-panel').classList.remove('active');
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
}

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlay) {
        score[activePlayer] += scoreRound;
        document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
        if (score[activePlayer] >= winScore) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner';
            gamePlay = false;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-join').addEventListener('click', function() {
    if (gamePlay) {
        if (score.length <= 3) {
            var totalPlayer = score.length;
            score.push(0);
            var playerBlock = document.querySelector('.player-' + totalPlayer + '-panel');
            playerBlock.classList.remove('not-play');
            // console.log(totalPlayer);
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);