const sos = "SOS";
let message = "SOSOOSOSOSOSOSSOSOSOSOSOSOS";
var strings = [];

for(let i = 0; i < message.length; i+=3) {
    strings.push(message.slice(i, i+3));
}

console.log(strings);

let count = 0;

for(let i = 0; i < strings.length; i++) {
    count = strings[i][0] != sos[0] ? count + 1 : count;
    count = strings[i][1] != sos[1] ? count + 1 : count;
    count = strings[i][2] != sos[2] ? count + 1 : count;
}

console.log("COUNT: ", count);