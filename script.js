let a = 0;
let b = 0;
let operator;
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

const calculation = document.querySelector('.calculation');
const result = document.querySelector('.result');
const btn = document.querySelectorAll('button');
calculation.textContent = '';

let display = calculation.textContent;
let firstNumber = false;

btn.forEach(btn => {
    btn.addEventListener('click', populateDisplay => {

        let digit = btn.textContent;

        if (Number.isInteger(parseInt(digit)) && !firstNumber){

            display += digit;
            calculation.textContent = display;
            a += digit;

            result.textContent = sum;
        }else if (Number.isInteger(parseInt(digit)) && firstNumber){
            console.log('sum b: ', sum);
            display += digit;
            calculation.textContent = display;
            b += digit;

        }else{
            firstNumber = true;

            if (digit == '+' || digit == '-' || digit == '*' || digit == '/'){
                console.log('sum op: ', sum);
                operator = digit;
                display += digit;
                calculation.textContent = display;

            }else if (digit == '='){
                sum = operate(+a, +b, operator);
                console.log('sum = ', sum);
                display = ' = ' + sum;
                result.textContent = display;
                display = '';
                firstNumber = false;
                sum = 0;
            }
        }
    });
});

