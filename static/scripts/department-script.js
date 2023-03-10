// JavaScript Document

let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Next/previous controls
const plusSlides = (n) => {
  showSlides(slideIndex += n);
}

const prev = document.getElementById("prev");

prev.onclick = () => {
	plusSlides(-1);
}

const next = document.getElementById("next");

next.onclick = () => {
	plusSlides(1);
}


// swipe to move image
let touchstartX = 0;
let touchendX = 0;

const gestureZone = document.getElementById('style-container');

gestureZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
}, false);

gestureZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    handleGesture();
}, false); 

function handleGesture() {
    if (touchendX < touchstartX) {
		plusSlides(1);
    }
    
    if (touchendX > touchstartX) {
		plusSlides(-1);
    }
    
}

/*
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

const gestureZone = document.getElementById('gestureZone');

gestureZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

gestureZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false); 

function handleGesture() {
    if (touchendX <= touchstartX) {
        console.log('Swiped left');
    }
    
    if (touchendX >= touchstartX) {
        console.log('Swiped right');
    }
    
    if (touchendY <= touchstartY) {
        console.log('Swiped up');
    }
    
    if (touchendY >= touchstartY) {
        console.log('Swiped down');
    }
    
    if (touchendY === touchstartY) {
        console.log('Tap');
    }
}

/*
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
*/