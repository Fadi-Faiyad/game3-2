let score = 0;
let timeLeft = 10; // Number of seconds before the game ends

// Function to update the timer
function updateTimer() {
  timeLeft--;
  console.log(`Time left: ${timeLeft} seconds`);
  
  // Check if time has run out
  if (timeLeft === 0) {
    console.log(`Game over! Your score is ${score}`);
    clearInterval(timer);
  }
}

// Start the timer
const timer = setInterval(updateTimer, 1000); // Update the timer every second

// Function to handle the ball click event
function ballClickHandler() {
  score += 1;
  timeLeft += 5;
  console.log(`You clicked the ball! Your score is now ${score}`);
}

// Add a click event listener to the ball
const ball = document.querySelector('#ball'); // Replace with your ball selector
ball.addEventListener('click', ballClickHandler);