export class Hsl {
    private hue: number;
    private saturation: number;
    private lightness: number;

    constructor(hue: number, saturation: number, lightness: number) {
        this.hue = hue;
        this.saturation = saturation;
        this.lightness = lightness;
    }

    public toString = (): string => {
        return `hsl(${this.hue},${this.saturation}%,${this.lightness}%`;
    }
}