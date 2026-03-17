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
  const currentId = idInput.value.trim();
  const group = groupInput.value;
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const gender = genderInput.value;
  const birthday = birthdayInput.value;

  validate(); // Місце для майбутньої валідації

  const emptyFields = [];
  if (!group) emptyFields.push("Group");
  if (!firstName) emptyFields.push("First name");
  if (!lastName) emptyFields.push("Last name");
  if (!gender) emptyFields.push("Gender");
  if (!birthday) emptyFields.push("Birthday");
  
  if (emptyFields.length > 0) {
    if (isAlertNeeded) {
      alert(`Enter ${emptyFields.length > 1 ? 'these' : 'this'}:\n- ${emptyFields.join('\n- ')}`);
    } else {
      closeModal();
    }
    return;
  }
  
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

function validate(){

}
