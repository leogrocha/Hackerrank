function cutTheSticks(arr) {
  var results = [arr.length];
  var index = 0;
  var programaEmExecucao = true;

  arr.sort((a, b) => a - b);

  while (programaEmExecucao) {
    while (index < arr.length) {
      if (arr[index + 1] != undefined && arr[index] != arr[index + 1]) {
        arr.splice(0, index + 1);
        break;
      } else if(arr[index + 1] == undefined) {
          programaEmExecucao = false;
      }

      index++;
    }

    

    index = 0;
    if(programaEmExecucao)
        results.push(arr.length);
  }

  return results;
}

console.log(cutTheSticks([8, 8, 14, 10, 3, 5, 14, 12]));
// console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));

// console.log(cutTheSticks([1, 13, 3, 8, 14, 9, 4, 4]));
