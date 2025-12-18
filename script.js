let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';
let expression = '';
let operatorPosition;
let previousOperator;

const expressionDiv = document.querySelector('.expression');
const resultDiv = document.querySelector('.result');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => doAction(button))
});

function populateDisplay(expression, result){
    // console.log('-------------');
    // console.log('expression =', expression);
    // console.log('firstNumber = ', firstNumber);
    // console.log('secondNumber =', secondNumber);
    // console.log('operator position ', operatorPosition);
    // console.log('result ', result);
    // console.log('-------------');

    expressionDiv.textContent = expression;
    resultDiv.textContent = result; 
}

function doAction(button){
    const value = button.textContent;

    console.log(value);
    switch (true) {
        case !Number.isNaN(parseFloat(value)):
            addValue(value);
            if (result){
                firstNumber = result;
                secondNumber = expression.slice(operatorPosition + 1);
                secondNumber = parseFloat(secondNumber);
                result = operate(firstNumber, secondNumber, operator);
            }else if (operator){
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
            operator = value;
            operatorPosition = expression.length;
            if (expression === '' && result !== '') {
                startFromResult(value);
            } else if (expression !== '' && !isLastCharOperator()){
                addValue(value);
            } else if (expression !== '' && isLastCharOperator()){
                backspace();
                addValue(value);
                result = operate(firstNumber, secondNumber, operator);
            }
            break;
        case (value === '='):
            result = operate(firstNumber, secondNumber, operator);
    }

    populateDisplay(expression, result);
}

function addValue(value){
    expression += value;
}

function startFromResult(value){
    expression += result + value;
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
    return isNaN(parseInt(expression.slice(-1)));
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


