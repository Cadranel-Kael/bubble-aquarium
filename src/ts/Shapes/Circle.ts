import {Shape} from "./Shape";
import {Canvas} from "../Canvas";
import {ShapeOptions} from "../Types/ShapeOptions";
import {getRandomInt} from "../utils/getRandomInt";
import {settings} from "../settings";

export class Circle extends Shape {
    protected radius: number;

    constructor(canvas: Canvas, radius: number, options: ShapeOptions) {
        super(canvas, options);
        this.radius = radius;
        this.speed = 1 / (radius * settings.circles.speed + 1);
    }

    draw(): void {
        this.ctx.save();
        this.ctx.fillStyle = `${this.color}`;
        this.ctx.beginPath()
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2*Math.PI);
        this.ctx.fill();
        this.ctx.restore();
    }

    update() {
        this.position.x += this.speed * Math.cos(this.direction);
        this.position.y += this.speed * Math.sin(this.direction);
        if (this.position.x <= -this.radius*2 || this.position.x >= this.canvas.width+this.radius*2 || this.position.y <= -this.radius*2 ) {
            this.position = {x: getRandomInt(this.canvas.width), y: this.canvas.height+this.radius*2};
        }
    }
}