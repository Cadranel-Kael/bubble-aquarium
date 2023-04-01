import { Hsla } from '../../../canvas-framework-23/src/ts/Colors/Hsla';
import {Rgba} from '../../../canvas-framework-23/src/ts/Colors/Rgba';
import {Random} from '../../../canvas-framework-23/src/ts/Helpers/Random';
import {RandomArray} from '../../../canvas-framework-23/src/ts/Helpers/RandomArray';
import {Circle} from '../../../canvas-framework-23/src/ts/shapes/Circle'
import {ICircle} from '../../../canvas-framework-23/src/ts/Types/ICircle';
import {settings} from "./settings";

export class Bubble extends Circle {
    constructor(circle: ICircle) {
        super(circle);
        this.speed = 1 / (this.radius * settings.bubbles.speed + 1);
        this.reset();
    }

    reset() {
        const array = new RandomArray(settings.bubbles.colorsHsl).getRandomValue();
        this.color = new Hsla(array[0], array[1], array[2], new Random(0.5, 1).nextFloat());
        this.position = {x: new Random(0, this.canvas.width).nextInt(), y: new Random(this.canvas.height, this.canvas.height*2).nextInt()};
        this.radius = new Random(settings.bubbles.minRadius, settings.bubbles.maxRadius).nextInt();
        this.direction = new Random(settings.bubbles.minDirection, settings.bubbles.maxDirection).nextFloat();
    }

    collision() {
        this.canvas.canvasElement.addEventListener('mousemove', (e: MouseEvent) => {
            if ((this.position.y + this.radius >= e.offsetY && this.position.y - this.radius <= e.offsetY)
                && (this.position.x + this.radius >= e.offsetX && this.position.x - this.radius <= e.offsetX)) {
                this.color = new Rgba(0,0,0,0);
            }
        });
    }

    update() {
        this.position.y -= this.speed * Math.sin(this.direction);
        this.position.x -= this.speed * Math.cos(this.direction);

        if (this.position.y < -this.radius || this.position.x < -this.radius || (this.position.x - this.radius) > this.canvas.width) {
            this.reset();
        }
    }
}