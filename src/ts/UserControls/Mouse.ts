import {Circle} from "../shapes/Circle";
import {IMouse} from "../Types/IMouse";
import {Canvas} from "../Canvas";

export class Mouse extends Circle {
    constructor(canvas: Canvas, radius: number, mouse: IMouse) {
        super(canvas, radius, {
            position: {x: 0, y: 0},
            color: mouse.color,
        });
        this.canvas.canvasElement.addEventListener('mousemove', (event: MouseEvent) => {
            this.position.x = event.x;
            this.position.y = event.y;
        });
    }

    update() {
    }
}