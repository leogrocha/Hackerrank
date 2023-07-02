const pickingNumbers = (a) => {
    let countRepeatedNumbers = [];
    let count = 0;

    for(let i = 0; i < a.length;i++){
        for(let j = 0; j < a.length; j++){
            if((i != j) && (a[i] >= a[j]) && (a[i] - a[j] <= 1)){
                count++;
            }
        }
        countRepeatedNumbers.push(count+1);
        count = 0;
    }

    const bigger = Math.max.apply(null, countRepeatedNumbers);
    return bigger;
}

console.log(pickingNumbers([4,6,5,3,3,1]));
console.log(pickingNumbers([1,1,2,2,4,4,5,5,5]));