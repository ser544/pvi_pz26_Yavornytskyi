function openEditModalCheck(clickedIndex) {
  const checkboxes = document.querySelectorAll('.students-table-body input[type="checkbox"]');
  let selectedIndices = [];
  
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selectedIndices.push(parseInt(checkboxes[i].id.replace('checkbox-', '')));
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

  const student = studentsArray[clickedIndex];
  console.log(student)
  idInput.value = student.id; 
  groupInput.value = student.group;
  firstNameInput.value = student.firstName;
  lastNameInput.value = student.lastName;
  genderInput.value = student.gender;
  birthdayInput.value = student.birthday;

  openModal('Edit Student'); 
}