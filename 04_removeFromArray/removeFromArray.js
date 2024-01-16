const removeFromArray = function(array) {
    
    let len = array.length;
    let argCount = arguments.length;
    
    
    for(let y = 1; y < argCount ; y++){
        for (let i = 0 ; i < len ; i++){
            if ( array[i] === arguments[y] ){
                array.splice(i, 1);
            }
        }

    }

   
    
    return array;
     
};

// Do not edit below this line
module.exports = removeFromArray;
