document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.theme-toggle');
  const body = document.body;

  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem('theme');

  // Apply saved theme if it exists
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.classList.add('dark');
  }

  // Toggle theme on button click
  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleButton.classList.toggle('dark');

    // Save preference to localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  });
});

// document.addEventListener('DOMContentLoaded', () => {
//   const toggleButton = document.querySelector('.theme-toggle');
//   const body = document.body;
//   const statusElement = document.getElementById('status');
//   const toggleTexts = document.querySelectorAll('.toggle-text');

//   // Check for saved theme preference
//   const savedTheme = localStorage.getItem('theme');

//   // Apply saved theme if it exists, otherwise default to light mode
//   if (savedTheme === 'dark') {
//     body.classList.add('dark-mode');
//     toggleButton.classList.add('dark');
//     updateStatus('dark');
//   } else {
//     // Explicitly set to light mode (default)
//     body.classList.remove('dark-mode');
//     toggleButton.classList.remove('dark');
//     updateStatus('light');
//   }

//   // Toggle theme on button click
//   toggleButton.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
//     toggleButton.classList.toggle('dark');

//     // Determine current theme
//     const isDarkMode = body.classList.contains('dark-mode');

//     // Save preference to localStorage
//     localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

//     // Update status display
//     updateStatus(isDarkMode ? 'dark' : 'light');
//   });

//   // Update status display
//   function updateStatus(theme) {
//     if (theme === 'dark') {
//       statusElement.textContent = 'Current theme: Dark Mode';
//       statusElement.className = 'status dark-status';
//       toggleTexts[0].textContent = 'Dark';
//       toggleTexts[1].textContent = 'Light';
//     } else {
//       statusElement.textContent = 'Current theme: Light Mode';
//       statusElement.className = 'status light-status';
//       toggleTexts[0].textContent = 'Light';
//       toggleTexts[1].textContent = 'Dark';
//     }
//   }
// });

//TODO arrow
// document.querySelectorAll('.header__link').forEach(link => {
//   link.addEventListener('click', function (e) {
//     const arrow = this.querySelector('.header__arrow');
//     arrow.classList.toggle('rotated');
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const interactiveLink = document.querySelector('.header__link[href="#"]'); // The "Інтерактив" link
  const arrow = document.querySelector('.header__arrow'); // The > arrow span
  const modalBackdrop = document.getElementById('interactiveModal');
  const modalInput = document.querySelector('.modal-input');
  const saveButton = document.querySelector('.modal-btn');
  const closeBtn = document.querySelector('.modal-content .close');
  const toggleText = document.querySelector('.toggle-text');

  // Check if there's a saved name in localStorage
  const savedName = localStorage.getItem('userName');
  if (savedName) {
    toggleText.textContent = `Вітаємо, ${savedName}!`;
  }

  // Function to open modal and rotate arrow
  function openModal() {
    modalBackdrop.classList.add('show');
    document.body.style.overflow = 'hidden';
    arrow.classList.add('rotated'); // Rotate arrow
  }

  // Function to close modal and reset arrow
  function closeModal() {
    modalBackdrop.classList.remove('show');
    document.body.style.overflow = '';
    arrow.classList.remove('rotated'); // Reset arrow
  }

  // Open modal when clicking "Інтерактив" link
  interactiveLink.addEventListener('click', e => {
    e.preventDefault();
    openModal();
  });

  // Save button click handler
  saveButton.addEventListener('click', () => {
    const name = modalInput.value.trim();

    if (name) {
      localStorage.setItem('userName', name);
      toggleText.textContent = `Вітаємо, ${name}!`;
      closeModal(); // Close and reset arrow
    } else {
      alert('Будь ласка, введіть своє ім’я!');
    }
  });

  // Close modal when clicking the X
  closeBtn.addEventListener('click', closeModal);

  // Close modal when clicking outside
  modalBackdrop.addEventListener('click', e => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  // Close modal on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('show')) {
      closeModal();
    }
  });
});

//TODO modal
document.addEventListener('DOMContentLoaded', () => {
  const interactiveLink = document.querySelector('.header__link[href="#"]');
  const modalBackdrop = document.getElementById('interactiveModal');
  const closeBtn = document.querySelector('.modal-content .close');

  interactiveLink.addEventListener('click', e => {
    e.preventDefault();
    modalBackdrop.classList.add('show');
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
    modalBackdrop.classList.remove('show');
    document.body.style.overflow = '';
  });

  modalBackdrop.addEventListener('click', e => {
    if (e.target === modalBackdrop) {
      modalBackdrop.classList.remove('show');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('show')) {
      modalBackdrop.classList.remove('show');
      document.body.style.overflow = '';
    }
  });
});

//TODO user input

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const modalBackdrop = document.getElementById('interactiveModal');
  const modalInput = document.querySelector('.modal-input');
  const saveButton = document.querySelector('.modal-btn');
  const closeBtn = document.querySelector('.modal-content .close');
  const toggleText = document.querySelector('.toggle-text'); // This is where we'll show "Вітаємо, [Name]"

  // Check if there's a saved name in localStorage
  const savedName = localStorage.getItem('userName');
  if (savedName) {
    toggleText.textContent = `Вітаємо, ${savedName}!`;
  }

  // Save button click handler
  saveButton.addEventListener('click', () => {
    const name = modalInput.value.trim();

    if (name) {
      // Save name to localStorage
      localStorage.setItem('userName', name);

      // Update the welcome text
      toggleText.textContent = `Вітаємо, ${name}!`;

      // Close the modal
      modalBackdrop.classList.remove('show');
      document.body.style.overflow = '';
    } else {
      alert('Будь ласка, введіть своє ім’я!');
    }
  });

  // Close modal when clicking the X
  closeBtn.addEventListener('click', () => {
    modalBackdrop.classList.remove('show');
    document.body.style.overflow = '';
  });

  // Close modal when clicking outside
  modalBackdrop.addEventListener('click', e => {
    if (e.target === modalBackdrop) {
      modalBackdrop.classList.remove('show');
      document.body.style.overflow = '';
    }
  });

  // Close modal on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('show')) {
      modalBackdrop.classList.remove('show');
      document.body.style.overflow = '';
    }
  });
});
