function renderTable(){
  const tableBody = document.querySelector('.students-table-body');
  tableBody.innerHTML = '';

  for (let i = 0; i < 4; i++){
    const student = studentsArray[i];

    const tableRow = document.createElement('tr');
    tableRow.id = `row-${i}`;
    if (student){
      //Creating checkbox
      const tdCheckbox = document.createElement('td');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = `checkbox-${i}`;
      checkbox.setAttribute('aria-label', 'Select student');
      tdCheckbox.appendChild(checkbox);
      tableRow.appendChild(tdCheckbox);
      
      //Creating group
      const tdGroup = document.createElement('td');
      tdGroup.textContent = student.group;
      tableRow.appendChild(tdGroup);
      
      //Creating student's name
      const tdName = document.createElement('td');
      tdName.textContent = `${student.firstName} ${student.lastName}`;
      tableRow.appendChild(tdName);
      
      //Creating student's gender
      const tdGender = document.createElement('td');
      tdGender.textContent = student.gender[0]; // Беремо першу літеру (M або F)
      tableRow.appendChild(tdGender);
      
      //Creating student's birthday
      const tdBirthday = document.createElement('td');
      tdBirthday.textContent = student.birthday;
      tableRow.appendChild(tdBirthday);      
      
      //Creating student's status
      const tdStatus = document.createElement('td');
      tdStatus.textContent = i % 2 === 0 ? 'Online' : 'Offline';
      tableRow.appendChild(tdStatus);      
      
      //Creating options
      const tdOptions = document.createElement('td');

      const editBtn = document.createElement('button');
      editBtn.className = 'students-edit-btn';
      editBtn.innerHTML = '&#128393;';
      editBtn.addEventListener('click', () => openEditModalCheck(i));
      tdOptions.appendChild(editBtn);

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'students-delete-btn';
      deleteBtn.textContent = 'x';
      deleteBtn.addEventListener('click', () => showDeleteModal(i));
      tdOptions.appendChild(deleteBtn);

      tableRow.appendChild(tdOptions);
    } else {
      for (let j = 0; j < 7; j++){
        const tdEmpty = document.createElement('td');
        tableRow.appendChild(tdEmpty);
      }
    }
    tableBody.appendChild(tableRow);
  }
}
renderTable()