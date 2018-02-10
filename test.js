function* fibGen() {
  let prev = 0;
  let val = 1;
  let temp = 0;
  yield 0;
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
  for (let i = 1; i < index; i++) {
    res = fib.next().value;
  }
  return res;
}

console.log(main(4));