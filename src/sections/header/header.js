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

document.querySelectorAll('.header__link').forEach(link => {
  link.addEventListener('click', function (e) {
    // Prevent default if needed (or allow navigation)
    // e.preventDefault();

    // Find the arrow inside this link
    const arrow = this.querySelector('.header__arrow');

    // Toggle the rotated class
    arrow.classList.toggle('rotated');
  });
});
