const palindromes = function (string) {

    
    cleanString = string.replace(/[ ,!.]/g, '');
    lowerString = cleanString.toLowerCase();
    reversedString = lowerString.split('').reverse().join('');
    if (reversedString == lowerString){
        return true;
    }
    else{ 
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
