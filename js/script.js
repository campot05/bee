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

// select

new MultiSelectTag('bees'); // id

// radiobutton cloth

const radioButtons = document.querySelectorAll('input[name="cloth"]');

let previousChecked = null;

function handleRadioChange(event) {
  const currentChecked = event.target;

  if (previousChecked !== null && currentChecked !== previousChecked) {
    previousChecked.parentNode.style = '';
  }

  if (currentChecked.checked) {
    currentChecked.parentNode.style = 'background-color: #FEEDA9';
    previousChecked = currentChecked;
  } else {
    currentChecked.parentNode.style = '';
    previousChecked = null;
  }
}

radioButtons.forEach((button) => {
  button.addEventListener('change', handleRadioChange);
});

// form

const form = document.querySelector('.filter-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('submit');

  form.reset();
});

form.addEventListener('click', (e) => {
  if (e.target.textContent === 'Сбросить') {
    location.reload();
  }
});
