const convertToCelsius = function(tempF) { 
    let tempToC =(tempF - 32)*(5/9) ;
    return parseFloat(tempToC.toFixed(1)) ;
};

const convertToFahrenheit = function(tempC) {
  
  let tempToF = (tempC * (9/5)) + 32 ;
  return parseFloat(tempToF.toFixed(1)) ;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
