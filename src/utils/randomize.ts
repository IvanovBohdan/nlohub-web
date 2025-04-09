export function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomUsername() {
    const names = [
        "alex",
        "jordan",
        "casey",
        "morgan",
        "taylor",
        "jamie",
        "drew",
        "riley",
        "quinn",
        "devon",
    ];

    const surnames = [
        "smith",
        "johnson",
        "williams",
        "brown",
        "jones",
        "miller",
        "davis",
        "garcia",
        "rodriguez",
        "martinez",
    ];

    return (
        names[randomInt(0, names.length - 1)] +
        surnames[randomInt(0, names.length - 1)] +
        randomInt(0, 999)
    );
}
