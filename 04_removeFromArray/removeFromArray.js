const removeFromArray = function() {
    let argument = Array.from(arguments);
    let originalArray = argument[0];
    let elementsToDelete = argument.filter(item => item !== originalArray);
    let newArray = originalArray.filter(item => !elementsToDelete.includes(item));
    return newArray
    }

// Do not edit below this line
module.exports = removeFromArray;
