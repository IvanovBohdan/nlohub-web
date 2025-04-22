import { names, surnames, adjectives } from "./dictionaries";

export function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomArrayItem<T>(arr: T[]) {
    return arr[randomInt(0, arr.length - 1)];
}

export function randomString(length: number) {
    let result = "";
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(randomInt(0, charactersLength - 1));
    }
    return result;
}

export function randomBoolean() {
    return Math.random() < 0.5;
}

export function generateRandomUsername() {
    const name = randomArrayItem(names);
    const surname = randomArrayItem(surnames);
    const adjective = randomArrayItem(adjectives);
    const randomNumber = randomInt(1, 9999);
    return `${
        randomBoolean() ? adjective : ""
    }${name}${surname}${randomNumber}`.toLowerCase();
}
