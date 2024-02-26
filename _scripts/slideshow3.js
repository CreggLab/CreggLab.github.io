let slideIndex3 = 0;
let slides3 = document.getElementsByClassName("mySlides3");

function showSlides3() {
  for (let i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";  
  }
  slideIndex3++;
  if (slideIndex3 > slides3.length) {slideIndex3 = 1}    
  slides3[slideIndex3-1].style.display = "block";  
  // Reset timer with each call to showSlides3
  clearTimeout(timer);
  timer = setTimeout(showSlides3, 6000); // Change slide every 6 seconds
}

function plusSlides3(n) {
  showSlides3(slideIndex3 += n - 1);
}

// Start the slideshow
showSlides3();
