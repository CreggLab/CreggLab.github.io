let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let timer; // Variable to hold the timer
let slideDuration = 6000; // Duration for each slide in milliseconds

// Add event listeners to dots
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function() {
    clearTimeout(timer); // Clear the timer
    goToSlide(i);
    startTimer(); // Start the timer for automatic slide transition
  });
}

showSlides();

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active"); // Remove active class from all dots
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active"); // Add active class to the current dot
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  startTimer(); // Start the timer for automatic slide transition
}

function startTimer() {
  clearTimeout(timer); // Clear the timer
  timer = setTimeout(showSlides, slideDuration);
}

function goToSlide(index) {
  clearTimeout(timer); // Clear the timer
  slideIndex = index;
  showSlides();
}
