function workbook(n, k, arr) {
    var pages = [];
    var itens = [];
    let index = 1;
    
    for (let i = 0; i < arr.length; i++) {
        
        let valorDividido = Math.floor(arr[i] / k);
        let restanteDivisao = Math.floor(arr[i] % k);
        let totalCapitulos = valorDividido === 0 ? 1 : parseInt(valorDividido + restanteDivisao);
        
        let count = 0;
        
        while(count < arr[i]) {
            if(itens.length + 1 <= k) {
                itens.push(index);
                index++;
                count++;
            } else {
                pages.push(itens);
                itens = [];
                itens.push(index);
                index++;
                count++;
            }

        }

        itens = [];
    }

    return pages;
    
}

console.log(workbook(5,3, [4, 2, 6, 1, 10]));
// workbook(5,3, [4, 2, 6, 1, 10]);