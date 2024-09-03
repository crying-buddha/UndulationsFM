// script.js

let slideIndex = 1;
const slides = document.querySelectorAll(`.slides`);

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide"); // Adapt to your "slide" class
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    
    slides[slideIndex-1].style.display = "block";  
    if (dots.length > 0) {
      dots[slideIndex-1].className += " active";
    }
  }

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Initialize the first slide
showSlides(slideIndex);