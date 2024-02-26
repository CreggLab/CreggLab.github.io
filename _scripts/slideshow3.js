let slideIndex3 = 1; // Start from the first slide
let slides3 = document.getElementsByClassName("mySlides3");
let timer;

// Initialize the slideshow with the first slide
showSlides3(slideIndex3);

// Function to move to the next or previous slide
function plusSlides3(n) {
  clearTimeout(timer); // Clear the existing timer to reset the slideshow timing
  showSlides3(slideIndex3 += n); // Adjust the slide index and display the new slide
}

// Function to display the slide based on the current slide index
function showSlides3(n) {
  let i;
  if (n > slides3.length) { 
    slideIndex3 = 1; // If moving beyond the last slide, wrap to the first slide
  } else if (n < 1) { 
    slideIndex3 = slides3.length; // If moving before the first slide, wrap to the last slide
  }

  // Hide all slides
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";  
  }

  // Display the current slide
  slides3[slideIndex3 - 1].style.display = "block";  

  // Set the timer to automatically move to the next slide after 6 seconds
  timer = setTimeout(function() { plusSlides3(1); }, 6000);
}

// Start the slideshow
showSlides3(slideIndex3);
