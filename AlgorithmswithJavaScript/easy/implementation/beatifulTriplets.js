// SOLUÇÃO ENCONTRADA, PORÉM MELHORAR O DESEMPENHO.

function beatifulTriplets_old(d, arr) {
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

function beatifulTriplets(d, arr) {
    let count = 0;
    let quantidadeDiferencaEquivalente = 1;
    let triplet = 3;
    let pointer = 0;
    let j = 0;

    arr.sort((a,b) => a - b);
    arr.reverse();

    for(let i = 0; i < arr.length; i++) {
        j = i+1;
        quantidadeDiferencaEquivalente = 1;
        pointer = arr[i];
        while ((quantidadeDiferencaEquivalente < d) && (j < arr.length)) {

            if(pointer - arr[j] === d) {
                pointer = arr[j];

                quantidadeDiferencaEquivalente++;

                if(quantidadeDiferencaEquivalente==triplet) {
                    count++;
                }
            }

            if(pointer - arr[j] > d) break;

            j++;
        }
    }

    return count;
}

// beatifulTriplets(3, [1,2,4,5,7,8,10])
// console.log(beatifulTriplets(3, [1,2,4,5,7,8,10]));
console.log(beatifulTriplets(3, [1,6,7,7,8,10,12,13,14,19]));


