const button = document.querySelector('.about__button');
const video = document.querySelector('.about__iframe');
const preview = document.querySelector('.about__video picture');


button.addEventListener('click', playVideo);

function playVideo () {
  preview.style.display = 'none';
  button.style.display = 'none';
  video.style.display = 'block';
}

