const studentsArray = [{
  group : 'PZ-22',
  firstName: 'Anna',
  lastName:'Minaj',
  gender:'Female',
  birthday: '2026-03-04'
}];

const groupInput = document.getElementById('groups');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const genderInput = document.getElementById('gender');
const birthdayInput = document.getElementById('birthday');

groupInput.value = '';
firstNameInput.value = '';
lastNameInput.value = '';
genderInput.value = '';
birthdayInput.value = '';

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
    } else closeModal('add-student');

    return; 
  }

  const student = new Student(group, firstName, lastName, gender, birthday);
  studentsArray.push(student);

  groupInput.value = '';
  firstNameInput.value = '';
  lastNameInput.value = '';
  genderInput.value = '';
  birthdayInput.value = '';

  closeModal('add-student');
  renderTable();
}

