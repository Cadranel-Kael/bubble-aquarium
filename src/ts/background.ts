import {Canvas} from "./Canvas";
import {settings} from "./settings";


export function setBackground(canvas: Canvas) {
    const gradient = canvas.ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, settings.canvas.firstColor.toString());
    gradient.addColorStop(1, settings.canvas.secondaryColor.toString());
    canvas.ctx.fillStyle = gradient;
    canvas.ctx.fillRect(0, 0, canvas.width, canvas.height)
}

