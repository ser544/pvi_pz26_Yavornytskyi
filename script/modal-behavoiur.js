const modal = document.querySelector('.modal-overlay');

function openModal(name){
  if (name === 'delete-student'){
    document.getElementById('delete-student').classList.add('modal-open');
    return;
  }

  const titleElement = document.querySelector('.modal-title');
  const rightButton = document.getElementById('right-btn');
  const leftButton = document.getElementById('left-btn');

  titleElement.innerText = name;
  clearAllErrors();
  
  if (name === 'Add Student') {
    addStudentPreparation();
    rightButton.innerText = 'Create';
    leftButton.innerText = 'OK';
  } else if (name === 'Edit Student') {
    rightButton.innerText = 'Edit';
    leftButton.innerText = 'Cancel';
  }
  modal.classList.add('modal-open');
}

function closeModal(name = null){
  if (name === 'delete-student'){
    document.getElementById('delete-student').classList.remove('modal-open');
    return
  }
  modal.classList.remove('modal-open');
}

function saveStudent(isAlertNeeded=true){
  const isValid = validate(isAlertNeeded);

  if (!isValid) {
    if (!isAlertNeeded) {
      closeModal(); 
    }
    return; 
  }

  const currentId = idInput.value.trim();
  const group = groupInput.value;
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const gender = genderInput.value;
  const birthday = birthdayInput.value;

  if (!currentId) {
    const newId = crypto.randomUUID();
    const newStudent = new Student(newId, group, firstName, lastName, gender, birthday);
    studentsArray.push(newStudent);
    
    console.log(JSON.stringify(newStudent)); 
    
  } else {
    const studentToEdit = studentsArray.find(student => student.id === currentId);
    
    if (studentToEdit) {
      studentToEdit.group = group;
      studentToEdit.firstName = firstName;
      studentToEdit.lastName = lastName;
      studentToEdit.gender = gender;
      studentToEdit.birthday = birthday;
      
      console.log(JSON.stringify(studentToEdit));
    }
  }

  closeModal();
  renderTable();
}

function validate(isAlertNeeded){
  clearAllErrors();
  let isValid = true;

  const group = groupInput.value;
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const gender = genderInput.value;
  const birthday = birthdayInput.value;

  if (!group) {
    showError(groupInput, "Please select a group");
    isValid = false;
  }
  if (!gender) {
    showError(genderInput, "Please select a gender");
    isValid = false;
  }
  if (!birthday) {
    showError(birthdayInput, "Please select a birthday date");
    isValid = false;
  } else {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age < 15 || age > 90) {
      showError(birthdayInput, "Age must be between 15 and 90");
      isValid = false;
    }
  }

  const nameRegex = /^[A-Za-zA-Яа-яІіЇїЄєҐґ' \-]{2,20}$/; 

  if (!firstName) {
    showError(firstNameInput, "First name is required");
    isValid = false;
  } else if (!nameRegex.test(firstName)) {
    showError(firstNameInput, "Only letters, spaces, hyphens");
    isValid = false;
  }

  if (!lastName) {
    showError(lastNameInput, "Last name is required");
    isValid = false;
  } else if (!nameRegex.test(lastName)) {
    showError(lastNameInput, "Only letters, spaces, hyphens");
    isValid = false;
  }

  return isValid;
}

function clearAllErrors() {
  const inputs = [groupInput, firstNameInput, lastNameInput, genderInput, birthdayInput];
  inputs.forEach(input => {
    input.classList.remove('input-error'); 
    const errorSpan = input.nextElementSibling;
    if (errorSpan && errorSpan.classList.contains('error-message')) {
      errorSpan.textContent = '';
    }
  });
}

function showError(inputElement, message) {
  inputElement.classList.add('input-error'); 
  const errorSpan = inputElement.nextElementSibling;
  if (errorSpan && errorSpan.classList.contains('error-message')) {
    errorSpan.textContent = message; 
  }
}