function repeatedString(s, n) {
    const qtdeItensPercorrer = Math.abs(n - s.length);

    // var itens = [];
    // let count = 0;

    // let index = 0;

    // for(let i = 0; i < n; i++) {
    //     if(s[i] != undefined) {
    //         itens.push(s[i]);
    //     } else {
    //         itens.push(s[index]);
    //         index = index + 1 == s.length ? 0 : index + 1;
    //     }
    // }

    // itens.map((value) => {
    //     if(value == 'a') {
    //         count++;
    //     }
    // })

    return qtdeItensPercorrer;
}

// console.log(repeatedString('aba', 10));
console.log(repeatedString('a', 1000000000000));