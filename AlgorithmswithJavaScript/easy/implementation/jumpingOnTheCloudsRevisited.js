function jumpingOnTheClouds(c, k) {
    const tempestade = 1;
    var score = 100;
    var chegouPrimeiraNuvem = false;
    var index = 0;
    
    while(!chegouPrimeiraNuvem) {
        if((index + k) % c.length == 0)
            chegouPrimeiraNuvem = true;

        c[(index + k) % c.length] === tempestade ? score -= 2+1 : score -= 1;
        index+=k;
    }

    return score;
}

console.log(jumpingOnTheClouds([0, 0, 1, 0, 0, 1, 1, 0], 2));
// console.log(jumpingOnTheClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3));