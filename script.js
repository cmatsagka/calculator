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
let number1;
const btn = document.querySelectorAll('button');

btn.forEach(btn => {
    btn.addEventListener('click', populateDisplay => {
        console.log('Clicked');
        calculation.textContent = btn.textContent;
        number1 = btn.textContent;
        console.log(number1);
    });
});

