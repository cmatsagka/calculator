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

function populateDisplay(){
    
}

const calculation = document.querySelector('.calculation');
const result = document.querySelector('.result');
const buttons = document.querySelectorAll('button');
calculation.textContent = '';

let display = calculation.textContent;
let firstNumber = false;

buttons.forEach(button =>
    button.addEventListener('click', populateDisplay)
    
);


/* 
buttons.forEach(button => {
    button.addEventListener('click', () => {

        let digit = button.textContent;

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
});
 */
