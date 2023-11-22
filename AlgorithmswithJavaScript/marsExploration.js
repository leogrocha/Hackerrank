function marsExploration(s) {
  const sos = "SOS";
  let count = 0;
  let strings = [];

  for (let i = 0; i < s.length; i += 3) {
    strings.push(s.slice(i, i + 3));
  }

  for (let i = 0; i < strings.length; i++) {
    count = strings[i][0] != sos[0] ? count + 1 : count;
    count = strings[i][1] != sos[1] ? count + 1 : count;
    count = strings[i][2] != sos[2] ? count + 1 : count;
  }

  return count;
}

// console.log(marsExploration('SOSSPSSQSSOR'));
// console.log(marsExploration('SOSSOSSOS'));
console.log(marsExploration("SOSOOSOSOSOSOSSOSOSOSOSOSOS"));
// console.log(marsExploration('SOSSOT'));
