let operator, numberA, numberB;
let numbers = [];

function operate(operator, numbers) {
    if (operator === '+'){
        return add(numbers);
    }else if(operator === '-'){
        return subtract(numbers);
    }else if(operator === '*'){
        return multiply(numbers);
    }else if(operator === '/'){
        return divide(numbers);
    }else if(operator === '^'){
        return divide(numbers);
    }
}

function add(arr) {
    return arr.reduce((product, current) => product + current);
};

function subtract(arr) {
    return arr.reduce((product, current) => product - current);
};

function multiply(arr) {
    return arr.reduce((product, current) => product * current);
};

function divide(arr) {
    return arr.reduce((product, current) => product / current);
};

function power(arr) {
    return arr.reduce((product, current) => product ** current);
};

