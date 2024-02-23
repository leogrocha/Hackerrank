function howManyGames(precoPrimeiroJogo, desconto, custoMinimo, orcamentoInicial) {
    let count = 0;
    let valorGasto = precoPrimeiroJogo;
    let valorReduzido = precoPrimeiroJogo;

    while (valorGasto <= orcamentoInicial) {
        valorReduzido -= desconto;
        if(valorReduzido <= custoMinimo){
            valorReduzido = custoMinimo;
        }

        valorGasto += valorReduzido;
        
        count++;
    }

    return count;
}

console.log(howManyGames(20,3,6,70));
console.log(howManyGames(20,3,6,80));


    