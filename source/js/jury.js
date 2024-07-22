
const COACHES = [
  {
    id: 0,
    name: 'Анна Павлова',
    jpeg: 'img/jury-1@1x.jpg',
    webp: ['img/jury-1@1x.webp 1x, img/jury-1@2x.webp 2x'],
    badge: 'CrossFit',
    info: ['Certified Level 3 Trainer', 'Победитель чемпионата России по CrossFit', 'Опыт — 6 лет']
  },

  {
    id: 1,
    name: 'Алексей Лавров',
    jpeg: 'img/jury-2@1x.jpg',
    webp: ['img/jury-2@1x.webp 1x, img/jury-2@2x.webp 2x'],
    badge: 'CrossFit',
    info: ['Certified Level 3 Trainer', 'Победитель чемпионата России по CrossFit', 'Опыт — 6 лет']
  },

  {
    id: 2,
    name: 'Александр Пашков',
    jpeg: 'img/jury-3@1x.jpg',
    webp: ['img/jury-3@1x.webp 1x, img/jury-3@2x.webp 2x'],
    badge: 'CrossFit',
    info: ['Certified Level 3 Trainer', 'Победитель чемпионата России по CrossFit', 'Опыт — 6 лет']
  },

  {
    id: 3,
    name: 'Мария Кетова',
    jpeg: 'img/jury-4@1x.jpg',
    webp: ['img/jury-4@1x.webp 1x, img/jury-4@2x.webp 2x'],
    badge: 'CrossFit',
    info: ['Certified Level 3 Trainer', 'Победитель чемпионата России по CrossFit', 'Опыт — 6 лет']
  },

  {
    id: 4,
    name: 'Анна Павлова',
    jpeg: 'img/jury-1@1x.jpg',
    webp: ['img/jury-1@1x.webp 1x, img/jury-1@2x.webp 2x'],
    badge: 'CrossFit',
    info: ['Certified Level 3 Trainer', 'Победитель чемпионата России по CrossFit', 'Опыт — 6 лет']
  },

  {
    id: 5,
    name: 'Алексей Лавров',
    jpeg: 'img/jury-2@1x.jpg',
    webp: ['img/jury-2@1x.webp 1x, img/jury-2@2x.webp 2x'],
    badge: 'CrossFit',
    info: ['Certified Level 3 Trainer', 'Победитель чемпионата России по CrossFit', 'Опыт — 6 лет']
  },

  {
    id: 6,
    name: 'Александр Пашков',
    jpeg: 'img/jury-3@1x.jpg',
    webp: ['img/jury-3@1x.webp 1x, img/jury-3@2x.webp 2x'],
    badge: 'CrossFit',
    info: ['Certified Level 3 Trainer', 'Победитель чемпионата России по CrossFit', 'Опыт — 6 лет']
  },

  {
    id: 7,
    name: 'Мария Кетова',
    jpeg: 'img/jury-4@1x.jpg',
    webp: ['img/jury-4@1x.webp 1x, img/jury-4@2x.webp 2x'],
    badge: 'CrossFit',
    info: ['Certified Level 3 Trainer', 'Победитель чемпионата России по CrossFit', 'Опыт — 6 лет']
  }
];

const sliderContainer = document.querySelector('.jury__wrapper');
const slider = document.querySelector('.jury__list');
const juryCard = document.querySelector('#card').content.querySelector('.jury-card');
const arrCards = [];
let maxLength = 0;
let i = 0;
switch (sliderContainer.offsetWidth) {
  case 320:
    maxLength = 1;
    break;
  case 768:
    maxLength = 2;
    break;
  case 1366:
    maxLength = 4;
    break;
}
const prevButton = document.querySelector('.jury__button--prev');
const nextButton = document.querySelector('.jury__button--next');


const createJuryCard = (dataCard) => {
  dataCard.forEach((item) => {
    const copyJuryCard = juryCard.cloneNode(true);
    copyJuryCard.setAttribute('tabindex', '0');
    copyJuryCard.setAttribute('data-id', item.id);
    const juryName = copyJuryCard.querySelector('.jury-card__name');
    const juryTitle = copyJuryCard.querySelector('.jury-card__title');
    const juryBadge = copyJuryCard.querySelector('.jury-card__badge');
    const juryPhoto = copyJuryCard.querySelector('.jury-card__image');
    const juryInfo = copyJuryCard.querySelectorAll('.jury-card__item');
    copyJuryCard.setAttribute('data-id', item.id);
    juryName.textContent = item.name;
    juryBadge.textContent = item.badge;
    juryTitle.textContent = item.job;
    juryPhoto.src = item.jpeg;
    juryPhoto.srcset = item.webp;

    let arrInfo = 0;
    juryInfo.forEach((element) => {
      element.textContent = item.info[arrInfo++];
    });

    arrCards.push(copyJuryCard);
  });
};


createJuryCard(COACHES);

function createCard () {
  for (let j = 0; j < maxLength; j++) {
    slider.append(arrCards[j]);
  }
}

createCard();

nextButton.addEventListener('click', () => {
  i++;
  maxLength++;
  slider.innerHTML = '';
  for (let a = i; a < maxLength; a++) {
    slider.append(arrCards[a]);
  }

  if (maxLength > 7) {
    i = 0;
    switch (sliderContainer.offsetWidth) {
      case 320:
        maxLength = 1;
        break;
      case 768:
        maxLength = 2;
        break;
      case 1366:
        maxLength = 4;
        break;
    }
  }
});

prevButton.addEventListener('click', () => {
  i--;
  maxLength--;
  slider.innerHTML = '';
  for (let a = i; a < maxLength; a++) {
    slider.append(arrCards[a]);
    console.log(i);
  }

  if (i < 0) {
    i = 8;
    switch (sliderContainer.offsetWidth) {
      case 320:
        maxLength = 1;
        break;
      case 768:
        maxLength = 2;
        break;
      case 1366:
        maxLength = 4;
        break;
    }
  }
});

