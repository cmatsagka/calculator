let operatorN, numberFirst, numberSecond;
let displayValue;
let keys = [];
let i = 0;
let buttonPressed;

const operators = ['+', '-', '*', '/', '^'];
const isOperator = (e) => operators.includes(e);

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonPressed = button.id;
        console.log(buttonPressed);
        populateDisplay(buttonPressed);
    });
});

displayValue = populateDisplay();

function populateDisplay(key){
    keys[i] = key;
    i++;

    if (isOperator(key)){
        display.textContent += key + ' ';
        displayValue = display.textContent;
    }else if (key === '='){
        display.textContent += ' ' + '=';
        displayValue = +display.textContent;
    }else if (key === 'clear'){
        keys = [];
        i = 0;
        display.textContent = 0;
        displayValue = 0;
    }else if (key === 'x'){
        display.textContent = keys.pop();
        i = i - 2;
        displayValue = +display.textContent;
    }else{
        display.textContent = keys.join('') + ' ';
        displayValue = +display.textContent;
    }
    return displayValue;
}

function operate(operator, numberA, numberB) {
    if (operator === '+'){
        return add(numberA, numberB);
    }else if(operator === '-'){
        return subtract(numberA, numberB);
    }else if(operator === '*'){
        return multiply(numberA, numberB);
    }else if(operator === '/'){
        return divide(numberA, numberB);
    }else if(operator === '^'){
        return power(numberA, numberB);
    }
}

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function power(a, b) {
    return a ** b;
};