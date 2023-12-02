function cavityMap(grid) {
    let nums = [];

    // pegar somente os itens que não estão na borda
    for(let i = 1; i < grid.length -1; i++) {
        let arrString = grid[i].split('');
        for (let j = 1; j < arrString.length-1; j++) {
            nums.push({
                row: i,
                index: j
            })
        }
    }

    for(let i = 0; i < nums.length; i++) {
        let value = Number(grid[nums[i].row].split('')[nums[i].index]);
        let row = nums[i].row;
        let index = nums[i].index;

        let isBigger = value > Number(grid[row - 1].split('')[index]) 
        && value > Number(grid[row + 1].split('')[index])
        && value > Number(grid[row].split('')[index - 1])
        && value > Number(grid[row].split('')[index + 1]);

        console.log("ISBIGGER:" + isBigger);
        console.log("VALUE: " + grid[row][index]);

        if(isBigger) {
            grid[row][index].replace("X");
        }
    }

    // console.log(typeof Number(grid[nums[0].row].split('')[nums[0].index]));
    // console.log(Number(grid[nums[0].row - 1].split('')[nums[0].index]));
    return grid;
}

console.log(cavityMap(['989','191', '111']));
// console.log(cavityMap(['1112','1912', '1892', '1234']));