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
  // Score Page
  finalTimeEl: document.querySelector('.final-time') as HTMLHeadingElement,
  baseTimeEl: document.querySelector('.base-time') as HTMLHeadingElement,
  penaltyTimeEl: document.querySelector('.penalty-time') as HTMLHeadingElement,
  playAgainBtn: document.querySelector('.play-again') as HTMLButtonElement,
};

// global variables
let questionsCount: number;
let correctAns: number;
let wrongAns: number;

// functions
const highlightSelection = (e: Event) => {
  const target = e.target as HTMLInputElement;

  if (!target.type) return;

  elements.radioContainers.forEach(container =>
    (container as HTMLDivElement).classList.remove('selected-label')
  );

  (target.parentNode as HTMLDivElement).classList.add('selected-label');

  questionsCount = +target.value;
};

const displayCountdown = (_countdown: number) => {
  //
};

const createRandomQuestions = () => {
  //
};

const displayQuestions = () => {
  //
};

const trackTime = () => {
  //
};

const evaluateAnswer = () => {
  //
};

const startRound = (e: Event) => {
  e.preventDefault();
};

// event listeners
elements.startForm.addEventListener('click', highlightSelection);

elements.startForm.addEventListener('submit', startRound);
