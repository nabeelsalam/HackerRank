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


function processData(input) {

  let result = {};

  let arr = input.split('\n');
  arr.map((item) => {
    result[item] = 0;
  });
  let stopIndex = arr.length;
  let biggest = Math.max(...arr);

  let fib = fibGen();
  let res = 0;
  if (result['' + 0] != undefined) {
    result['' + 0] = res;
  }
  for (let i = 1; i <= biggest; i++) {
    res = fib.next().value;
    if (result['' + i] != undefined) {
      result['' + i] = res;
    }
  }
  if (result['' + biggest] != undefined) {
    result['' + biggest] = res;
  }

  arr.forEach((item) => {
    console.log(result[item]);
  })
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