import {resize} from "./resize";
import {settings} from "./settings";
import {Canvas} from "./Canvas";
import {setBackground} from "./background";
import {Circle} from "./Shapes/Circle";
import {pickRandomItemFromArray} from "./utils/pickRandomItemFromArray";
import {getRandomInt} from "./utils/getRandomInt";
import {Animate} from "./Animate";
import {getRandomFloat} from "./utils/getRandomFloat";
import {Bubble} from "./Bubble";
import { Random } from "../../../canvas-framework-23/src/ts/Helpers/Random";

const canvas = new Canvas(document.getElementById('my-canvas') as HTMLCanvasElement);
const circles = new Animate(canvas);



function main() {
    resize(canvas, settings.canvas.width, settings.canvas.height);
    window.addEventListener('resize', () => {
        resize(canvas, settings.canvas.width, settings.canvas.height);
    })
    for (let i = 0; i < settings.circles.number; i++) {
        const bubble = new Bubble({
            canvas: canvas,
            color: new ArrayM(),
            position: undefined,
            radius: 0
        })
        createCircle(canvas, circles);
    }
    circles.start();
}

main();