const convertToCelsius = function(fahrenheit) {
  if(Number.isInteger(((fahrenheit-32) * (5/9)))){
    return ((fahrenheit-32) * (5/9));
  } else {
    return parseFloat(((fahrenheit-32) * (5/9)).toFixed(1))
  }
  
};

const convertToFahrenheit = function(celcius) {
  if(Number.isInteger(((celcius*(9/5)) + 32))){
    return ((celcius*(9/5)) + 32);
  } else {
    return parseFloat(((celcius*(9/5)) + 32).toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
