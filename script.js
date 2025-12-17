let a = '';
let b = '';
let operator = '';
let sum = 0;

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

function populateDisplay(button){
    const value = button.textContent;
    let numA = 0;
    let numB = 0;

    if (value == 'AC') {
        buttonsClicked = [];
        calculation.textContent = '0';
        firstNumber = '';
    }else if (value == '+' || value == '-' || value == '*' || value == '/'){
        operator = value;
        buttonsClicked.push(value);
        calculation.textContent = buttonsClicked.join('');
        buttonsClicked = [];

    }else if (operator){
        buttonsClicked.push(value);
        secondNumber = buttonsClicked.join('');
        calculation.textContent = secondNumber;
        console.log('second number', secondNumber);
        
        numA = parseFloat(firstNumber);
        numB = parseFloat(secondNumber);
        sum = operate(numA, numB, operator);

    }else{
        buttonsClicked.push(value);
        firstNumber = buttonsClicked.join('');
        calculation.textContent = firstNumber;
        console.log('first number', firstNumber);

    } 
}

const calculation = document.querySelector('.calculation');
const result = document.querySelector('.result');
const buttons = document.querySelectorAll('button');

let buttonsClicked = [];
let firstNumber;
let secondNumber;

calculation.textContent = '0';

buttons.forEach(button =>
    button.addEventListener('click', () => populateDisplay(button))
);


/* 

        if (Number.isInteger(parseInt(value)) && !firstNumber){

            display += value;
            calculation.textContent = display;
            a += value;

            result.textContent = sum;
        }else if (Number.isInteger(parseInt(value)) && firstNumber){
            console.log('sum b: ', sum);
            display += value;
            calculation.textContent = display;
            b += value;

        }else{
            firstNumber = true;

            if (value == '+' || value == '-' || value == '*' || value == '/'){
                console.log('sum op: ', sum);
                operator = value;
                display += value;
                calculation.textContent = display;

            }else if (value == '='){
                const numA = parseFloat(a);
                const numB = parseFloat(b);

                sum = operate(numA, numB, operator);

                a = '';
                b = '';
                operator = '';
                firstNumber = false;
                console.log('sum = ', sum);
                display = ' = ' + sum;
                result.textContent = display;
                display = '';
                sum = 0;
            }
        }
    });

 */
