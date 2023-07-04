function designerPdfViewer(w, word) {
    let alphabetic = [];
    let arrayWord = [];
    for (let i = 65; i <= 90; i++) {
        var letra = String.fromCharCode(i);
        alphabetic.push(letra.toLowerCase());
    }

    for (let i = 0; i < word.length; i++) {
        arrayWord.push(word[i]);
    }

    for (let index in alphabetic) {
        let item = alphabetic[index];
        
    }

    return arrayWord;
}

console.log(designerPdfViewer([1, 3 ,1 ,3 ,1 ,4 ,1 ,3 ,2 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ], 'abc'));

