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
// functions
// event listeners
