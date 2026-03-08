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
