var pages = [
    {
        page: 1,
        capitulo: 1,
        indices: [1,2,3]
    },
    {
        page: 2,
        capitulo: 1,
        indices: [4]
    }
]

const capituloDesejado = 1;


const quantidadeIndexsCapitulo = pages.filter((item) => item.capitulo === capituloDesejado)
    .reduce((accumulator, value) => accumulator + value.indices.length, 0);

console.log(quantidadeIndexsCapitulo);

