let operator, number;
let numberA = 0;
let sum = 0;
let numbers = [];
let i = 0;
let j = 0;
let buttonPressed;
const operators = ['+', '-', '*', '/', '^'];
const isOperator = (e) => operators.includes(e);

const container = document.querySelector('.container');
const display = document.querySelector('.display');

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonPressed = button.id;

        if (isOperator(buttonPressed)){
            operator = buttonPressed;
            
            console.log(operator);

            sum = operate(operator, +numberA, sum);
            numberA = '';
        }else{
            numberA += buttonPressed;
            console.log("A = ", +numberA);
        }
        populateDisplay(buttonPressed);
        console.log("sum = ", sum);
    });
});

function populateDisplay(number){
    numbers[i] = number;
    i++;
    display.textContent = numbers.join('');
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
        return divide(numberA, numberB);
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

