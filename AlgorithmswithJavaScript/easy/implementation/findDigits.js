function findDigits(number) {
    let countNumbers = 0;
    const transformString = [...number.toString()];
    const digits = [];
    transformString.map(value => digits.push(Number(value)));
    digits.map(value => {
        if (number % value === 0) {
            countNumbers++;
        }
    })


    return countNumbers;
}

console.log(findDigits(1012));