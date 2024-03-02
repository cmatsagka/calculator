let operatorN, numberFirst, numberSecond;
let displayValue;
let keys = [];
let i = 0;
let buttonPressed;

const operators = ['+', '-', '*', '/', '^'];
const isOperator = (e) => operators.includes(e);

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttonPressed = button.id;
    console.log(buttonPressed);
    displayValue = populateDisplay(buttonPressed);

    if (isOperator(buttonPressed)) {
      operatorN = buttonPressed;
      numberFirst = +keys.slice(0, -1).join('');
    }

    // if (key === '=') {
    //   operate(operatorN, numberFirst, numberSecond);
    // }

    console.log('displayValue=', displayValue);
    console.log('numb1 = ', numberFirst);
    console.log('op =', operatorN);
  });
});

function populateDisplay(key) {
  keys[i] = key;
  i++;

  if (key === 'clear') {
    keys = [];
    i = 0;
    display.textContent = 0;
  } else if (key === 'x') {
    display.textContent = keys.slice(0, -2).join('');
    i = i - 2;
  } else {
    display.textContent = keys.join('');
  }

  displayValue = display.textContent;

  return displayValue;
}

function operate(operator, numberA, numberB) {
  if (operator === '+') {
    return add(numberA, numberB);
  } else if (operator === '-') {
    return subtract(numberA, numberB);
  } else if (operator === '*') {
    return multiply(numberA, numberB);
  } else if (operator === '/') {
    return divide(numberA, numberB);
  } else if (operator === '^') {
    return power(numberA, numberB);
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
