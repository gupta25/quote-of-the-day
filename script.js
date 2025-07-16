const quotes = [
 "Believe in yourself.",
 "You are stronger than you think.",
 "Stay positive, work hard, make it happen.",
 "Success is not final, failure is not fatal: It is the courage to continue that counts.",
 "Every day is a second chance."
];
function generateQuote() {
 const randomIndex = Math.floor(Math.random() * quotes.length);
 document.getElementById('quote').textContent = quotes[randomIndex];
}
// Show a quote when the page loads
generateQuote();
