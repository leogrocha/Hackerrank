function migratoryBirds(arr) {

    let array = [];
    let sum = 1;
    
    // ordenando o arr
    arr.sort((a, b) => a - b);

    //[ 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5 ]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i+1]){
            sum++;
        } else {
            array.push({
                id: arr[i],
                qtde_elementos: sum,
            })
            sum = 1;
        }
    }

    for(let j = 0; j < array.length; j++){
        console.log(array[j]);
    }


    return array;
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));


// var funcionario = [
//     { id: 1, nome: 'Teste 1', salario: 1000.00 },
//     { id: 2, nome: 'Teste 2', salario: 2000.00 },
//     { id: 3, nome: 'Teste 3', salario: 3000.00 },
//     { id: 4, nome: 'Teste 4', salario: 4000.00 },
// ]

// console.log(funcionario);

// funcionario.push({
//     id: 5,
//     nome: 'Teste 5',
//     salario: 6000.00
// });
// console.log(funcionario);


