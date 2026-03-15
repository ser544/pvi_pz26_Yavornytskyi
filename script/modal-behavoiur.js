const modal = document.querySelector('.modal-overlay');

function openModal(name){
  if (name === 'delete-student'){
    document.getElementById('delete-student').classList.add('modal-open');
    return;
  }
  document.querySelector('.modal-title').innerText = name;
  if (name === 'Add Student') addStudentPreparation();
  addRightButtonBehaviour();
  addLeftButtonBehaviour();
  modal.classList.add('modal-open');
}

function closeModal(name = null){
  if (name === 'delete-student'){
    document.getElementById('delete-student').classList.remove('modal-open');
    return
  }
  modal.classList.remove('modal-open');
}

function addRightButtonBehaviour(){
  const modalName = document.querySelector('.modal-title').innerText.trim();
  const rightButton = document.getElementById('right-btn');

  rightButton.removeEventListener('click', addStudent);
  rightButton.removeEventListener('click', editStudent);

  if (modalName === 'Add Student'){
    rightButton.addEventListener('click', addStudent);
    rightButton.innerText = 'Create';
  } else if (modalName === 'Edit Student') {
    rightButton.addEventListener('click', editStudent);
    rightButton.innerText = 'Edit';
  }
}

function addLeftButtonBehaviour(){
  const modalName = document.querySelector('.modal-title').innerText.trim();
  const leftButton = document.getElementById('left-btn');

  const clickHandler = () => {
    addStudent(false);
  };

  leftButton.removeEventListener('click', clickHandler);
  leftButton.removeEventListener('click', closeModal);

  if (modalName === 'Add Student'){
    leftButton.addEventListener('click', clickHandler);
    leftButton.innerText = 'OK';
  } else if (modalName === 'Edit Student') {
    leftButton.addEventListener('click', closeModal);
    leftButton.innerText = 'Cancel';
  }
}