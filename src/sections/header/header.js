// document.addEventListener('DOMContentLoaded', () => {
//   const toggle = document.querySelector('.theme-toggle');
//   const body = document.body;

//   // Check system preference or saved state
//   const isDarkMode = localStorage.getItem('darkMode') === 'true' ||
//                      window.matchMedia('(prefers-color-scheme: dark)').matches;

//   if (isDarkMode) {
//     toggle.classList.add('dark');
//     body.classList.add('dark-mode');
//   }

//   toggle.addEventListener('click', () => {
//     toggle.classList.toggle('dark');
//     body.classList.toggle('dark-mode');

//     // Save preference
//     localStorage.setItem('darkMode', toggle.classList.contains('dark'));
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.theme-toggle');
  const body = document.body;

  const isDarkMode =
    localStorage.getItem('darkMode') === 'true' ||
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (isDarkMode) {
    toggleButton.classList.add('dark');
    body.classList.add('dark-mode');
  }

  toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('dark');
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', toggleButton.classList.contains('dark'));
  });
});
