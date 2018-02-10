function processData(input) {
  var b = 0;
  input.split(', ').map(Number).forEach((n) => {
    b ^= n;
  });
  console.log(b);
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