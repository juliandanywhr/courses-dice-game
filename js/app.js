var activePlayer, score, scoreRound, player1, player2, winScore;

init();

function init() {
    activePlayer = 0;
    score = [0, 0];
    scoreRound = 0;
    gamePlay = true;
    player1 = prompt('Please enter player 1 name');
    player2 = prompt('Please enter player 2 name');
    winScore = prompt('Add score to win');
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('name-0').textContent = player1;
    document.getElementById('name-1').textContent = player2;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlay) {
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'img/dice-' + dice + '.png';
        scoreRound += dice;
        document.getElementById('current-' + activePlayer).textContent = scoreRound;
        console.log(dice);
        if (dice === 1) {
            nextPlayer();
        }
        console.log('player ' + activePlayer);
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    scoreRound = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlay) {
        score[activePlayer] += scoreRound;
        document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
        document.querySelector('.dice').style.display = 'none';
        if (score[activePlayer] >= winScore) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner';
            gamePlay = false;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);