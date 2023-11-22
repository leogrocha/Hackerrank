function permutationEquation(p) {
    const results = [];

    for(let i = 1; i <= p.length; i++) {
        let index = p.findIndex((item) => item == i) + 1;
        let valor = p.findIndex((item) => item == index) + 1;
        results.push(valor);
    }

    return results;
}

console.log(permutationEquation([2,3,1]));
console.log(permutationEquation([5,2,1,3,4]));