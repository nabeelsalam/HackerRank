function processData(input) {
  let arr = input.split('');
  let stack = [];
  let delimiters = {
    '}': '{',
    ']': '[',
    ')': '('
  };
  console.log('arr', arr);
  arr.forEach((item) => {
    if (stack[stack.length - 1] && delimiters[item] && (stack[stack.length - 1] == delimiters[item])) {
      stack.pop();
    } else {
      stack.push(item);
    }
    console.log('stack', stack);
  })
  if (stack.length == 0) {
    console.log('TRUE')
  } else {
    console.log('FALSE');
  }
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