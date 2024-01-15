const repeatString = function(string , count) {
   
    if ( count == 0){
        return "";
    }
    if ( count < 0){
        return "ERROR";
    }
    let appendString = string;
    for (let i = 1 ; i < count ; i++){
        string = string.concat(appendString);
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
