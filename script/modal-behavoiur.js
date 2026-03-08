function openModal(id){
  const modal = document.getElementById(id);
  modal.classList.add('modal-open');
}

function closeModal(id){
  const modal = document.getElementById(id);
  modal.classList.remove('modal-open');
}