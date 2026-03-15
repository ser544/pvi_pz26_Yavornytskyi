document.getElementById('add-student-open-btn').addEventListener('click', () => openModal('Add Student'));


document.getElementById('checkbox-main').addEventListener('click', (event) => checkAllCheckboxes(event.currentTarget));

document.getElementById('close-btn').addEventListener('click', closeModal);

document.getElementById('delete-student-close-btn').addEventListener('click', () => closeModal('delete-student'));
document.getElementById('delete-student-cancel-btn').addEventListener('click', () => closeModal('delete-student'));
document.getElementById('delete-student-ok-btn').addEventListener('click', () => confirmDelete());
