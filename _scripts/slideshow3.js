let slideIndex3 = 0;
let slides3 = document.getElementsByClassName("mySlides3");

function showSlides3() {
  // Hide all slides
  for (let i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }

  // Show the next slide
  slideIndex3++;
  if (slideIndex3 > slides3.length) {slideIndex3 = 1} // Loop back to the first slide
  slides3[slideIndex3 - 1].style.display = "block";

  // Set the timer for the next slide
  setTimeout(showSlides3, 6000); // Change slide every 6 seconds
}

// Start the slideshow
showSlides3();
