const bellIcon = document.getElementById('bell');
const messageSign = document.querySelector('.message-sign');

bellIcon.addEventListener('animationend', () => {
  bellIcon.classList.remove('animate-ring');
  messageSign.style.display = 'block';
});

bellIcon.addEventListener('contextmenu', (event) => {
  event.preventDefault(); 
  bellIcon.classList.add('animate-ring');
});

const menuBtn = document.querySelector('.open-menu-btn');
const navMenu = document.querySelector('.page-location nav');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('nav-open');
});