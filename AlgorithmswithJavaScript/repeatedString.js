function repeatedString(s, n) {

    if(s.length == 1 && s === 'a') {
        return n;
    }

    const quantidadeItensLetraA = s.split('').filter((item) => item == 'a').length;
    if(quantidadeItensLetraA === 0) {
        return 0;
    }

    const divisor = Math.floor(n / s.length);
    const restante = n % s.length;
    const multplicacaoItens = divisor * quantidadeItensLetraA;
    var nums = [];
    var index = 0;

    while(nums.length != restante) {
        nums.push(s[index]);
        index = index === s.length ? 0 : index + 1;
    }

    console.log(nums);

    const quantidadeRestante = nums.filter((item) => item == 'a').length;

    return multplicacaoItens + quantidadeRestante;   
}

// console.log(repeatedString('aba', 10));
// console.log(repeatedString('a', 20));
console.log(repeatedString('a', 1000000000000));

console.log(repeatedString('kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm', 736778906400));
