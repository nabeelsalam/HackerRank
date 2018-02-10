function* fibGen() {
  let prev = 0;
  let val = 1;
  let temp = 0;
  yield 1;
  while (1) {
    temp = val;
    val += prev;
    prev = temp;
    yield val;
  }
}

function main(index) {
  let fib = fibGen();
  let res = 0;
  for (let i = 0; i < index; i++) {
    res = fib.next().value;
  }
  return res;
}

function processData(input) {
  console.log(main(input));
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