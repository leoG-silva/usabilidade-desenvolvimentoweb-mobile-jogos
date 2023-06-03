const openModal = () =>  {const modal = document.getElementById('modal');
modal.style.display = 'block';
modal.classList.add('active');
};

const editarButtons = document.querySelectorAll('.btn.editar');

editarButtons.forEach((button) => {
  button.addEventListener('click', openModal);
});

document.getElementById('cadastrarPet').addEventListener('click', openModal)

const closeModal = () => document.getElementById('modal').style.display = 'none';

document.getElementById('modalClose').addEventListener('click', closeModal)