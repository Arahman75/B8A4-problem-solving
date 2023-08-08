function cubeNumber(number) {
    if (typeof number !== 'number') {
        return 'please provide me a number';
    }
    const cube = number * number * number;
    return cube;
}
