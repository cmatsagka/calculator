let a;
let b;
let operator;

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
const btn = document.querySelectorAll('button');

let number = calculation.textContent;

btn.forEach(btn => {
    btn.addEventListener('click', populateDisplay => {

        let digit = btn.textContent;

        if (Number.isInteger(parseInt(digit))){
            calculation.textContent = number.concat(digit);
            number = calculation.textContent;
        }else{
            a = number;
            number = 0;
            if (digit == '+' || digit == '-' || digit == '*' || digit == '/'){
                operator = digit;
                console.log(operator);
            }
        }
    });
});

