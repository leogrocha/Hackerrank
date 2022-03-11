const miniMaxSum = (arr) => {
    const sum = arr.reduce((accumulator, value) => accumulator + value, 0);
    
    const bigger = Math.max.apply(null, arr);
    const smaller = Math.min.apply(null, arr);

    console.log(`${sum-bigger} ${sum-smaller}`);
}

miniMaxSum([1,2,3,4,5]);