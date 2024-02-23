// SOLUÇÃO ENCONTRADA, PORÉM MELHORAR O DESEMPENHO.

function beatifulTriplets(d, arr) {
    let count = 0;
    
    arr.sort((a,b) => a - b);

    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(i != j && j > i) {
                for(let k = 0; k < arr.length; k++) {
                    if(j != k && i != k && k > j) {
                        if(arr[k] - arr[j] === d && arr[j] - arr[i] === d) {
                            count++;
                        }
                    }
                }
            }
        }
    }

    return count;
}

// beatifulTriplets(3, [1,2,4,5,7,8,10])
console.log(beatifulTriplets(3, [1,2,4,5,7,8,10]));


