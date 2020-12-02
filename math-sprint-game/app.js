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
    radioContainers: document.querySelectorAll('.radio-container'),
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
let correctAns;
let wrongAns;
// functions
const highlightSelection = (e) => {
    const target = e.target;
    if (!target.type)
        return;
    elements.radioContainers.forEach(container => container.classList.remove('selected-label'));
    target.parentNode.classList.add('selected-label');
};
const displayCountdown = (_countdown) => {
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
const startRound = (e) => {
    e.preventDefault();
    console.log(e);
};
// event listeners
elements.startForm.addEventListener('submit', startRound);
elements.startForm.addEventListener('click', highlightSelection);
