export function pickRandomItemFromArray(array: Array<any>) {
    return array[Math.floor(Math.random() * array.length)];
}