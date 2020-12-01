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
  title: string;
  timeStamp: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

const today = new Date();

// functions
const setMinDate = () => {
  const year = today.getFullYear();
  const month = `${today.getMonth() + 1}`.padStart(2, '0');
  const date = `${today.getDate()}`.padStart(2, '0');

  elements.dateEl.setAttribute('min', `${year}-${month}-${date}`);
};

const getInput = () => {
  const [year, month, date] = elements.dateEl.value.split('-');

  const input: UserInput = {
    title: elements.inputTitle.value,
    timeStamp: {
      date: +date,
      month: +month - 1,
      year: +year,
    },
  };

  return input;
};

// calculates the remaning time from today based on future time
const calcRemaningTime = (futureTime: UserInput) => {
  const { title } = futureTime;
  const { date, month, year } = futureTime.timeStamp;

  let totalTime = (+new Date(year, month, date, 0, 0, 0) - Date.now()) / 1000;

  console.log(totalTime);

  // all remaning time
  const days = Math.floor(totalTime / 60 / 60 / 24);
  totalTime %= 86400;
  const hours = Math.floor(totalTime / 60 / 60);
  totalTime %= 3600;
  const minutes = Math.floor(totalTime / 60);
  totalTime %= 60;
  const seconds = Math.floor(totalTime);

  return {
    title,
    timeStamp: {
      days,
      hours,
      minutes,
      seconds,
    },
  };
};

// displays the remaning time calculated by calRemaningTime
const displayRemaningTime = (timeLeft: RemaningTime) => {
  const { title } = timeLeft;
  const { days, hours, minutes, seconds } = timeLeft.timeStamp;
  const allTimes = [days, hours, minutes, seconds];

  elements.countdownElTitle.textContent = title;
  elements.timeElements.forEach((time, i) =>
    (time as HTMLElement).insertAdjacentHTML(
      'afterbegin',
      `<span>${allTimes[i]}</span>`
    )
  );

  elements.inputContainer.setAttribute('hidden', '');
  elements.countdownEl.removeAttribute('hidden');
};

const saveTime = () => {
  //
};

const retriveTime = () => {
  //
};

const resetCountdown = () => {
  elements.timeElements.forEach(time =>
    (time as HTMLElement).firstElementChild?.remove()
  );

  elements.inputContainer.removeAttribute('hidden');
  elements.countdownEl.setAttribute('hidden', '');
};

// calculates and displayes the remaning time
const calcAndDisplayRemaningTime = () => {
  // user input
  const input = getInput();

  // calculate the remaning time
  const remaningTime = calcRemaningTime(input);

  console.log(remaningTime);

  // display the remaning time
  displayRemaningTime(remaningTime);
};

// sets the minumum date of the date picker to today
setMinDate();

// event listeners
// submit handler
elements.countdownForm.addEventListener('submit', e => {
  e.preventDefault();

  calcAndDisplayRemaningTime();
});

// reset timer handler
elements.countdownBtn.addEventListener('click', resetCountdown);
