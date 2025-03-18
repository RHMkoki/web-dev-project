// JavaScript for controlling the slider

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Show the initial slide
showSlide(currentSlide);

// Function to show a slide by index
function showSlide(index) {
  // Hide all slides
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  // Show the slide at the given index
  slides[index].classList.add('active');
}

// Function to go to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

// Function to go to the previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Event listeners for next and previous buttons
document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

// Keyboard navigation for left and right arrow keys
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    nextSlide();
  } else if (event.key === 'ArrowLeft') {
    prevSlide();
  }
});
