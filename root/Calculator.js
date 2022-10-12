function add(number1,number2){
    if((number1 === undefined || typeof number1 !== 'number')||(number2 ===undefined || typeof number2 !== 'number')){
        throw new Error('You must put 2 numbers!')
    }
    return number1+number2;
}

function addMultiple(...args){
    if (args.length<2) {
        throw new Error('You must put at least 2 numbers.')
    }
    else{
        let count = 0;
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] == 'string' ) {
            throw new Error('You can only sum numbers not strings!')
        }
        count+=args[i];
    }return count;
    }     
}

function substract(number1,number2){
    return number1 - number2;
}

function multiplicate(number1,number2){
    return number1*number2;
}

function divide(number1, number2) {
    if (number2 ===0) {
        throw new Error('You cannot divide by 0!')
    }
    return number1/number2;
}

module.exports= {add, substract, multiplicate, divide, addMultiple};