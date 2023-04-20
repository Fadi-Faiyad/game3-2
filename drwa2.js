class Cricle {
    constructor(xpoint, ypoint, radius, color) {
        this.xpoint = xpoint;
        this.ypoint = ypoint;
        this.radius = radius;
        this.color = color;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.xpoint, this.ypoint, this.radius, 0, Math.PI * 2);
        context.fillStyle = "red";
        context.fill();
        context.closePath();
    }
}
let cricle= new Cricle(200, 200, 100, 'red')
cricle.draw(context)