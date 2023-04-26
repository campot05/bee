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
