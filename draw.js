const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 150;
const CANVAS_HEIGHT = canvas.height = 150;
var ballSize = 4;
// x
var placeSide = canvas.width / 2;
// y
var placeTop = canvas.height - 30;

var moveSide = 2;
var moveTop = -2;

function drawingBall() {
    ctx.beginPath();
    ctx.arc(placeSide, placeTop, ballSize, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();

}

function moveBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawingBall();
    if (placeSide + moveSide > canvas.width-ballSize || placeSide + moveSide < ballSize){
        moveSide = -moveSide;

    }
    if (placeTop + moveTop > canvas.height-ballSize || placeTop + moveTop < ballSize){
        moveTop = -moveTop;
    }
    placeSide += moveSide;
    placeTop += moveTop;
}
setInterval(moveBall, 19)