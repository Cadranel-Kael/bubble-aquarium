import {Canvas} from "../Canvas";
import {Hsl} from "../Colors/Hsl";
import {Rgb} from "../Colors/Rgb";
import {IPosition} from "./IPosition";

export interface IMouse {
    position: IPosition,
    color: Hsl|Rgb,
}