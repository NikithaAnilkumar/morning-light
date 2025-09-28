const quotes = [
  "Each day is a new beginning.",
  "Smile — it makes today brighter.",
  "Little things make big days.",
  "You are exactly where you need to be.",
  "Start your morning with gratitude.",
  "Happiness is homemade.",
  "Take a deep breath and enjoy the moment.",
  "Every sunrise is an invitation to shine.",
  "Kindness costs nothing but means everything.",
  "Believe in the magic of new beginnings."
];

const colors = [
  "#FFB6C1", "#FFDAB9", "#E6E6FA", "#FFFACD", "#B0E0E6",
  "#FFE4E1", "#F0FFF0", "#D8BFD8", "#F5DEB3", "#E0FFFF"
];

const greeting = document.getElementById("greeting");
const btn = document.getElementById("quote-btn");
const quoteText = document.getElementById("quote");

// Ask for user's name
let userName = prompt("May I know your name?");

if (userName && userName.trim() !== "") {
  greeting.textContent = `Good Morning, ${userName} 🌞`;
  btn.style.display = "inline-block";
} else {
  greeting.textContent = "Good Morning 🌞";
  btn.style.display = "inline-block";
}

btn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  // Smooth fade effect
  quoteText.style.opacity = 0;
  setTimeout(() => {
    quoteText.textContent = quotes[randomIndex];
    quoteText.style.color = "violet";
    quoteText.style.opacity = 7;
  }, 300);
});
