const repeatString = function (str, number) {
  let updatedStr = "";
  if (number < 0) {
    return "ERROR";
  } else {
    for (let i = 1; i <= number; i++) {
      updatedStr += str;
    }
  }

  return updatedStr;
  // - Take note of the above function call- how exactly is it being called?

  // - You're going to want to use a loop for this one.

  // - Create a variable to hold the string you're going to return, create a loop that repeats the given number of times and add the given string to the result on each loop.

  // - If running `npm test repeatString.spec.js` returns results similar to the below, make sure you have enabled the rest of the tests, as described in the instructions above.
};

// Do not edit below this line
module.exports = repeatString;
