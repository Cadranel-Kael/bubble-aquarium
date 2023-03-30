import {setBackground} from "./background";

export class Canvas {
    get canvasElement(): HTMLCanvasElement {
        return this._canvasElement;
    }

    set canvasElement(value: HTMLCanvasElement) {
        this._canvasElement = value;
    }
    get ctx(): CanvasRenderingContext2D {
        return this._ctx;
    }

    get width(): number {
        return this._width;
    }
    set width(value: number) {
        this._width = value;
        this._canvasElement.width = value;
    }

    get height(): number {
        return this._height;
    }
    set height(value: number) {
        this._height = value;
        this._canvasElement.height = value;
    }

    private _canvasElement: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _height: number;
    private _width: number;

    constructor(canvasElement: HTMLCanvasElement) {
        this._canvasElement = canvasElement;
        this._ctx = canvasElement.getContext('2d');
        this._width = canvasElement.width;
        this._height = canvasElement.height;
    }
}