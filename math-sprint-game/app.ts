// dom elements
const elements = {
  // Pages
  gamePage: document.getElementById('game-page') as HTMLDivElement,
  scorePage: document.getElementById('score-page') as HTMLDivElement,
  splashPage: document.getElementById('splash-page') as HTMLDivElement,
  countdownPage: document.getElementById('countdown-page') as HTMLDivElement,
  // Splash Page
  startForm: document.getElementById('start-form') as HTMLFormElement,
  radioContainers: [
    ...(document.querySelectorAll('.radio-container') as NodeList),
  ],
  radioInputs: document.querySelectorAll('input') as NodeList,
  bestScores: document.querySelectorAll('.best-score-value') as NodeList,
  // Countdown Page
  countdown: document.querySelector('.countdown') as HTMLHeadingElement,
  // Game Page
  itemContainer: document.querySelector('.item-container') as HTMLDivElement,
  itemFooter: document.querySelector('.item-footer') as HTMLDivElement,
  // Score Page
  finalTimeEl: document.querySelector('.final-time') as HTMLHeadingElement,
  baseTimeEl: document.querySelector('.base-time') as HTMLHeadingElement,
  penaltyTimeEl: document.querySelector('.penalty-time') as HTMLHeadingElement,
  playAgainBtn: document.querySelector('.play-again') as HTMLButtonElement,
};

// global variables
interface Question {
  firstDigit: number;
  secondDigit: number;
}

let randomQuestions: Question[] = [];
let answers: number[] = [];
let currentQuestion = 0;
let questionsCount: number;
let timerId: number;
let passedSeconds = 0;
let nextToEval = 0;
let correctAns = 0;
let wrongAns = 0;

// functions
const shuffleArr = (arr: any[]) => {
  let m = arr.length,
    t: any,
    i: any;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }

  return arr;
};

const highlightSelection = (e: Event) => {
  const target = e.target as HTMLInputElement;

  if (target.type !== 'radio') return;

  elements.radioContainers.forEach(container =>
    (container as HTMLDivElement).classList.remove('selected-label')
  );

  (target.parentNode as HTMLDivElement).classList.add('selected-label');

  questionsCount = +target.value;
};

const displayCountdown = (countdown: number = 3) => {
  return new Promise(resolve => {
    let intervalId: number;
    let remaingTime = countdown;

    elements.splashPage.setAttribute('hidden', '');
    elements.countdownPage.removeAttribute('hidden');

    elements.countdown.textContent = `${remaingTime}`;
    remaingTime--;

    intervalId = setInterval(() => {
      if (remaingTime < 0) {
        clearInterval(intervalId);
        resolve();
      }

      elements.countdown.textContent = `${
        remaingTime > 0 ? remaingTime : 'Go!'
      }`;
      remaingTime--;
    }, 1000);
  });
};

const createRandomQuestions = (amount: number) => {
  let randomDigit = Math.floor(Math.random() * 10);

  for (let i = 0; i < amount; i++) {
    const firstDigit = randomDigit;
    randomDigit = Math.floor(Math.random() * 10);
    const secondDigit = randomDigit;

    randomQuestions.push({ firstDigit, secondDigit });
    answers.push(firstDigit * secondDigit);
  }
};

const displayQuestions = () => {
  const shuffledAnswers = shuffleArr([...answers]);

  elements.itemContainer.innerHTML = `
    <div class="height-240"></div>
    <div class="selected-item"></div>
  `;

  randomQuestions.forEach((question, i) => {
    const { firstDigit, secondDigit } = question;

    const markup = `
      <div class="item"><h1>${firstDigit} x ${secondDigit} = ${shuffledAnswers[i]}</h1></div>
    `;

    elements.itemContainer.insertAdjacentHTML('beforeend', markup);
  });

  elements.itemContainer.insertAdjacentHTML(
    'beforeend',
    '<div class="height-500"></div>'
  );

  elements.countdownPage.setAttribute('hidden', '');
  elements.gamePage.removeAttribute('hidden');
};

const trackTime = () => {
  timerId = setInterval(() => {
    passedSeconds += 0.05;
  }, 50);
};

const evaluateAnswer = (e: Event) => {
  const target = e.target as HTMLButtonElement;

  if (
    !target.classList.contains('right') &&
    !target.classList.contains('wrong')
  )
    return;

  // scroll to the next question
  elements.itemContainer.scrollTop =
    (document.querySelector('.item') as HTMLDivElement).offsetHeight *
    (currentQuestion + 1);

  currentQuestion++;
};

const startRound = async (e: Event) => {
  e.preventDefault();

  if (!questionsCount) return;

  await displayCountdown();

  createRandomQuestions(questionsCount);

  displayQuestions();

  trackTime();
};

// event listeners
elements.startForm.addEventListener('click', highlightSelection);

elements.startForm.addEventListener('submit', startRound);

elements.itemFooter.addEventListener('click', evaluateAnswer);
