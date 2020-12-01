// dom elements
const elements = {
  // Pages
  gamePage: document.getElementById('game-page') as HTMLDivElement,
  scorePage: document.getElementById('score-page') as HTMLDivElement,
  splashPage: document.getElementById('splash-page') as HTMLDivElement,
  countdownPage: document.getElementById('countdown-page') as HTMLDivElement,
  // Splash Page
  startForm: document.getElementById('start-form') as HTMLFormElement,
  radioContainers: document.querySelectorAll('.radio-container') as NodeList,
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

// functions

// event listeners
