// elements
const elements = {
  calculatorDisplay: document.querySelector('h1') as HTMLHeadingElement,
  inputBtns: document.querySelectorAll(
    'button'
  ) as NodeListOf<HTMLButtonElement>,
  btnsContainer: document.querySelector(
    '.calculator-buttons'
  ) as HTMLDivElement,
  clearBtn: document.getElementById('clear-btn') as HTMLButtonElement,
};

// global variables
let pressedDigits: number[] = [];
let pressedDigitsTwo: number[] = [];
let result = 0;
let operator: '+' | '-' | 'x' | '/';

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
  const target = e.target as HTMLButtonElement;

  if (target.classList.contains('calculator-buttons')) return;

  const button = target.value;

  // click on the numbers
  for (let i = 0; i < 10; i++)
    if (i.toString() === button && button === '0' && pressedDigits.length)
      pressedDigits.push(+button);

  console.log(pressedDigits);

  // click on the decimal

  // click on the operators

  // click on the clear btn

  // click on the equal to btn
});
