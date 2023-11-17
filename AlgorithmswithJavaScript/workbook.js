// function workbook(n, k, arr) {
//     let sumPages = 0;
//     let index = 1;
    
//     for (let i = 0; i < arr.length; i++) {
//         let valorDividido = Math.floor(arr[i] / k);
//         let restanteDivisao = Math.floor(arr[i] % k);
//         let totalCapitulos = valorDividido === 0 ? 1 : parseInt(valorDividido + restanteDivisao);
//         sumPages += totalCapitulos;

//     }

//     return sumPages;
// }

// function povoarPaginas(valorInicial, valorFinal) {
//     var item = [];

//     for(let i = valorInicial; i <= valorFinal; i++) {
//         item.push(i);
//     }

//     pages.push(item);
// }

// console.log(workbook(5, 3, [4, 2, 6, 1, 10]));
// workbook(5,3, [4, 2, 6, 1, 10]);

function workbook(n, k, arr) {
    let indexItens = 1;
    let indexArr = 1;
    let itens = [];
    let sumItensArray = arr.reduce((accumulator, value) => accumulator + value, 0);
    let pages = [];

    for(let i = 1; i <= sumItensArray; i++) {
        

        // if(itens.length != k || indexItens != arr[indexArr]) {
        //     itens.push(i);
        //     indexItens++;
        // } else {
        //     pages.push(itens);
        //     indexItens++;
        //     itens = [];
        // }

    }

    return pages;

}

console.log(workbook(5, 3, [4, 2, 6, 1, 10]));