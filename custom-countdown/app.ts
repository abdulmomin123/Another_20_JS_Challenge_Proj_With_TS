// dom elements
const elements = {
  countdownForm: document.getElementById('countdownForm') as HTMLFormElement,
  inputContainer: document.getElementById('input-container') as HTMLDivElement,
  inputTitle: document.getElementById('title') as HTMLInputElement,
  dateEl: document.getElementById('date-picker') as HTMLInputElement,

  countdownEl: document.getElementById('countdown') as HTMLDivElement,
  countdownElTitle: document.getElementById(
    'countdown-title'
  ) as HTMLHeadingElement,
  countdownBtn: document.getElementById(
    'countdown-button'
  ) as HTMLButtonElement,
  timeElements: document.querySelectorAll('span') as NodeList,

  completeEl: document.getElementById('complete') as HTMLDivElement,
  completeElInfo: document.getElementById(
    'complete-info'
  ) as HTMLHeadingElement,
  completeBtn: document.getElementById('complete-button') as HTMLButtonElement,
};

// global variables
interface UserInput {
  title: string;
  timeStamp: {
    date: number;
    month: number;
    year: number;
  };
}

// functions
const getInput = (e: Event) => {
  e.preventDefault();

  const [year, month, date] = elements.dateEl.value.split('-');

  const input: UserInput = {
    title: elements.inputTitle.value,
    timeStamp: {
      date: +date,
      month: +month,
      year: +year,
    },
  };

  console.log(input);
};

// event listeners
elements.countdownForm.addEventListener('submit', getInput);
