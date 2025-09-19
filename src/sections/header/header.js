

//TODO v3
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.theme-toggle');
  const body = document.body;
  const slider = document.querySelector('.slider');

  const interactiveLink = document.querySelector('.header__link[href="#"]');
  const arrow = document.querySelector('.header__arrow');
  const modalBackdrop = document.getElementById('interactiveModal');
  const modalInput = document.querySelector('.modal-input');
  const saveButton = document.querySelector('.modal-btn');
  const closeBtn = document.querySelector('.modal-content .close');
  const toggleText = document.querySelector('.toggle-text');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.classList.add('dark');
    slider.classList.add('dark');
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleButton.classList.toggle('dark');
    slider.classList.toggle('dark');

    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  });

  const savedName = localStorage.getItem('userName');
  if (savedName) {
    toggleText.textContent = `Вітаємо, ${savedName}!`;
  }

  function openModal() {
    modalBackdrop.classList.add('show');
    document.body.style.overflow = 'hidden';
    if (arrow) arrow.classList.add('rotated');
  }

  function closeModal() {
    modalBackdrop.classList.remove('show');
    document.body.style.overflow = '';
    if (arrow) arrow.classList.remove('rotated');
  }
  openModal();

  interactiveLink.addEventListener('click', e => {
    e.preventDefault();
    openModal();
  });

  saveButton.addEventListener('click', () => {
    const name = modalInput.value.trim();
    if (name) {
      localStorage.setItem('userName', name);
      toggleText.textContent = `Вітаємо, ${name}!`;
      closeModal();
    } else {
      alert('Будь ласка, введіть своє ім’я!');
    }
  });

  closeBtn.addEventListener('click', closeModal);

  modalBackdrop.addEventListener('click', e => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('show')) {
      closeModal();
    }
  });
});
