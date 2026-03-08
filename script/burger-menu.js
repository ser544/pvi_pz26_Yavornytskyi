const menuBtn = document.querySelector('.open-menu-btn');
const navMenu = document.querySelector('.page-location nav');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('nav-open');
});