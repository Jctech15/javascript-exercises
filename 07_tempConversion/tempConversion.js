const ftoc = function (temp) {
  let newTemp = parseFloat(((temp - 32) * (5 / 9)).toFixed(1));

  return newTemp;
};

const ctof = function (temp) {
  let newTemp = parseFloat((temp * (9 / 5) + 32).toFixed(1));

  return newTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};

// [°F] = [°C] × 9⁄5 + 32	[°C] = ([°F] − 32) × 5⁄9
