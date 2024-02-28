function enlargeImg() {
  // Only allow enlargement if screen width is greater than 800px
  if (window.innerWidth > 800) {
    var element = document.getElementById("myTable");
    element.classList.toggle("largetable");
  }
}
