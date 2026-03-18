document.getElementById('add-student-open-btn').addEventListener('click', () => openModal('Add Student'));

document.getElementById('checkbox-main').addEventListener('click', (event) => checkAllCheckboxes(event.currentTarget));

document.getElementById('close-btn').addEventListener('click', closeModal);

document.getElementById('delete-student-close-btn').addEventListener('click', () => closeModal('delete-student'));
document.getElementById('delete-student-cancel-btn').addEventListener('click', () => closeModal('delete-student'));
document.getElementById('delete-student-ok-btn').addEventListener('click', () => confirmDelete());


document.getElementById('right-btn').addEventListener('submit', (event) => {
  event.preventDefault();
  saveStudent(true);
});

document.getElementById('left-btn').addEventListener('click', () => {
  const modalName = document.querySelector('.modal-title').innerText.trim();
  if (modalName === 'Add Student') {
    saveStudent(false); 
  } else {
    closeModal(); 
  }
});


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((registration) => {
        console.log('ServiceWorker успішно зареєстровано! Сфера дії: ', registration.scope);
      })
      .catch((error) => {
        console.log('Помилка реєстрації ServiceWorker: ', error);
      });
  });
}

document.getElementById('student-form').addEventListener('submit', (event) => {
  event.preventDefault(); 
  saveStudent(true);
});