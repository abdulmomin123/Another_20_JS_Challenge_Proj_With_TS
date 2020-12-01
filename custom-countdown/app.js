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
const today = new Date();
// functions
const setMinDate = () => {
    const year = today.getFullYear();
    const month = `${today.getMonth() + 1}`.padStart(2, '0');
    const date = `${today.getDate()}`.padStart(2, '0');
    elements.dateEl.setAttribute('min', `${year}-${month}-${date}`);
};
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
// calculates the remaning time from today based on future time
const calcRemaningTime = (futureTime) => {
    const { date, month, year } = futureTime.timeStamp;
    console.log(date, month, year);
};
// displays the remaning time calculated by calRemaningTime
const displayRemaningTime = (timeLeft) => {
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
