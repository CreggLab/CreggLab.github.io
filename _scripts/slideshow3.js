let slideIndex3 = 1; // Start from the first slide
let slides3 = document.getElementsByClassName("mySlides3");
let timer;

// Initialize the slideshow
showSlides3(slideIndex3);

function plusSlides3(n) {
  clearTimeout(timer); // Clear the existing timer
  showSlides3(slideIndex3 += n);
}

function showSlides3(n) {
  let i;
  if (n > slides3.length) { slideIndex3 = 1 }    
  if (n < 1) { slideIndex3 = slides3.length }
  for (i = 0; i < slides3.length; i++) {
     slides3[i].style.display = "none";  
  }
  slides3[slideIndex3-1].style.display = "block";  
  timer = setTimeout(function() { plusSlides3(1); }, 6000); // Change slide every 6 seconds
}

