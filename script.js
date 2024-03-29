let operatorN;
let numberFirst = '';
let numberSecond = '';
let displayValue;
let keys = [];
let i = 0;
let buttonPressed;
let sumValue = 0;
let firstExist = false;
let decimalAllowed = true;
let precision = 8;

const operators = ['+', '-', '*', '/', '^'];
const isOperator = (e) => operators.includes(e);

const numbers = ['.', 'dec', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const isNumber = (e) => numbers.includes(e);

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const sum = document.querySelector('.sum');
const decimal = document.getElementById('dec');

document.addEventListener('keydown', (event) => {
  let keyBrd = event.key;

  if (keyBrd === '=' || keyBrd === 'Enter') {
    if (!keys.length) {
      alert('Insert numbers or operator!');
    } else {
      numberFirst = parseFloat(numberFirst);
      numberSecond = parseFloat(numberSecond);

      sumValue = operate(operatorN, numberFirst, numberSecond);
      sumValue = round(sumValue, precision);
      sum.textContent = '=' + ' ' + sumValue;

      numberFirst = sumValue;
      numberSecond = 0;
      firstExist = true;
    }
  } else if (isNumber(keyBrd)) {
    if (keyBrd === '.') {
      if (decimalAllowed) {
        displayValue = populateDisplay('.');
        if (firstExist === true) {
          numberSecond += keyBrd;
          decimalAllowed = !decimalAllowed;
        } else {
          numberFirst += keyBrd;
          decimalAllowed = !decimalAllowed;
        }
        disableDecimal(decimalAllowed);
      }
    } else {
      displayValue = populateDisplay(keyBrd);
      if (firstExist === true) {
        numberSecond += keyBrd;
      } else {
        numberFirst += keyBrd;
      }
    }
  } else if (isOperator(keyBrd)) {
    firstExist = true;
    decimalAllowed = true;
    disableDecimal(decimalAllowed);
    operatorN = keyBrd;
    displayValue = populateDisplay(keyBrd);
  }
  if (keyBrd === 'Delete' || keyBrd === 'Backspace') {
    populateDisplay(keyBrd);
  }
});

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttonPressed = button.id;

    if (buttonPressed === '=') {
      if (!keys.length) {
        alert('Insert numbers or operator!');
      } else {
        numberFirst = parseFloat(numberFirst);
        numberSecond = parseFloat(numberSecond);

        sumValue = operate(operatorN, numberFirst, numberSecond);
        sumValue = round(sumValue, precision);
        sum.textContent = '=' + ' ' + sumValue;

        numberFirst = sumValue;
        numberSecond = 0;
        firstExist = true;
        operatorN = undefined;
      }
    } else if (isNumber(buttonPressed)) {
      if (buttonPressed === 'dec') {
        if (decimalAllowed) {
          displayValue = populateDisplay('.');
          if (firstExist === true) {
            numberSecond += '.';
            decimalAllowed = !decimalAllowed;
          } else {
            numberFirst += '.';
            decimalAllowed = !decimalAllowed;
          }
          disableDecimal(decimalAllowed);
        }
      } else {
        displayValue = populateDisplay(buttonPressed);
        if (firstExist === true) {
          numberSecond += buttonPressed;
        } else {
          numberFirst += buttonPressed;
        }
      }
    } else if (isOperator(buttonPressed)) {
      firstExist = true;
      decimalAllowed = true;
      disableDecimal(decimalAllowed);
      operatorN = buttonPressed;
      displayValue = populateDisplay(buttonPressed);
    }
    if (buttonPressed === 'Delete' || buttonPressed === 'Backspace') {
      populateDisplay(buttonPressed);
    }
  });
});

function round(value, precision) {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

function disableDecimal(decimalAllowed) {
  decimal.disabled = !decimalAllowed;
}

function populateDisplay(key) {
  if (key === 'Delete') {
    keys = [];
    i = 0;
    display.textContent = 0;
    sum.textContent = 0;
    numberFirst = '';
    numberSecond = '';
    operatorN = undefined;
    firstExist = false;
    decimalAllowed = true;
    disableDecimal(decimalAllowed);
  } else if (key === 'Backspace') {
    if (keys[i - 1] === '.') {
      decimalAllowed = disableDecimal(!decimalAllowed);
    }
    keys.pop();
    i--;
  } else {
    keys[i] = key;
    i++;
  }
  display.textContent = keys.join('');
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
    if (b === 0) {
      sum.textContent = '=' + ' ' + 'Error! Division with 0';
    } else {
      return divide(a, b);
    }
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
