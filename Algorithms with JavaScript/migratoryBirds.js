function migratoryBirds(arr) {

    let array = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i != j && arr[i] === arr[j]) {
                array.push(arr[i]);
            }
        }
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


