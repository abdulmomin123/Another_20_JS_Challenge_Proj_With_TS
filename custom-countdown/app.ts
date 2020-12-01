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

interface RemaningTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const today = new Date();

// functions
const setMinDate = () => {
  const year = today.getFullYear();
  const month = `${today.getMonth() + 1}`.padStart(2, '0');
  const date = `${today.getDate()}`.padStart(2, '0');

  elements.dateEl.setAttribute('min', `${year}-${month}-${date}`);
};

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

  return input;
};

// calculates the remaning time from today based on future time
const calcRemaningTime = (futureTime: UserInput) => {
  const { date, month, year } = futureTime.timeStamp;

  console.log(date, month, year);
};

// displays the remaning time calculated by calRemaningTime
const displayRemaningTime = (timeLeft: RemaningTime) => {
  const { days, hours, minutes, seconds } = timeLeft;

  console.log(days, hours, minutes, seconds);
};

const saveTime = () => {
  //
};

const retriveTime = () => {
  //
};

// calculates and displayes the remaning time
const calcAndDisplayRemaningTime = () => {
  // sets the minumum date of the date picker to today
  setMinDate();
};

calcAndDisplayRemaningTime();

// event listeners
// submit handler
elements.countdownForm.addEventListener('submit', getInput);
