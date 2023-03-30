import {resize} from "./resize";
import {settings} from "./settings";
import {Canvas} from "./Canvas";
import {setBackground} from "./background";
import {Circle} from "./Shapes/Circle";
import {pickRandomItemFromArray} from "./utils/pickRandomItemFromArray";
import {getRandomInt} from "./utils/getRandomInt";
import {Animate} from "./Animate";
import {getRandomFloat} from "./utils/getRandomFloat";
import {createCircle} from "./createCircle";

const canvas = new Canvas(document.getElementById('my-canvas') as HTMLCanvasElement);
const circles = new Animate(canvas);

function main() {
    resize(canvas, settings.canvas.width, settings.canvas.height);
    window.addEventListener('resize', () => {
        resize(canvas, settings.canvas.width, settings.canvas.height);
    })
    for (let i = 0; i < settings.circles.number; i++) {
        createCircle(canvas, circles);
    }
    circles.start();
}

main();