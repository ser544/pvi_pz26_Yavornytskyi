const idInput = document.getElementById('student-id');
const groupInput = document.getElementById('groups');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const genderInput = document.getElementById('gender');
const birthdayInput = document.getElementById('birthday');

const addStudent = function(isAlertNeeded=true){
  const id = crypto.randomUUID();
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

  const student = new Student(id, group, firstName, lastName, gender, birthday);
  studentsArray.push(student);

  console.log(JSON.stringify(student));

  closeModal();
  renderTable();
}

function addStudentPreparation(){
  idInput.value = '';
  groupInput.value = '';
  firstNameInput.value = '';
  lastNameInput.value = '';
  genderInput.value = '';
  birthdayInput.value = '';
}
