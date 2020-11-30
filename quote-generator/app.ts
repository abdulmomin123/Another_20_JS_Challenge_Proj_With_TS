// dom elements
const elements = {
  quoteContainer: document.getElementById('quote-container') as HTMLDivElement,
  quoteText: document.getElementById('quote') as HTMLSpanElement,
  authorText: document.getElementById('author') as HTMLSpanElement,
  twitterBtn: document.getElementById('twitter') as HTMLButtonElement,
  newQuoteBtn: document.getElementById('new-quote') as HTMLButtonElement,
  loader: document.getElementById('loader') as HTMLDivElement,
};

// global variables
interface Quote {
  quoteAuthor: string;
  quoteText: string;
}

let currentQuote: Quote;

// functions
// gets a quote
const getQuote = async () => {
  const quote: Quote = await (
    await fetch(
      'https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
    )
  ).json();

  currentQuote = quote;
  return quote;
};

// displays the quote
const displayQuote = (quote: Quote) => {
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

// tweets the quote
const tweetQuote = () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${currentQuote.quoteText} - ${currentQuote.quoteAuthor}`;
  window.open(twitterUrl, '_blank');
};

// displayes the loader
const displayLoader = () => elements.loader.removeAttribute('hidden');

// removes the loader
const clearLoader = () => elements.loader.setAttribute('hidden', '');

// gets & displays the quote
const getAndDisplayQuote = async () => {
  elements.quoteContainer.setAttribute('hidden', '');

  displayLoader();

  const quote = await getQuote();

  displayQuote(quote);

  clearLoader();

  elements.quoteContainer.removeAttribute('hidden');
};

getAndDisplayQuote();

// event listeners
elements.newQuoteBtn.addEventListener('click', getAndDisplayQuote);

elements.twitterBtn.addEventListener('click', tweetQuote);
