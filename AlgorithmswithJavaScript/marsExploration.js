function marsExploration(s) {
    const sos = "SOS";
    const palavraFormatada = s.replaceAll(sos, "");

    console.log(palavraFormatada);

    return palavraFormatada.length / sos.length;
}

// console.log(marsExploration('SOSSPSSQSSOR'));
// console.log(marsExploration('SOSSOSSOS'));
console.log(marsExploration('SOSOOSOSOSOSOSSOSOSOSOSOSOS'));

