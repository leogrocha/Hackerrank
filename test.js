function equalizeArray(arr) {
    var count = 0;
    var nums = [];
    
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

    return nums;
}

console.log(equalizeArray([3, 3, 2, 1, 3]));


