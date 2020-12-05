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

// event listeners
// click handler on any button
elements.btnsContainer.addEventListener('click', e => {
  const target = e.target as HTMLButtonElement;

  if (target.classList.contains('calculator-buttons')) return;

  const button = target.value;

  console.log(target);
});
