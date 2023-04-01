import {Canvas} from '../../../canvas-framework-23/src/ts/Canvas'
import {RandomArray} from '../../../canvas-framework-23/src/ts/Helpers/RandomArray'
import {Random} from '../../../canvas-framework-23/src/ts/Helpers/Random'
import {Mouse} from '../../../canvas-framework-23/src/ts/UserControls/Mouse'
import {settings} from "./settings";
import {Bubble} from "./Bubble";
import {Animate} from  '../../../canvas-framework-23/src/ts/Animate'
import { Rgb } from '../../../canvas-framework-23/src/ts/Colors/Rgb';
import {GradientCanvas} from "./GradientCanvas";
import { Hsla } from '../../../canvas-framework-23/src/ts/Colors/Hsla';

const width = settings.canvas.width * window.innerWidth;
const height = settings.canvas.height * window.innerHeight;

const canvas = new GradientCanvas(document.getElementById('my-canvas') as HTMLCanvasElement,
    {width: width, height: height}, settings.canvas.bgColors, {x:0,y:0}, {x:width, y:height});
const animation = new Animate(canvas);


function drawCanvasBackground() {
    canvas.width = settings.canvas.width * window.innerWidth;
    canvas.height = settings.canvas.height * window.innerHeight;
    canvas.clear();
}

for (let i = 0; i < settings.bubbles.number; i++) {
    const bubble = new Bubble({canvas: canvas, color: undefined, position: {x: 0, y:0}, radius: 0});
    bubble.collision();
    animation.registerForAnimation(bubble);
}

const mouse = new Mouse({
    canvas: canvas,
    radius: 3,
    color: new Rgb(250, 0, 0),
})

animation.registerForAnimation(mouse);



function addEventListeners() {
    window.addEventListener('resize', () => {
        drawCanvasBackground();
    })
}

function main() {
    drawCanvasBackground();
    addEventListeners();
    animation.start();
}

main();