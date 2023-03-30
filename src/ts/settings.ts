import {Hsl} from "./Colors/Hsl";

export const settings = {
    canvas: {
        // Width of canvas in VW
        width: 0.8,
        // Height of canvas in VH
        height: 0.7,
        firstColor: new Hsl(165, 19, 40),
        secondaryColor: new Hsl(133, 18, 59),
    },
    circles: {
        number: 100,
        minRadius: 10,
        maxRadius: 50,
        colors: [
            new Hsl(201, 20, 23),
            new Hsl(186, 21, 26),
            new Hsl(165, 19, 40),
            new Hsl(133, 18, 59),
            new Hsl(97, 13, 80),],
        speed: 0.005,
    }
}