import {Canvas} from "./Canvas";

export function resize(canvas: Canvas, vWidth: number, vHeight: number) {
    canvas.width = window.innerWidth * vWidth;
    canvas.height = window.innerHeight * vHeight;
}