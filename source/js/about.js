const button = document.querySelector('.about__button');
const video = document.querySelector('.about__iframe');
const preview = document.querySelector('.about__video picture');
const aboutContainer = document.querySelector('.about__wrapper');


if (aboutContainer.offsetWidth === 1366) {
  aboutContainer.children[3].style.display = 'block';
} else {
  aboutContainer.children[3].style.display = 'none';
}

button.addEventListener('click', playVideo);

function playVideo () {
  preview.style.display = 'none';
  button.style.display = 'none';
  video.style.display = 'block';
}
