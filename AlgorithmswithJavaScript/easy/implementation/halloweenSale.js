// p -> o preço do primeiro jogo
// d -> o desconto do preço do jogo anterior.
// m -> o custo mínimo de um jogo.
// s -> o orçamento inicial.

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


    