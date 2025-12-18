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
    button.addEventListener('click', () => populateDisplay(button))
});

function populateDisplay(button){
    const value = button.textContent;
    addValue(value);
    console.log('-------------');
    console.log('expression =', expression);
    console.log('firstNumber = ', firstNumber);
    console.log('secondNumber =', secondNumber);
    console.log('operator position ', operatorPosition);
    console.log('result ', result);
    console.log('-------------');

    expressionDiv.textContent = expression;
    resultDiv.textContent = result; 
}

function addValue(value){

    if (value === 'AC'){
        expression = '';
        result = '';
    }else if (value == 'C'){
        expression = expression.slice(0, -1);
    }else if (value === '='){
        result = operate(firstNumber, secondNumber, previousOperator);
        firstNumber = result;
        secondNumber = '';
        operator = '';
        previousOperator = '';
    }else if (isOperator(value)){
        if (isLastCharOperator()){
            expression = expression.slice(0, -1);
            operator = value;
        }
        expression += value;
        operatorPosition = expression.length;
        result = operate(firstNumber, secondNumber, previousOperator);
        previousOperator = operator;
        firstNumber = result;
    }else if (firstNumber && operator){
        expression += value;
        secondNumber = expression.slice(operatorPosition);
        secondNumber = parseFloat(secondNumber);
    }else{
        expression += value;
        firstNumber = parseFloat(expression);
        result = firstNumber;
    }
}

function isLastCharOperator(){
    return isNaN(parseInt(expression.slice(-1)));
}

function isOperator(value){
    return (value == '+' || value == '-' || value == '*' || value == '/');
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


