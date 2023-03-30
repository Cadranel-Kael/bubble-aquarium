import {Canvas} from "./Canvas";
import {Animatable} from "./Types/Animatable";
import {setBackground} from "./background";

export class Animate {
    private canvas: Canvas;
    private animatibles: Array<Animatable>;

    constructor(canvas: Canvas) {
        this.canvas = canvas;
        this.animatibles = [];
    }

    addAnimatible(animatible: Animatable) {
        this.animatibles.push(animatible);
    }

    clear():void {
        setBackground(this.canvas);
    }

    /*
    * @returns: void,
    *   updates the position of the objet,
    *   redraws object with new information,
    *   repeats 60fps
    * */
    start(): void {
        this.clear();
        this.animatibles.forEach((animatable)=> {
            animatable.update();
            animatable.draw();
        })
        requestAnimationFrame(this.start.bind(this));
    }
}