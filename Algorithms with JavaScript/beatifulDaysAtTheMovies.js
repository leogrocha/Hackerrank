function beatifulDays(startDay, finalDay, divider) {
    let min = startDay <= finalDay ? startDay : finalDay;
    let max = startDay >= finalDay ? startDay : finalDay;
    var valueInverse = '';
    var countNumbers = 0;
    

    for (let index = min; index <= max; index++) {
        valueInverse = '';
        const array = [...index.toString()];
        const arrayReverse = array.reverse();
        arrayReverse.map(value => valueInverse += value);
        var result = Math.abs(index - Number(valueInverse)) / divider;

        const notation = result.toString().includes("e") || result.toString().includes("E");
        
        if (!result.toString().includes('.') && !notation) {
            countNumbers++;
        }
        
    }

    return countNumbers;
    
}

console.log(beatifulDays(1, 2000000, 1000000000));
console.log(beatifulDays(20, 23, 6));
