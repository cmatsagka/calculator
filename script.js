let operatorN, numberFirst, numberSecond;
let displayValue;
let keys = [];
let i = 0;
let buttonPressed;
let len = 0;
let sumValue = 0;

const operators = ['+', '-', '*', '/', '^', '='];
const isOperator = (e) => operators.includes(e);

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const sum = document.querySelector('.sum');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttonPressed = button.id;
    displayValue = populateDisplay(buttonPressed);

    if (isOperator(buttonPressed)) {
      if (!numberFirst) {
        numberFirst = +keys.slice(0, -1).join('');
        len = 0;
      } else {
        numberSecond = +keys.slice(len, -1).join('');
        sumValue = operate(operatorN, numberFirst, numberSecond);
        numberFirst = sumValue;
      }
      operatorN = buttonPressed;

      sum.textContent = sumValue;

      if (buttonPressed === '=') {
        numberFirst = sumValue;
        numberSecond = 0;
        keys = [];
        i = 0;
        keys[i] = numberFirst;
        display.textContent = sumValue;
        displayValue = display.textContent;
        operatorN = undefined;
      }
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
  } else if (key === 'x') {
    display.textContent = keys.slice(0, -2).join('');
    i = i - 2;
    len--;
  } else {
    display.textContent = keys.join('');
    len++;
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
