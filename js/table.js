import './menu.js';
import './modal.js';
import './script.js';

const tabLinks = document.querySelectorAll('.table-list-link');
const tabContents = document.querySelectorAll('.tabs-table');

function hideTabs() {
  tabContents.forEach((tabContent) => {
    tabContent.style.display = 'none';
  });
}

function showTab(tabId) {
  const tabContent = document.querySelector(tabId);
  if (tabContent.style.display === 'none' || tabContent.style.display === '') {
    tabContent.style.display = 'table';
  } else {
    tabContent.style.display = 'none';
  }
}

tabLinks.forEach((tabLink) => {
  tabLink.addEventListener('click', (event) => {
    event.preventDefault();

    showTab(tabLink.getAttribute('href'));

    if (tabLink.classList.contains('active')) {
      tabLink.classList.remove('active');
    } else {
      tabLinks.forEach((link) => {
        link.classList.remove('active');
      });
      tabLink.classList.add('active');
    }
  });
});

hideTabs();
