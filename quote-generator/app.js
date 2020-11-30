"use strict";
const elements = {
    quoteContainer: document.getElementById('quote-container'),
    quoteText: document.getElementById('quote'),
    authorText: document.getElementById('author'),
    twitterBtn: document.getElementById('twitter'),
    newQuoteBtn: document.getElementById('new-quote'),
    loader: document.getElementById('loader'),
};
let currentQuote;
const getQuote = async () => {
    const quote = await (await fetch('https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')).json();
    currentQuote = quote;
    return quote;
};
const displayQuote = (quote) => {
    const markupQuote = `
   <span id="quote">
      ${quote.quoteText}
   </span>
   `;
    const markupAuthor = `
   <div class="quote-author">
      <span id="author">${quote.quoteAuthor}</span>
   </div>
   `;
    elements.quoteText.innerHTML = markupQuote;
    elements.authorText.innerHTML = markupAuthor;
};
const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${currentQuote.quoteText} - ${currentQuote.quoteAuthor}`;
    window.open(twitterUrl, '_blank');
};
const displayLoader = () => elements.loader.removeAttribute('hidden');
const clearLoader = () => elements.loader.setAttribute('hidden', '');
const getAndDisplayQuote = async () => {
    elements.quoteContainer.setAttribute('hidden', '');
    displayLoader();
    const quote = await getQuote();
    displayQuote(quote);
    clearLoader();
    elements.quoteContainer.removeAttribute('hidden');
};
getAndDisplayQuote();
elements.newQuoteBtn.addEventListener('click', getAndDisplayQuote);
elements.twitterBtn.addEventListener('click', tweetQuote);
