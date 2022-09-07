function circularArrayRotation(a, k, queries) {
    let contador = 0;
    let new_array = [];

    while (contador < k) {
        let aux = a[a.length - 1];
        for (let i = a.length - 2; i >= 0; i--) {
            a[i + 1] = a[i];
        }
        a[0] = aux;

        contador++;
    }

    for (let i = 0; i < queries.length; i++) {
        var value = queries[i];
        new_array.push(a[value]);
    }

    return new_array;
}

console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2]));

// Código funciona, porém o desempenho não é bom, verificar outra forma de resolver o problema.