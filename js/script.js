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
