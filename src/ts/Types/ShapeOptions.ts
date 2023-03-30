import {Hsl} from "../Colors/Hsl";
import {IPosition} from "./IPosition";
import {Rgb} from "../Colors/Rgb";

export interface ShapeOptions {
    position?: IPosition,
    color?: Hsl | Rgb,
    speed?: number,
    direction?: number
}