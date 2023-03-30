export function getRandomFloat(max: number, min: number = 0) {
    return Math.random() * (max - min) + min;
}