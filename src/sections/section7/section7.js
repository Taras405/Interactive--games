const sliderList = document.querySelector('.team-slider__list');
const slides = document.querySelectorAll('.team-slider__item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dots');

let currentIndex = 0;

slides.forEach((_, index) => {
  const dot = document.createElement('li');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.team-slider__dots li');

function showSlide(index) {
  sliderList.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === slides.length - 1;
}

function goToSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    showSlide(currentIndex);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    showSlide(currentIndex);
  }
});

showSlide(currentIndex);
