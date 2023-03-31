import {getRandomInt} from "./utils/getRandomInt";
import {settings} from "./settings";
import {Animate} from "./Animate";
import {Random} from "../../../canvas-framework-23/src/ts/Helpers/Random";
import {Circle} from "../../../canvas-framework-23/src/ts/shapes/Circle";
import {Canvas} from "../../../canvas-framework-23/src/ts/Canvas";
import {RandomArray} from "../../../canvas-framework-23/src/ts/Helpers/RandomArray";

// export function createCircle(canvas: Canvas, animation: Animate) {
//     const radius = new Random(settings.circles.maxRadius, settings.circles.minRadius).nextInt();
//     const circle = new Circle({
//         canvas: canvas,
//         radius: radius,
//         color: new RandomArray(settings.circles.colors).getRandomValue(),
//         position: {x: new Random(canvas.width).nextInt(), y: new Random(canvas.height*2, canvas.height+radius*2).nextInt()},
//         direction: new Random(Math.PI*7/4, Math.PI*5/4).nextFloat(),
//     });
//     circle.draw();
//     animation.addAnimatible(circle);
// }

