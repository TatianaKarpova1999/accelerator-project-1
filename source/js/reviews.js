const slider = document.querySelector('.reviews__slider');
const prevButton = document.querySelector('.reviews__button--prev');
const nextButton = document.querySelector('.reviews__button--next');
const slides = Array.from(slider.querySelectorAll('.reviews-card'));
const slideCount = slides.length;
let slideIndex = 0;
prevButton.setAttribute('disabled', '');

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();


  if (slideIndex === 0) {
    prevButton.setAttribute('disabled', '');
  } else {
    prevButton.removeAttribute('disabled', '');
  }

  if (slideIndex === slideCount - 1) {
    nextButton.setAttribute('disabled', '');
  } else {
    nextButton.removeAttribute('disabled', '');
  }
}
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();

  if (slideIndex === 0) {
    prevButton.setAttribute('disabled', '');
  } else {
    prevButton.removeAttribute('disabled', '');
  }

  if (slideIndex === slideCount - 1) {
    nextButton.setAttribute('disabled', '');
  } else {
    nextButton.removeAttribute('disabled', '');
  }
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'grid';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider();


