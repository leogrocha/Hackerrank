function utopiaTree(n) {

    
    let value = 0;

    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            value += 1;
        } else {
            value *= 2;
        }
    }

    return value;
}

console.log(utopiaTree(4));


