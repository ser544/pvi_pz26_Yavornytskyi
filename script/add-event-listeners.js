document.getElementById('add-student-open-btn').addEventListener('click', () => openModal('add-student'));


document.getElementById('checkbox-main').addEventListener('click', (event) => checkAllCheckboxes(event.currentTarget));

document.getElementById('add-student-close-btn').addEventListener('click', () => closeModal('add-student'));
document.getElementById('add-student-ok-btn').addEventListener('click', () => addStudent(false));
document.getElementById('add-student-create-btn').addEventListener('click', () => addStudent());


document.getElementById('edit-student-close-btn').addEventListener('click', () => closeModal('edit-student'));
document.getElementById('edit-student-cancel-btn').addEventListener('click', () => closeModal('edit-student'));
document.getElementById('edit-student-edit-btn').addEventListener('click', () => {
  editStudent(); 
  closeModal('edit-student');
});

document.getElementById('delete-student-close-btn').addEventListener('click', () => closeModal('delete-student'));
document.getElementById('delete-student-cancel-btn').addEventListener('click', () => closeModal('delete-student'));
document.getElementById('delete-student-ok-btn').addEventListener('click', () => confirmDelete());
