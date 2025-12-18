let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';
let expression = '';
let operatorPosition;
let previousOperator;
let isCalculated = false;

const expressionDiv = document.querySelector('.expression');
const resultDiv = document.querySelector('.result');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => doAction(button))
});

function populateDisplay(expression, result){
    expressionDiv.textContent = expression;

    let displayResult = result;
    if (typeof result === 'number' && countDecimals(result) > 6) {
        displayResult = result.toFixed(6);
    }
    resultDiv.textContent = displayResult; 
}

function doAction(button){
    const value = button.textContent;

    if (result === 'Division by 0'){
        clear();
    }

    switch (true) {
        case !Number.isNaN(parseFloat(value)):
            if (isCalculated) {
                clear();
                isCalculated = false;
            }

            addValue(value);

            if (operator){
                secondNumber = expression.slice(operatorPosition + 1);
                secondNumber = parseFloat(secondNumber);
                result = operate(firstNumber, secondNumber, operator);
            }else {
                firstNumber = expression;
                firstNumber = parseFloat(firstNumber);
            }
            break;
        case (value === 'AC'):
            clear();
            break;
        case (value === 'C'):
            backspace();
            break;
        case isOperator(value):
            if (operator && secondNumber !== ''){
                firstNumber = result;
                secondNumber = '';
            }

            isCalculated = false;
            operator = value;
            operatorPosition = expression.length;

            if (expression === '' && result !== '') {
                expression = result + value;
                firstNumber = result;
            } else if (expression !== '' && !isLastCharOperator()){
                addValue(value);
            } else if (expression !== '' && isLastCharOperator()){
                backspace();
                addValue(value);
            }
            break;
        case (value === '='):
            result = operate(firstNumber, secondNumber, operator);
            isCalculated = true;
            break;
        case (value === '.'):
            let currentNumber;
            if (operator) {
                currentNumber = expression.slice(operatorPosition + 1);
            }else{
                currentNumber = expression;
            } 
                
            if (!currentNumber.includes('.')){
                addValue(value);
            }
    }

    populateDisplay(expression, result);
}

function addValue(value){
    expression += value;
}

function clear(){
    expression = '';
    result = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
}

function backspace(){
    expression = expression.slice(0, -1);
}

function isLastCharOperator(){
    return ['+', '-', '*', '/'].includes(expression.slice(-1));
}

function countDecimals(num){
    if (Number.isInteger(num) || typeof num !== 'number') {
        return 0;
    }
    const text = num.toString();
    const parts = text.split('.');
    return parts.length > 1 ? parts[1].length : 0;
}

function isOperator(value){
    return (value === '+' || value === '-' || value === '*' || value === '/');
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
    if (b == 0) {
        return 'Division by 0';
    }else {
        return a / b;
    }
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


