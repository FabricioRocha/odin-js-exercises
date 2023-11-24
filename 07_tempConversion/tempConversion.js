const convertToCelsius = function(fah) {
  return parseFloat(((fah - 32) * 5 / 9).toFixed(1));
};

const convertToFahrenheit = function(cel) {
  return parseFloat(((cel * 9 / 5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
