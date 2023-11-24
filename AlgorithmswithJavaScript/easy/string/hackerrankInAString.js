function hackerrankInString(s) {
    const hackerrank = 'hackerrank';
    let index = 0;
    let finalWord = "";

    for(let i = 0; i < s.length; i++) {
        if(s[i] === hackerrank[index]) {
            finalWord += s[i];
            index++;
        }
    }

    return finalWord === hackerrank ? "YES" : "NO";
}

console.log(hackerrankInString('hereiamstackerrank'));
console.log(hackerrankInString('hackerworld'));