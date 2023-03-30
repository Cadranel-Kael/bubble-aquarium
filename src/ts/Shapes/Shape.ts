import {IPosition} from "../Types/IPosition";
import {Hsl} from "../Colors/Hsl";
import {Canvas} from "../Canvas";
import {ShapeOptions} from "../Types/ShapeOptions";
import {Rgb} from "../Colors/Rgb";

export abstract class Shape {
    get canvas(): Canvas {
        return this._canvas;
    }
    protected ctx: CanvasRenderingContext2D;
    protected position: IPosition;
    protected speed: number;
    protected direction: number;
    protected color: Hsl | Rgb;
    private _canvas: Canvas;

    protected constructor(canvas: Canvas, options?: ShapeOptions) {
        if (canvas === undefined) {
            throw Error('Value error undefined HTMLCanvasElement in Shape');
        }
        this._canvas = canvas;
        this.ctx = canvas.ctx;
        if (options.position !== undefined) {
            if (options.position.x >= 0 && options.position.y >= 0) {
                this.position = options.position;
            } else {
                this.position = {x:0, y:0};
            }
        } else {
            this.position = {x:0, y:0};
        }
        this.color = options.color !== undefined ? options.color : new Rgb(0,0,0);
        this.speed = options.speed > 0 ? options.speed : 1;
        this.direction = options.direction >= 0 ? options.direction : Math.random() * Math.PI * 2;
    }
}


