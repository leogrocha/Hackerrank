function equalizeArray(arr) {

    arr.sort((a, b) => a - b);
    const nums = [];
    let count= 0;
    let index = 0;

    while(index < arr.length) {
        
        let next = arr[index+1];
        if(!next && next === arr[index]) {
            count++;
            index+=2;
        } else {
            nums.push({
                value: arr[index],
                quantity: count
            });

            count = 0;
            index++;
        }

        return nums;

    }
    

    

    
    return arr;
}

console.log(equalizeArray([3, 3, 2, 1, 3]));