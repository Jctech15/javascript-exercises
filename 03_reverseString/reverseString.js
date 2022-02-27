const reverseString = function (str) {
  // split it into something else first.. do the reversal and then join it back together into a string.
  if (str === "") {
    return "";
  }
  let strSplit = str.split("").reverse().join("");
  return strSplit;
  //   let newStr = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     newStr += str[i];
  //   }
  //   return newStr;
};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
