const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
];

function getNewQuote() {
    const quoteText = document.getElementById("quote-text");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
}

function setAlarm() {
    const alarmTimeInput = document.getElementById("alarm-time");
    const alarmTime = alarmTimeInput.value;

    if (alarmTime) {
        localStorage.setItem("alarmTime", alarmTime);
        alert("Alarm set successfully!");
    } else {
        alert("Please select a valid alarm time.");
    }
}

// Initial quote on page load
getNewQuote();

// Register the service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
            console.error('Service Worker registration failed:', error);
        });
}
