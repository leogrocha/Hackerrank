const simpleArraySum = (ar) => {
    const sum = ar.reduce((accumulator,value) => accumulator+value, 0);
    return sum;
}

console.log(simpleArraySum([10,20,30,40,50]));

