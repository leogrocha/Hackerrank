function pangrams(s) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let finalWord = "";

    let words = s.toLocaleLowerCase().replace(" ", "").split("");

    for(let index = 0; index < alphabet.length; index++) {
        finalWord += words.indexOf(alphabet[index]) == -1 ? "" : alphabet[index];
    }
    
    return finalWord === alphabet ? "pangram" : "not pangram";
    
}

console.log(pangrams("We promptly judged antique ivory buckles for the next prize"));
console.log(pangrams("We promptly judged antique ivory buckles for the prize"));