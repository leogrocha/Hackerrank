function equalizeArray(arr) {
  var nums = [];
  var itensRemovidos = 0;
  var valorMaiorQuantidade = 0;
  var count = 0;
  
  arr.sort((a, b) => a - b);

  for (let index = 0; index < arr.length; index++) {
    if(arr[index+1] != undefined && arr[index] == arr[index+1]) {
        count++;
    } else {
        count++;
        nums.push({
            value: arr[index],
            quantity: count
        })

        count = 0;
    }
    
}

  const itemMaiorQuantidade = () => {
    nums.map((item) =>  valorMaiorQuantidade = Math.max(item.quantity, valorMaiorQuantidade));
    return nums.find((item) => item.quantity == valorMaiorQuantidade).value;
  }

  var valorEquilibrio = itemMaiorQuantidade();

  arr.map((value) => {
    if(value != valorEquilibrio) {
        itensRemovidos++;
    }
  })


  return itensRemovidos;
}

console.log(equalizeArray([3, 3, 2, 1, 3]));
