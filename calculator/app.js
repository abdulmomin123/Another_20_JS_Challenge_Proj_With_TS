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
    // clear btn
    if (button === 'c')
        resetCalculator();
    // calculate button
    else if (button === '=')
        displayResult();
    if ((button === '0' || button === '.') && !pressedDigits.length)
        return;
    pressedDigits.push(+button);
    elements.calculatorDisplay.textContent = `${pressedDigits.join('')}`;
    console.log(button);
});
