//const cloud = [0,0,1,0,0,1,0];
const cloud = [0,0,0,0,1,0];


const jumpingOnClouds = () => {
    let count = 0;
    let i = 0;
    while (i < cloud.length-1) {
        if (i + 2 < cloud.length && cloud[i + 2] === 0) {
            i += 2;
        } else {
            i++;
        }
        count++;
    }
    return count;
}

// console.log(jumpingOnClouds([0,0,1,0,0,1,0]));
// console.log(jumpingOnClouds([0,0,0,0,1,0]));
console.log(jumpingOnClouds());

