const studentsArray = [{
  group : 'PZ-22',
  firstName: 'Anna',
  lastName:'Minaj',
  gender:'Female',
  birthday: '2026-03-04'
}];

const modal = document.querySelector('.modal-overlay');

const groupInput = document.getElementById('groups');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const genderInput = document.getElementById('gender');
const birthdayInput = document.getElementById('birthday');


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

let studentIndexToEdit;

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

function openEditModalCheck(clickedIndex) {
  const checkboxes = document.querySelectorAll('.students-table-body input[type="checkbox"]');
  let selectedIndices = [];
  
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selectedIndices.push(i);
    }
  }

  if (selectedIndices.length === 0) {
    alert("Please select a student using the checkbox to edit.");
    return;
  }
  if (selectedIndices.length > 1) {
    alert("You can only edit one student at a time.");
    return;
  }
  if (!selectedIndices.includes(clickedIndex)) {
    alert("Please check the box for this specific student to edit them.");
    return;
  }

  studentIndexToEdit = clickedIndex;
  showEditStudent();
  openModal('Edit Student'); 
}

function editStudent(){
  if (studentIndexToEdit == undefined || studentIndexToEdit == null) return;
  const student = studentsArray[studentIndexToEdit];

  const group = groupInput.value;
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const gender = genderInput.value;
  const birthday = birthdayInput.value;

  if(!group || !firstName || !lastName || !gender || !birthday) return;

  student.group = group;
  student.firstName = firstName;
  student.lastName = lastName;
  student.gender = gender;
  student.birthday = birthday;

  renderTable();
  closeModal();
}

function showEditStudent(){
  if (studentIndexToEdit == undefined || studentIndexToEdit == null) return;
  const student = studentsArray[studentIndexToEdit];

  groupInput.value = student.group;
  firstNameInput.value = student.firstName;
  lastNameInput.value = student.lastName;
  genderInput.value = student.gender;
  birthdayInput.value = student.birthday;
}

const addStudent = function(isAlertNeeded=true){
  const group = groupInput.value;
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const gender = genderInput.value;
  const birthday = birthdayInput.value;

  const emptyFields = [];
  if (!group) emptyFields.push("Group");
  if (!firstName) emptyFields.push("First name");
  if (!lastName) emptyFields.push("Last name");
  if (!gender) emptyFields.push("Gender");
  if (!birthday) emptyFields.push("Birthday");
  if (emptyFields.length > 0) {
    if (isAlertNeeded) {
      alert(`Enter ${emptyFields.length>1? 'these': 'this'}:\n- ${emptyFields.join('\n- ')}`);
    } else closeModal();

    return; 
  }

  const student = new Student(group, firstName, lastName, gender, birthday);
  studentsArray.push(student);

  groupInput.value = '';
  firstNameInput.value = '';
  lastNameInput.value = '';
  genderInput.value = '';
  birthdayInput.value = '';

  closeModal();
  renderTable();
}

function addStudentPreparation(){
  groupInput.value = '';
  firstNameInput.value = '';
  lastNameInput.value = '';
  genderInput.value = '';
  birthdayInput.value = '';
}
