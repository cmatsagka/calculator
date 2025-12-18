let a = '';
let b = '';
let operator = '';
let result = '';
let expression = '';

const expressionDiv = document.querySelector('.expression');
const resultDiv = document.querySelector('.result');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => populateDisplay(button))
});

function populateDisplay(button){
    const value = button.textContent;
    addValue(value);
    expressionDiv.textContent += expression;
    resultDiv.textContent += result; 
}

function addValue(value){
    expression += value;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(a, b, operator){
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        }
}


