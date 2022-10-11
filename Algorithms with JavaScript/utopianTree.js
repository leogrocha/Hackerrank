function utopiaTree(n) {

    let arrayPeriodos = [];
    let value = 0;
    let bigger = 0;
    // verificar qual o maior valoe dos períodos
    for (let i = 0; i < n.length; i++) {
        if (n[i] > bigger) {
            bigger = n[i];
        }
    }

    for (let i = 0; i < bigger; i++) {
        if (i % 2 == 0) {
            value += 1;
            arrayPeriodos.push(value);
        } else {
            value *= 2;
            arrayPeriodos.push(value);
        }
    }

    console.log(arrayPeriodos);

    

    for(let i = 0; i < n.length; i++) {
        console.log(arrayPeriodos[n[i]]);
    }
}

utopiaTree([2, 0, 1]);