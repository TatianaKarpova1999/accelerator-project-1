
const slider = document.querySelector('.jury__slider');
const prevButton = document.querySelector('.jury__button--prev');
const nextButton = document.querySelector('.jury__button--next');
const slides = Array.from(slider.querySelectorAll('.jury-card'));
const slideCount = slides.length;
let indexNext = 3;
let indexPrev = 0;

// slides.forEach((slide) => {
//   const slideIndex = slide.id;
//   if (slideIndex < 4) {
//     slide.style.display = 'block';
//   } else {
//     slide.style.display = 'none';
//   }
// });

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);


function showPreviousSlide() {
  indexPrev = indexNext - 4;

  if (indexPrev < 0) {
    indexPrev = 7;
  }

  slides[indexPrev].style.display = 'block';
  slides[indexNext].style.display = 'none';

  indexNext -= 1;

  console.log(indexPrev);
  console.log(indexNext);
}

function showNextSlide() {
  if (indexNext > 7) {
    indexNext = 0;
  } else {
    indexNext += 1;
  }

  slides[indexNext].style.display = 'block';
  slides[indexPrev].style.display = 'none';
  indexPrev += 1;

  console.log(indexPrev);
}


