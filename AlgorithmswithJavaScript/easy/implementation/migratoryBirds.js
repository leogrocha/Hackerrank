function migratoryBirds(arr) {

    let array = [];
    let sum = 1;
    let bigger = 0;

    // ordenando o arr
    arr.sort((a, b) => a - b);

    //[ 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5 ]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i+1]){
            sum++;
        } else {
            array.push({
                id: arr[i],
                qtde_elementos: sum,
            })
            sum = 1;
        }
    }

    for(let j = 0; j < array.length; j++){
        if(array[j].qtde_elementos > bigger){
            bigger = array[j].qtde_elementos;
        }
    }

    const bigger_element = array.filter(num => num.qtde_elementos == bigger);
    
    return bigger_element[0].id;
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
console.log(migratoryBirds([1,4,4,4,5,3]));



