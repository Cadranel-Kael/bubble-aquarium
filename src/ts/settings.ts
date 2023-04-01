import { Hsl } from '../../../canvas-framework-23/src/ts/Colors/Hsl'
import {Hsla} from '../../../canvas-framework-23/src/ts/Colors/Hsla'

export const settings = {
    canvas: {
        width: 0.8,
        height: 0.6,
        bgColors: [
            new Hsl(165, 19, 40),
            new Hsl(133, 18, 59)
        ],
    },
    bubbles: {
        number: 200,
        colorsHsl: [
            [201, 20, 23],
            [186, 21, 26],
            [165, 19, 40],
            [133, 18, 59],
            [97, 13, 80],
        ],
        minRadius: 5,
        maxRadius: 30,
        speed: 0.01,
        minDirection: Math.PI * 1/6,
        maxDirection: Math.PI * 5/6,
    }
}