function calculator(num1, num2, operator){
    if(operator === '+'){
        let result = num1+num2;
        return result;
    }
    else if(operator === '-'){
        let result = num1-num2;
        return result;
    }
    else if(operator === '*'){
        let result = num1*num2;
        return result;
    }
    else if(operator === '/'){
        if(num2===0){
            let result = 'Invalid';
            return result;
        }
        else{
            let result = num1/num2;
            return result;
        }
        return result;
    }
    return 'Invalid';
}

let result = calculator(3, 0, '*');
console.log(result)



//Validation
function multiply(num1,num2){
    if(typeof num1,num2==='number'){
        let result = num1*num2;
        return result;
    }
    else{
        return 'jhamela ase type e'
    }
}

let result_validation = multiply(7 , 'seven');
console.log(result_validation) 