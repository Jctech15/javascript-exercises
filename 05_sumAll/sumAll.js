const sumAll = function (startNum, endNum) {
  if (!Number.isInteger(startNum) || !Number.isInteger(endNum)) {
    return "ERROR";
  } else {
    if (startNum < 0 || endNum < 0) {
      return "ERROR";
    }
  }

  let sum = 0;
  if (startNum > endNum) {
    for (let i = startNum; i >= endNum; i--) {
      sum += i;
    }
  } else {
    for (let i = startNum; i <= endNum; i++) {
      sum += i;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
