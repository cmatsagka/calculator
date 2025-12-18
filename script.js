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
    console.log(expression);
    expressionDiv.textContent = expression;
    resultDiv.textContent = result; 
}

function addValue(value){
    if (value === 'AC'){
        expression = '';
        result = '0';
    }else if (value == 'C'){
        expression = expression.slice(0, -1);
    }else if (isOperator(value)){
        console.log(value);
    }else{
        expression += value;
    }
}

function isOperator(value){
    return (value == '=' || value == '+' || value == '-' || value == '*' || value == '/');
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


