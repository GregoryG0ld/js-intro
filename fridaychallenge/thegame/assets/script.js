let playerScore = 0;
let computerScore = 0;
let timerSeconds;
let roundInterval;

function startGame() {
   playerScore = 0;
   computerScore = 0;
   updateScores();
   startRound();
}

function startRound() {
   timerSeconds = 30;
   updateTimer();

   const square = document.getElementById('square');
   square.style.backgroundColor = getRandomColor();
   moveSquare();

   square.onclick = function () {
      playerScore++;
      updateScores();
   };

   roundInterval = setInterval(function () {
      timerSeconds--;
      updateTimer();

      if (timerSeconds === 0) {
         endRound();
      }
   }, 1000);

   let computerInterval = setInterval(function () {
      computerScore++;
      updateScores();
      moveSquare();
   }, 1000);

   setTimeout(function () {
      clearInterval(roundInterval);
      clearInterval(computerInterval);
      endRound();
   }, 30000);
}

function endRound() {
   square.onclick = null; // Remove the click event listener
   updateScores();

   if (playerScore > computerScore) {
      alert('Player wins!');
   } else if (playerScore < computerScore) {
      alert('Computer wins!');
   } else {
      alert('It\'s a tie!');
   }

   startGame();
}

function moveSquare() {
   const square = document.getElementById('square');
   const maxX = window.innerWidth - 50;
   const maxY = window.innerHeight - 50;

   const newX = Math.floor(Math.random() * maxX);
   const newY = Math.floor(Math.random() * maxY);

   square.style.left = newX + 'px';
   square.style.top = newY + 'px';
   square.style.backgroundColor = getRandomColor();
}

function updateScores() {
   document.getElementById('player-score').innerText = 'Player: ' + playerScore;
   document.getElementById('computer-score').innerText = 'Computer: ' + computerScore;
}

function updateTimer() {
   document.getElementById('timer').innerText = 'Time: ' + timerSeconds + 's';
}

function getRandomColor() {
   const letters = '0123456789ABCDEF';
   let color = '#';
   for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}

