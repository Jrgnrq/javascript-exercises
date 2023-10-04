const repeatString = function(stringReapet, n) {
    if (n < 0){
        return "ERROR";
    }
    else{
        let stringRepeated = stringReapet.repeat(n);
        return stringRepeated; 
    }
}
let stringReapet = "hey"; 
// const number = 3; //
// const number = 1; //
// const number = 0; //
// const number = -1; //
// const numberRandom = Math.floor(Math.random() * 1000); //
// Do not edit below this line
module.exports = repeatString;
