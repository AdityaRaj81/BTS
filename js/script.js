
// Dynamic Text Rotator
const dynamicText = document.getElementById('dynamic-text');
const messages = [
  "Short Attention Span: The average attention span of social media users is just 8 seconds, making quick, engaging content more effective.",
  "Video Dominance: Posts with videos get 48% more views and are shared 1200% more than text and images combined.",
  "Influence on Purchases: Around 54% of social media users research products online before making a purchase.",
  "Global Reach: Over 4.9 billion people use social media, which is more than 60% of the world’s population.",
  "Daily Use: The average person spends 2 hours and 31 minutes daily on social media.",
  "User-Generated Content: People are 2.4 times more likely to view user-generated content as authentic compared to brand-created content.",
  "Memes Over Messages: Memes are shared more than seven times more than non-meme content, proving humor is a big win online!",
];
let currentIndex = 0;

function changeText() {
  dynamicText.textContent = messages[currentIndex];
  currentIndex = (currentIndex + 1) % messages.length;
}
setInterval(changeText, 3000);

// // Counter Animation
// const counters = document.querySelectorAll('.counter');

// counters.forEach(counter => {
//   counter.innerText = '0';

//   const updateCounter = () => {
//     const target = +counter.getAttribute('data-target');
//     const current = +counter.innerText;

//     const increment = target / 100;

//     if (current < target) {
//       counter.innerText = Math.ceil(current + increment);
//       setTimeout(updateCounter, 20);
//     } else {
//       counter.innerText = target;
//     }
//   };

//   updateCounter();
// });






// services.html -> script.js

// Add any interactive functionality if needed here
console.log("ScrollReveal Initialized");


