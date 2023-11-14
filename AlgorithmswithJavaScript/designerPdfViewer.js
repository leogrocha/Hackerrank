function designerPdfViewer(h, word) {
    const quantidadeCartas = word.length;
    var alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var maiorValor = 0;

    for(let index = 0; index < word.length; index++) {
        let posicaoAlfabeto = alfabeto.findIndex((item) => item == word[index]);
        let item = h[posicaoAlfabeto];
        maiorValor = item > maiorValor ? item : maiorValor;
    }

    return quantidadeCartas * maiorValor;
}

console.log(designerPdfViewer([1,3,1 ,3 ,1 ,4 ,1 ,3 ,2 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,7], 'zaba'));