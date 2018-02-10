function findFactorial(input) {
  let factorial = 1;
  for (let i = 1; i <= input; i++) {
    factorial *= i;
  }
  return factorial;
}

function processData(input) {
  let factorial = 0;

  factorial = (input >= 0) ? findFactorial(input) : 1;


  console.log(factorial);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  processData(_input);
});