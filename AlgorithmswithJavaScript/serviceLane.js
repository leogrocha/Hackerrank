function serviceLane(n, cases, width) {
    var results = [];
    var nums = []; 
    

    for (let i = 0; i < cases.length; i++) {
        nums = [];

        for (let j = cases[i][0]; j <= cases[i][1]; j++) {
            nums.push(width[j]);
        }

        results.push(Math.min(...nums));
    }

    return results;
}

console.log(serviceLane(8, [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]], [2, 3, 1, 2, 3, 2, 3, 3]));