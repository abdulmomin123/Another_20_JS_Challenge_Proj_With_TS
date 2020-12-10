"use strict";
// elements
const elements = {
    calculatorDisplay: document.querySelector('h1'),
    inputBtns: document.querySelectorAll('button'),
    btnsContainer: document.querySelector('.calculator-buttons'),
    clearBtn: document.getElementById('clear-btn'),
};
// global variables
let pressedDigits = [];
let pressedDigitsTwo = [];
let result = 0;
let operator;
// functions
const add = () => {
    //
};
const subtract = () => {
    //
};
const multiply = () => {
    //
};
const divide = () => {
    //
};
const displayResult = () => {
    //
};
const resetCalculator = () => {
    //
};
// event listeners
// click handler on any button
elements.btnsContainer.addEventListener('click', e => {
    const target = e.target;
    if (target.classList.contains('calculator-buttons'))
        return;
    const button = target.value;
    // converting the button to a number
    const number = +button;
    // click on the numbers
    if (number > -1) {
        if (operator)
            number === 0 && !pressedDigits.length
                ? null
                : pressedDigitsTwo.push(number);
        else
            number === 0 && !pressedDigits.length ? null : pressedDigits.push(number);
    }
    // click on the decimal
    button === '.' ? pressedDigits.push(button) : null;
    // click on the operators
    if (button === '+' || '-' || 'x' || '/')
        operator = button;
    // click on the clear btn
    // click on the equal to btn
    // displaying the pressed digits
    elements.calculatorDisplay.textContent = '';
    operator
        ? (elements.calculatorDisplay.textContent = pressedDigitsTwo.join(''))
        : (elements.calculatorDisplay.textContent = pressedDigits.join(''));
});
