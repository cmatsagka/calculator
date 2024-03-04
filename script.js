let operatorN, numberFirst, numberSecond;
let displayValue;
let keys = [];
let i = 0;
let buttonPressed;
let len = 0;
let sumValue = 0;
let firstExist = false;

const operators = ['+', '-', '*', '/', '^'];
const isOperator = (e) => operators.includes(e);

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const isNumber = (e) => numbers.includes(e);

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const sum = document.querySelector('.sum');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttonPressed = button.id;

    if (isNumber(buttonPressed)) {
      displayValue = populateDisplay(buttonPressed);
      if (firstExist === true) {
        numberSecond = +keys.slice(len).join('');
        console.log('second = ', numberSecond);
      } else {
        len++;
      }
    } else if (isOperator(buttonPressed)) {
      numberFirst = +displayValue;
      console.log('First = ', numberFirst);
      firstExist = true;
      len++;
      operatorN = buttonPressed;
      displayValue = populateDisplay(buttonPressed);
    } else if (buttonPressed === '=') {
      sumValue = operate(operatorN, numberFirst, numberSecond);
      sum.textContent = '=' + ' ' + sumValue;
      console.log('sum = ', sumValue);
      numberFirst = sumValue;
      numberSecond = 0;
    }
  });
});

function populateDisplay(key) {
  keys[i] = key;
  i++;

  if (key === 'clear') {
    keys = [];
    i = 0;
    len = 0;
    display.textContent = 0;
    sum.textContent = 0;
    numberFirst = 0;
    numberSecond = 0;
    operatorN = undefined;
    firstExist = false;
  } else if (key === 'x') {
    display.textContent = keys.slice(0, -2).join('');
    i = i - 2;
    len--;
  } else {
    display.textContent = keys.join('');
  }

  displayValue = display.textContent;

  return displayValue;
}

function operate(operator, a, b) {
  if (operator === '+') {
    return add(a, b);
  } else if (operator === '-') {
    return subtract(a, b);
  } else if (operator === '*') {
    return multiply(a, b);
  } else if (operator === '/') {
    return divide(a, b);
  } else if (operator === '^') {
    return power(a, b);
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function power(a, b) {
  return a ** b;
}
