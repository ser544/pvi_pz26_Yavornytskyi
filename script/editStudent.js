let studentIndexToEdit;

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
  openModal('edit-student'); 
}

function editStudent(){
  if (studentIndexToEdit == undefined || studentIndexToEdit == null) return;
  const student = studentsArray[studentIndexToEdit];

  const groupInput = document.getElementById('groups-edit');
  const firstNameInput = document.getElementById('first-name-edit');
  const lastNameInput = document.getElementById('last-name-edit');
  const genderInput = document.getElementById('gender-edit');
  const birthdayInput = document.getElementById('birthday-edit');

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
}

function showEditStudent(){
  if (studentIndexToEdit == undefined || studentIndexToEdit == null) return;
  const student = studentsArray[studentIndexToEdit];

  const groupInput = document.getElementById('groups-edit');
  const firstNameInput = document.getElementById('first-name-edit');
  const lastNameInput = document.getElementById('last-name-edit');
  const genderInput = document.getElementById('gender-edit');
  const birthdayInput = document.getElementById('birthday-edit');

  groupInput.value = student.group;
  firstNameInput.value = student.firstName;
  lastNameInput.value = student.lastName;
  genderInput.value = student.gender;
  birthdayInput.value = student.birthday;
}