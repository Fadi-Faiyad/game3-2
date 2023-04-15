const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

function drawing (){
    ctx.beginPath();
    ctx.arc(50, 50, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
setInterval(drawing, 10)