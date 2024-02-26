let slideIndex3 = 1; // Start from the first slide
let slides3 = document.getElementsByClassName("mySlides3");
let slideshow3Timer; // Renamed timer variable to avoid conflicts

function showSlides3(n) {
  let i;
  // Check if the new index exceeds the number of slides and reset if necessary
  if (n > slides3.length) { 
    slideIndex3 = 1; 
  } else if (n < 1) { 
    slideIndex3 = slides3.length; 
  }

  // Hide all slides
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";  
  }

  // Show the current slide
  slides3[slideIndex3 - 1].style.display = "block";  

  // Clear any existing timer and set a new one for the next slide
  clearTimeout(slideshow3Timer);
  slideshow3Timer = setTimeout(function() { plusSlides3(1); }, 6000); // Change slide every 6 seconds
}

// Function to move to the next or previous slide
function plusSlides3(n) {
  // Clear the existing timer, adjust the slide index, and show the new slide
  clearTimeout(slideshow3Timer);
  showSlides3(slideIndex3 += n);
}

// Initialize the slideshow with the first slide
showSlides3(slideIndex3);
