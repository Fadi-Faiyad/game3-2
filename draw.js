const canvas = document.getElementById("canvas1");
const context = canvas.getContext("2d");
const scoreH = document.getElementById('score');
const tim = document.getElementById('timer');

const CANVAS_WIDTH = canvas.width = 150;
const CANVAS_HEIGHT = canvas.height = 150;

let ballSize = 25;
let placeSide = canvas.width / 2;
let placeTop = canvas.height - 30;
let moveSide = 2;
let moveTop = -2;

let score = 0;
let timeLeft = 10; // Number of seconds before the game ends

function updateScore() {
  scoreH.innerText = `Score: ${score}`;
}

let clickCount = 0;

function clickCounter(x, y) {
  const distance = Math.sqrt((x - placeSide) ** 2 + (y - placeTop) ** 2);
  if (distance < ballSize) {
    clickCount++;
    score += 1;
    timeLeft += 5;
    updateScore();
    scoreH.innerText = `Score: ${score} (Clicks: ${clickCount})`;
    return true;
  } else {
    return false;
  }
}

canvas.addEventListener('click', (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  console.log(clickCounter(x, y));
});

function drawingBall() {
  context.beginPath();
  context.arc(placeSide, placeTop, ballSize, 0, Math.PI * 2);
  context.fillStyle = "red";
  context.fill();
  context.closePath();
}

function moveBall() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawingBall();
  if (placeSide + moveSide > canvas.width - ballSize || placeSide + moveSide < ballSize) {
    moveSide = -moveSide;
  }
  if (placeTop + moveTop > canvas.height - ballSize || placeTop + moveTop < ballSize) {
    moveTop = -moveTop;
  }
  placeSide += moveSide;
  placeTop += moveTop;
}

function updateTimer() {
  timeLeft--;
  tim.innerText = `Time left: ${timeLeft} seconds`;
  
  if (timeLeft === 0) {
    clearInterval(timer);
    canvas.removeEventListener('click', clickHandler);
    clearInterval(ballInterval);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = "30px Arial";
    context.textAlign = "center";
    context.fillText(`Game over! Your score is ${score} (Clicks: ${clickCount})`, canvas.width / 2, canvas.height / 2);
  }
}

function clickHandler(event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  clickCounter(x, y);
}

canvas.addEventListener('click', clickHandler);

const ballInterval = setInterval(moveBall, 19);

// Start the timer
const timer = setInterval(updateTimer, 1000);
updateScore();  // Update the score once at the beginning