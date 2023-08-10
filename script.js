const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
let apiQuotes = [];

//show new Quote
function newQuote() {
    // To pick a random quote from quotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
// Check if Author field is blank and replace with 'unknown'
if (!quote.author) {
    authorText.textContent = 'Unknown';
} else {
  authorText.textContent = quote.author;
}
// Check Quote length to determine styling
if (quote.text.length > 100) {
    quoteText.classList.add('long-quote');
 } else {
   quoteText.classList.remove('long-quote');
}
quoteText.textContent = quote.text;
}
//Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        //cath error here
    }
}
// Tweet Quote
function tweetQuote() {
    const twitterUrl =`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}


// Event Listeners
newQuoteBtn.addEventListener('click' , newQuote);
twitterBtn.addEventListener('click' , tweetQuote);

//On Load
getQuotes();
// newQuote();