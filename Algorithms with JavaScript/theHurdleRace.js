const hurdleRace = (k, height) => {
    let max = Math.max(...height);
    if(max > k)
        return max - k;
    else
        return 0;
}

console.log(hurdleRace(4, [1,6,3,5,2]));
console.log(hurdleRace(7, [2,5,4,5,2]));

