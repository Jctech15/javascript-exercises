const palindromes = function (string) {
  string = string.replace(/[^A-Za-z0–9]/g, "").toLowerCase();
  const newStr = string
    .split("")
    .reverse()
    .join("")
    .replace(/[^A-Za-z0–9]/g, "");
  console.log(string.split("").reverse().join(""));
  console.log(string, newStr);
  return string === newStr;
};

// Do not edit below this line
module.exports = palindromes;
