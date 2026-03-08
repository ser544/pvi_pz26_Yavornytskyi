function checkAllCheckboxes(mainCheckbox){
  const isChecked = mainCheckbox.checked;
  const rowCheckboxes = document.querySelectorAll('.students-table-body input[type="checkbox"]');
  for (let i = 0; i < rowCheckboxes.length; i++){
    const checkbox = document.getElementById(`checkbox-${i}`);
    checkbox.checked = isChecked;
  }
}