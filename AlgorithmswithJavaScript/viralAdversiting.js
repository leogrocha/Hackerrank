function viralAdversiting(days) {
    let shared = 5;
    let liked = Math.floor(shared / 2);
    let cumulative = Math.floor(shared / 2);
    let index = 2;
    const numberShared = 3;

    while(index <= days) {

        console.log("Day: " + index);
        shared = liked * numberShared;
        console.log(shared);
        liked = Math.floor(shared / 2)
        console.log(liked)
        cumulative += liked

        index++;
    }
    
    return cumulative;
}

console.log(viralAdversiting(3));