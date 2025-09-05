document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector('[data-action="open-modal"]');
  const closeBtn = document.querySelector('[data-action="close-modal"]');
  const backdrop = document.querySelector(".js-backdrop");

  // Відкрити модалку
  openBtn.addEventListener("click", () => {
    backdrop.classList.add("is-open");
  });

  // Закрити модалку (по кнопці)
  closeBtn.addEventListener("click", () => {
    backdrop.classList.remove("is-open");
  });

  // Закрити модалку (по кліку на бекдроп)
  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) {
      backdrop.classList.remove("is-open");
    }
  });

  // Закрити модалку (по ESC)
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      backdrop.classList.remove("is-open");
    }
  });
});