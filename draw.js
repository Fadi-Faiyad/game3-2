const canvas = document.getElementById("canvas1");
const context = canvas.getContext("2d");
const scoreElem = document.getElementById('score');


const CANVAS_WIDTH = canvas.width = 150;
const CANVAS_HEIGHT = canvas.height = 150;

var ballSize = 5;

var placeSide = canvas.width / 2;

var placeTop = canvas.height - 30;

var moveSide = 2;
var moveTop = -2;



function clickCounter (xmoues, ymoues){
   const distance =
   Math.sqrt(
   ((xmoues - this.placeSide) * (xmoues - this.placeSide))
   +
   ((ymoues - this.placeTop) * (ymoues - this.placeTop))
   )
   if (distance < ballSize){
    return true;
   }else {
    return false;
   }
}

canvas.addEventListener('click', (xmoues, ymoues) =>{
        const distance =
        Math.sqrt(
        ((xmoues - this.placeSide) * (xmoues - this.placeSide))
        +
        ((ymoues - this.placeTop) * (ymoues - this.placeTop))
        )
        if (distance < ballSize){
         return true;
        }else {
         return false;
        }
     
});

function drawingBall() {
    clickCounter();
    context.beginPath();
    context.arc(placeSide, placeTop, ballSize, 0, Math.PI * 2);
    context.fillStyle = "red";
    context.fill();
    context.closePath();

}

function moveBall() {
    context.clearRect(0, 0, canvas.width, canvas.height);
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






canvas.addEventListener('click', (event) =>{
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log(clickCounter(x, y))
})
setInterval(moveBall, 19)