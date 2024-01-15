const reverseString = function(string) {
    let len = string.length-1;
    let temp = "";

    while (  0 <= len ){
       temp = temp.concat(string[len]);
       len--;
    }

    return temp;
}
    

// Do not edit below this line
module.exports = reverseString;
