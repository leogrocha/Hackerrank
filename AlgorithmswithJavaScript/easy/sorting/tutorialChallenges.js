function introTutorial(V, arr) {
    return arr.findIndex((item) => item == V);
}

console.log(introTutorial(4, [1, 4, 5, 7, 9, 12]));