const aVeryBigSum = (ar) => {
    const sum = ar.reduce((accumulator, value) => accumulator + value, 0);
    return sum;
}

console.log(aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005]));