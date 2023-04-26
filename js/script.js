const refs = {
  menuLink: document.querySelector('.menu-link'),
  menuArrow: document.querySelector('.menu-arrow'),
  menuSubList: document.querySelector('.menu-sub-list'),
  beeLink: document.querySelector('.menu-link-bee'),
  menuSubList: document.querySelector('.menu-sub-list'),
};

refs.menuLink.addEventListener('mouseenter', rotateUp);

refs.menuLink.addEventListener('mouseleave', rotateDown);

refs.menuSubList.addEventListener('mouseenter', rotateUp);

refs.menuSubList.addEventListener('mouseleave', rotateDown);

function rotateUp() {
  refs.menuArrow.style.transform = 'rotate(180deg)';
}
function rotateDown() {
  refs.menuArrow.style.transform = 'rotate(0deg)';
}

refs.beeLink.addEventListener('click', () => {
  refs.beeLink.classList.toggle('is-open');
  refs.menuSubList.classList.toggle('show');
});

// modal

const openModalBtn = document.querySelector('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');

openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);
modal.addEventListener('click', closeModal);

function toggleModal() {
  document.body.classList.toggle('modal-open');
  modal.classList.toggle('is-hidden');
  if (!modal.classList.contains('is-hidden')) {
    document.addEventListener('keydown', handleKeyDown);
  } else {
    document.removeEventListener('keydown', handleKeyDown);
  }
}

function closeModal(e) {
  if (e.target === e.currentTarget) {
    toggleModal();
  }
}

function handleKeyDown(e) {
  if (e.key === 'Escape') {
    toggleModal();
  }
}

const rangeInput = document.querySelectorAll('.range-input input'),
  priceInput = document.querySelectorAll('.price-input input'),
  range = document.querySelector('.slider .progress');
let priceGap = 10;
priceInput.forEach((input) => {
  input.addEventListener('input', (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === 'price-input-min') {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + '%';
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + '%';
      }
    }
  });
});
rangeInput.forEach((input) => {
  input.addEventListener('input', (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);
    if (maxVal - minVal < priceGap) {
      if (e.target.className === 'range-min') {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + '%';
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
    }
  });
});
