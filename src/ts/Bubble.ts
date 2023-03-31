import { Circle } from "../../../canvas-framework-23/src/ts/shapes/Circle";
import { ICircle } from "../../../canvas-framework-23/src/ts/Types/ICircle";
import {getRandomInt} from "./utils/getRandomInt";

export class Bubble extends Circle {
    constructor(circle: ICircle) {
        super(circle);
    }

    update() {
        this.position.x += this.speed * Math.cos(this.direction);
        this.position.y += this.speed * Math.sin(this.direction);
        if (this.position.x <= -this.radius*2 || this.position.x >= this.canvas.width+this.radius*2 || this.position.y <= -this.radius*2 ) {
            this.position = {x: getRandomInt(this.canvas.width), y: this.canvas.height+this.radius*2};
        }
    }
}