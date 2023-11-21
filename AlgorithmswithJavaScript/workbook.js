function workbook(n, k, arr) {
    let pages = [];
    let itens = [];
    let count = 0;

    for(let i = 0; i < arr.length; i++) {
        
        itens = [];
        
        for(let j = 1; j <= arr[i]; j++) {
            if(itens.length + 1 <= k) {
                itens.push(j);
            } else {
                pages.push(itens);
                itens = [];
                itens.push(j);

            } 
        }       

        if(itens.length > 0) {
            pages.push(itens);
        }

    }

    for (let i = 0; i < pages.length; i++) {
        let existeValorIgualPagina = pages[i].some((value) => value === i+1);
        console.log("VALOR IGUAL: ", existeValorIgualPagina)
        existeValorIgualPagina ? count++ : count;
    }


    return count;
    

}

console.log(workbook(5, 3, [4, 2, 6, 1, 10]));