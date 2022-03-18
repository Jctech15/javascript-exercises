const fibonacci = function (num) {
  //num = how many times to run the fibonacci sequence
  //(1, 1, 2, 3)
  num = Number(num);
  if (num < 0) {
    return "OOPS";
  }
  if (num === 1 || num === 2) {
    return 1;
  }

  let i = 2;
  let previous = 1;
  let current = 1;
  let sum;

  while (i < num) {
    sum = previous + current;
    previous = current;
    current = sum;
    i++;
  }
  return sum;
};

fibonacci(25);
// Do not edit below this line
module.exports = fibonacci;
