"use strict";
// dom elements
const elements = {
    countdownForm: document.getElementById('countdownForm'),
    inputContainer: document.getElementById('input-container'),
    inputTitle: document.getElementById('title'),
    dateEl: document.getElementById('date-picker'),
    countdownEl: document.getElementById('countdown'),
    countdownElTitle: document.getElementById('countdown-title'),
    countdownBtn: document.getElementById('countdown-button'),
    timeElements: document.querySelectorAll('span'),
    completeEl: document.getElementById('complete'),
    completeElInfo: document.getElementById('complete-info'),
    completeBtn: document.getElementById('complete-button'),
};
// functions
const getInput = (e) => {
    e.preventDefault();
    const [year, month, date] = elements.dateEl.value.split('-');
    const input = {
        title: elements.inputTitle.value,
        timeStamp: {
            date: +date,
            month: +month,
            year: +year,
        },
    };
    return input;
};
// event listeners
elements.countdownForm.addEventListener('submit', getInput);
