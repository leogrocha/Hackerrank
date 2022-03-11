const compareTriplets = (a, b) => {
    let countA = 0;
    let countB = 0;
    let result = [];

    for(let i = 0; i < 3; i++){
        if(a[i] > b[i])
            countA++;
        else if (b[i] > a[i])    
            countB++; 
    }

    result.push(countA);
    result.push(countB);

    return result;
}

console.log(compareTriplets([1,2,3],[3,2,1]));



