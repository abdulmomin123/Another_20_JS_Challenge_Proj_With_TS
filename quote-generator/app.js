"use strict";
const elements = {
    quoteContainer: document.getElementById('quote-container'),
    quoteText: document.getElementById('quote'),
    authorText: document.getElementById('author'),
    twitterBtn: document.getElementById('twitter'),
    newQuoteBtn: document.getElementById('new-quote'),
    loader: document.getElementById('loader'),
};
const getQuote = async () => {
    const response = await (await fetch('https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')).json();
    return response;
};
const displayQuote = (quote) => {
    console.log(quote);
};
const tweetQuote = () => {
};
const displayLoader = () => {
};
const clearLoader = () => {
};
const getAndDisplayQuote = async () => {
    displayLoader();
    const quote = await getQuote();
    displayQuote(quote);
    clearLoader();
};
getAndDisplayQuote();
