async function getQuote() {
  const quoteElement = document.getElementById('quote');
  quoteElement.textContent = 'Loading...';
  try {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    quoteElement.textContent = `"${data.content}" — ${data.author}`;
  } catch (error) {
    quoteElement.textContent = 'Failed to fetch quote. Please try again.';
  }
}
window.onload = getQuote;
