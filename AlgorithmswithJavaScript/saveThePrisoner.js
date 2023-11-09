// function saveThePrisoner(numeroPrisioneiros, numeroDoces, cadeiraInicioDistribuicao) {
//     let posicaoFinal = cadeiraInicioDistribuicao;

//     console.log('posição final: ' + posicaoFinal);
    
//     for (let index = 2; index <= numeroDoces; index++) {
//         posicaoFinal = posicaoFinal === numeroPrisioneiros ? 1 : posicaoFinal + 1;
//         console.log('posição final: ' + posicaoFinal);
//     }
    
    
//     return posicaoFinal;
// }

// console.log(saveThePrisoner(5,2,1));
// console.log(saveThePrisoner(4,6,2));

function saveThePrisoner(numeroPrisioneiros, numeroDoces, cadeiraInicioDistribuicao) {
    let posicaoFinal = cadeiraInicioDistribuicao;

    console.log('posição final: ' + posicaoFinal);
    
    for (let index = 2; index <= numeroDoces; index++) {
        posicaoFinal = posicaoFinal === numeroPrisioneiros ? 1 : posicaoFinal + 1;
        console.log('posição final: ' + posicaoFinal);
    }
    
    
    return posicaoFinal;
}