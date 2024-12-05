// Dynamic Text Rotator
const dynamicText = document.getElementById('dynamic-text');
const messages = [
  "New India",
  "India of our own dreams",
  "India of the Future",
  "India of the Youth",
  "India of the Innovators",
  "India of the Creators",
  "India of the Thinkers",
  "India of the Leaders",
  "India of the Entrepreneurs",
  "India of the Scientists"
];
let currentIndex = 0;

function changeText() {
  dynamicText.textContent = messages[currentIndex];
  currentIndex = (currentIndex + 1) % messages.length;
}
setInterval(changeText, 3000);

// Counter Animation
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;

    const increment = target / 100;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});


// contect.html -> script.js

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you shortly.');
});

// services.html -> script.js

// Add any interactive functionality if needed here
console.log("Services Page Loaded");

