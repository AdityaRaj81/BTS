
// Dynamic Text Rotator
const dynamicText = document.getElementById('dynamic-text');
const messages = [
  "The average attention span of social media users is just 8 seconds",
  "Posts with videos get 48% more views and are shared 1200% more than text and images combined.",
  "Around 54% of social media users research products online before making a purchase.",
  "Over 4.9 billion people use social media, which is more than 60% of the world’s population.",
  "People are 2.4 times more likely to view user-generated content as authentic compared to brand-created content",
  "Memes are shared more than seven times more than non-meme content.",
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


