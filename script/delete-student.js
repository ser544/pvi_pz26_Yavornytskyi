let studentsToDelete = [];

function showDeleteModal(clickedIndex) {
  studentsToDelete = [];
  
  const checkboxes = document.querySelectorAll('.students-table-body input[type="checkbox"]');
  
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      studentsToDelete.push(i);
    }
  }

  if (studentsToDelete.length === 0) {
    alert("Please select at least one student using the checkbox to delete.");
    return; 
  }

  if (!studentsToDelete.includes(clickedIndex)) {
    alert("Please check the box for this specific student to delete them.");
    return;
  }
  
  const nameElement = document.getElementById('delete-student-name');
  const pluralFormElement = document.getElementById('plural');
  
  if (studentsToDelete.length === 1) {
    const student = studentsArray[studentsToDelete[0]];
    pluralFormElement.textContent = ': ';
    nameElement.textContent = student.firstName + ' ' + student.lastName;
  } else {
    let namesList = [];
    for(let i = 0; i < studentsToDelete.length; i++) {
      let student = studentsArray[studentsToDelete[i]];
      namesList.push(student.firstName + ' ' + student.lastName);
    }
    pluralFormElement.textContent = 's: ';
    nameElement.textContent = namesList.join(', ');
  }
  
  openModal('delete-student');
  /*const nameElement = document.getElementById('delete-student-name');
  
  if (studentsToDelete.length === 1) {
    const student = studentsArray[studentsToDelete[0]];
    nameElement.textContent = ' ' + student.firstName + ' ' + student.lastName;
  } else {
    nameElement.textContent = `s ${studentsToDelete.length} selected students: `;
    for(let i = 0; i < studentsToDelete.length; i++) {
      nameElement.textContent += `\n ${studentsArray[studentsToDelete[i]].firstName + ' ' + studentsArray[studentsToDelete[i]].lastName}`;
    }
  }
  
  openModal('delete-student');*/
}

function confirmDelete() {
  studentsToDelete.sort((a, b) => b - a);
  
  for (let i = 0; i < studentsToDelete.length; i++) {
    studentsArray.splice(studentsToDelete[i], 1);
  }
  
  const mainCheckbox = document.querySelector('thead input[type="checkbox"]');
  if (mainCheckbox) mainCheckbox.checked = false;

  closeModal('delete-student');
  studentsToDelete = [];
  renderTable();
}