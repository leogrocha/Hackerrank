function workbook(n, k, arr) {
    var pages = [];
    let index = 1;
    
    for (let i = 0; i < arr.length; i++) {
        
        let valorDividido = Math.floor(arr[i] / k);
        let restanteDivisao = Math.floor(arr[i] % k);
        let totalCapitulos = valorDividido === 0 ? 1 : parseInt(valorDividido + restanteDivisao);

        
        
        
    }

    return pages;
    
}

console.log(workbook(5,3, [4, 2, 6, 1, 10]));
// workbook(5,3, [4, 2, 6, 1, 10]);