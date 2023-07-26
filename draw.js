function initGame() {
    var canvas = document.getElementById("canvas1");
    var context = canvas.getContext("2d");
    if (!context) {
        return console.log("failted to get 2d from html");
        ;
    }
    else {
        var scoreElement_1 = document.getElementById('score');
        var tim_1 = document.getElementById('timer');
        var CANVAS_WIDTH = canvas.width = 150;
        var CANVAS_HEIGHT = canvas.height = 150;
        var ballSize_1 = 25;
        var placeSide_1 = canvas.width / 2;
        var placeTop_1 = canvas.height - 30;
        var moveSide_1 = 2;
        var moveTop_1 = -2;
        var currentScore_1 = 0;
        var timeLeft_1 = 10; // Number of seconds before the game ends
        function updateScore(score) {
            scoreElement_1.innerText = "Score: ".concat(score, " (Clicks: ").concat(clickCount_1, ")");
        }
        var clickCount_1 = 0;
        function clickCounter(x, y) {
            var distance = Math.sqrt(Math.pow((x - placeSide_1), 2) + Math.pow((y - placeTop_1), 2));
            if (distance < ballSize_1) {
                clickCount_1++;
                currentScore_1 += 1;
                timeLeft_1 += 5;
                updateScore(currentScore_1); // Using generic function to update the score
                scoreElement_1.innerText = "Score: ".concat(currentScore_1, " (Clicks: ").concat(clickCount_1, ")");
                return true;
            }
            else {
                return false;
            }
        }
        canvas.addEventListener('click', function (event) {
            var rect = canvas.getBoundingClientRect();
            var x = event.clientX - rect.left;
            var y = event.clientY - rect.top;
            console.log(clickCounter(x, y));
        });
        function drawingBall() {
            context.beginPath();
            context.arc(placeSide_1, placeTop_1, ballSize_1, 0, Math.PI * 2);
            context.fillStyle = "red";
            context.fill();
            context.closePath();
        }
        function moveBall() {
            context.clearRect(5, 5, canvas.width, canvas.height);
            drawingBall();
            if (placeSide_1 + moveSide_1 > canvas.width - ballSize_1 || placeSide_1 + moveSide_1 < ballSize_1) {
                moveSide_1 = -moveSide_1;
            }
            if (placeTop_1 + moveTop_1 > canvas.height - ballSize_1 || placeTop_1 + moveTop_1 < ballSize_1) {
                moveTop_1 = -moveTop_1;
            }
            placeSide_1 += moveSide_1;
            placeTop_1 += moveTop_1;
        }
        function updateTimer() {
            timeLeft_1--;
            tim_1.innerText = "Time left: ".concat(timeLeft_1, " seconds");
            if (timeLeft_1 === 0) {
                clearInterval(timer_1);
                canvas.removeEventListener('click', clickHandler);
                clearInterval(ballInterval_1);
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.font = "30px Arial";
                context.textAlign = "center";
                context.fillText("Game over! Your score is ".concat(currentScore_1, " (Clicks: ").concat(clickCount_1, ")"), canvas.width / 2, canvas.height / 2);
            }
        }
        function clickHandler(event) {
            var rect = canvas.getBoundingClientRect();
            var x = event.clientX - rect.left;
            var y = event.clientY - rect.top;
            clickCounter(x, y);
        }
        canvas.addEventListener('click', clickHandler);
        var ballInterval_1 = setInterval(moveBall, 19);
        // Start the timer
        var timer_1 = setInterval(updateTimer, 1000);
        updateScore(currentScore_1); // Update the score once at the beginning using generic function
    }
}
initGame();
