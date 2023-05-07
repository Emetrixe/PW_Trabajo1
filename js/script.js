var myHeader = document.getElementsByClassName("myHeader");

var scrollPosition = window.pageYOffset;

window.addEventListener("scrolled", function() {
  if (scrollPosition > 0) {
    myHeader.classList.add("scrolled")
  }
});