
function initGame(): void {
const canvas = document.getElementById("canvas1") as HTMLCanvasElement;
const context = canvas.getContext("2d");
if(!context){
  return console.log("failted to get 2d from html");;
}else { 
const scoreElement = document.getElementById('score') as HTMLElement;
const tim = document.getElementById('timer') as HTMLElement;

const CANVAS_WIDTH = canvas.width = 150;
const CANVAS_HEIGHT = canvas.height = 150;

let ballSize: number = 25;
let placeSide: number = canvas.width / 2;
let placeTop: number = canvas.height - 30;
let moveSide: number = 2;
let moveTop: number = -2;

let currentScore: number = 0;
let timeLeft: number = 10; // Number of seconds before the game ends

function updateScore<T>(score: T): void {
  scoreElement.innerText = `Score: ${score} (Clicks: ${clickCount})`;
}

let clickCount: number = 0;

function clickCounter(x: number, y: number): boolean {
  const distance = Math.sqrt((x - placeSide) ** 2 + (y - placeTop) ** 2);
  if (distance < ballSize) {
    clickCount++;
    currentScore += 1;
    timeLeft += 5;
    updateScore(currentScore); // Using generic function to update the score
    scoreElement.innerText = `Score: ${currentScore} (Clicks: ${clickCount})`;
    return true;
  } else {
    return false;
  }
}

canvas.addEventListener('click', (event: MouseEvent) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  console.log(clickCounter(x, y));
});

function drawingBall(): void {
  context.beginPath();
  context.arc(placeSide, placeTop, ballSize, 0, Math.PI * 2);
  context.fillStyle = "red";
  context.fill();
  context.closePath();
}

function moveBall(): void {
  context.clearRect(5, 5, canvas.width, canvas.height);
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

function updateTimer(): void {
  timeLeft--;
  tim.innerText = `Time left: ${timeLeft} seconds`;

  if (timeLeft === 0) {
    clearInterval(timer);
    canvas.removeEventListener('click', clickHandler);
    clearInterval(ballInterval);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = "30px Arial";
    context.textAlign = "center";
    context.fillText(`Game over! Your score is ${currentScore} (Clicks: ${clickCount})`, canvas.width / 2, canvas.height / 2);
  }
}

function clickHandler(event: MouseEvent): void {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  clickCounter(x, y);
}

canvas.addEventListener('click', clickHandler);

const ballInterval = setInterval(moveBall, 19);

// Start the timer
const timer = setInterval(updateTimer, 1000);
updateScore(currentScore); // Update the score once at the beginning using generic function
}
}
initGame()