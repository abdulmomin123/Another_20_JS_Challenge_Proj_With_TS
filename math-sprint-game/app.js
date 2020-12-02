"use strict";
// dom elements
const elements = {
    // Pages
    gamePage: document.getElementById('game-page'),
    scorePage: document.getElementById('score-page'),
    splashPage: document.getElementById('splash-page'),
    countdownPage: document.getElementById('countdown-page'),
    // Splash Page
    startForm: document.getElementById('start-form'),
    radioContainers: [
        ...document.querySelectorAll('.radio-container'),
    ],
    radioInputs: document.querySelectorAll('input'),
    bestScores: document.querySelectorAll('.best-score-value'),
    // Countdown Page
    countdown: document.querySelector('.countdown'),
    // Game Page
    itemContainer: document.querySelector('.item-container'),
    // Score Page
    finalTimeEl: document.querySelector('.final-time'),
    baseTimeEl: document.querySelector('.base-time'),
    penaltyTimeEl: document.querySelector('.penalty-time'),
    playAgainBtn: document.querySelector('.play-again'),
};
// global variables
let questions = [];
let answers = [];
let questionsCount;
let correctAns;
let wrongAns;
// functions
const highlightSelection = (e) => {
    const target = e.target;
    if (!target.type)
        return;
    elements.radioContainers.forEach(container => container.classList.remove('selected-label'));
    target.parentNode.classList.add('selected-label');
    questionsCount = +target.value;
};
const displayCountdown = (countdown = 3) => {
    return new Promise(resolve => {
        let intervalId;
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
            elements.countdown.textContent = `${remaingTime > 0 ? remaingTime : 'Go!'}`;
            remaingTime--;
        }, 1000);
    });
};
const createRandomQuestions = (amount) => {
    let randomDigit = Math.floor(Math.random() * 10);
    for (let i = 0; i < amount; i++) {
        const firstDigit = randomDigit;
        randomDigit = Math.floor(Math.random() * 10);
        const secondDigit = randomDigit;
        questions.push(`${firstDigit} x ${secondDigit}`);
        answers.push(firstDigit * secondDigit);
    }
};
const displayQuestions = () => {
    questions.forEach((question, i) => {
        const markup = `
      <div class="item"><h1>${question} = ${answers[i]}</h1></div>
    `;
        elements.itemContainer.insertAdjacentHTML('beforeend', markup);
    });
    elements.itemContainer.insertAdjacentHTML('beforeend', '<div class="height-500"></div>');
    elements.countdownPage.setAttribute('hidden', '');
    elements.gamePage.removeAttribute('hidden');
};
const trackTime = () => {
    //
};
const evaluateAnswer = () => {
    //
};
const startRound = async (e) => {
    e.preventDefault();
    // if (!questionsCount) return;
    await displayCountdown();
    createRandomQuestions(10);
    displayQuestions();
};
// event listeners
elements.startForm.addEventListener('click', highlightSelection);
elements.startForm.addEventListener('submit', startRound);
