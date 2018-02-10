function processData(input) {
  let index = input.split('\n')[0];
  let arr = input.split('\n')[1].split(' ')
  arr[arr.length - index] ? console.log(arr[arr.length - index]) : console.log(NULL);
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