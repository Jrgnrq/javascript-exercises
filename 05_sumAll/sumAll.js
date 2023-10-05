const sumAll = function(a, b) {
    let argumentsSort = [a, b].sort(function(a, b) {
        return a - b
    })
    let sumaAB = 0
    if ((isNaN(argumentsSort[0]) || isNaN(argumentsSort[1]))||((argumentsSort[0] < 0 ) || (argumentsSort[1] < 0)) || (typeof argumentsSort[0] === 'string')||(typeof argumentsSort[1] === 'string')){  
        sumaAB = 'ERROR'

    } 
    else{
        for (let i = argumentsSort[0]; i <= argumentsSort[1]; i++) {
            sumaAB += i  
    }    
    }
    return sumaAB;
};

// Do not edit below this line
module.exports = sumAll;
