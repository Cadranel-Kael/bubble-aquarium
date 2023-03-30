import {Canvas} from "./Canvas";
import {Circle} from "./Shapes/Circle";
import {getRandomInt} from "./utils/getRandomInt";
import {settings} from "./settings";
import {pickRandomItemFromArray} from "./utils/pickRandomItemFromArray";
import {getRandomFloat} from "./utils/getRandomFloat";
import {Animate} from "./Animate";
import {Random} from "../../../canvas-framework-23/src/ts/Helpers/Random";

export function createCircle(canvas: Canvas, animation: Animate) {
    const radius = new Random(settings.circles.maxRadius, settings.circles.minRadius).nextInt();
    const circle = new Circle(canvas, radius, {
        color: pickRandomItemFromArray(settings.circles.colors),
        position: {x: new Random(canvas.width).nextInt(), y: new Random(canvas.height*2, canvas.height+radius*2).nextInt()},
        direction: new Random(Math.PI*7/4, Math.PI*5/4).nextFloat(),
    });
    circle.draw();
    animation.addAnimatible(circle);
}