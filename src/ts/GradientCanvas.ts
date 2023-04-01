import { Canvas } from "../../../canvas-framework-23/src/ts/Canvas";
import { Hsl } from "../../../canvas-framework-23/src/ts/Colors/Hsl";
import { Rgb } from "../../../canvas-framework-23/src/ts/Colors/Rgb";
import { Dimension } from "../../../canvas-framework-23/src/ts/Types/Dimension";
import { Position } from "../../../canvas-framework-23/src/ts/Types/position";

export class GradientCanvas extends Canvas {
    private colors: Array<Hsl | Rgb>;
    private readonly gradient: CanvasGradient;
    private createdSteps: boolean;

    constructor(canvasElement: HTMLCanvasElement, dimension: Dimension, colors: Array<Hsl|Rgb>, position0: Position, position1: Position) {
        super(canvasElement, dimension);
        this.colors = colors
        this.gradient = this.ctx.createLinearGradient(position0.x, position1.y, position1.x,position1.y);
    }

    createSteps() {
        this.colors.forEach((value, index) => {
            this.gradient.addColorStop(index/this.colors.length, value.toString());
        })
        this.createdSteps = true;
    }

    clear() {
        if (!this.createdSteps) {
            this.createSteps();
        }
        this.ctx.fillStyle = this.gradient;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }
}