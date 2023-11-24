function camelCase(s) {
    let count = 1;

    for(let index = 0; index < s.length; index++) {
        let letraMaiuscula = s.charCodeAt(index) >= 65 && s.charCodeAt(index) <= 90;
        if(letraMaiuscula) {
            count++;
        }
    }

    return count;
}

console.log(camelCase('saveChangesInTheEditor'));