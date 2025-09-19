const scientistsHtml = document.querySelector('.section8');
scientistsHtml.innerHTML = `
    <div class="container">
    <h2 class="titleGame">Обери вченого</h2>
    <form class="scientists">
      <div class="scientists__slots">
        <div class="slot"></div>
        <div class="slot"></div>
        <div class="slot"></div>
        <div class="slot"></div>
        <div class="slot"></div>
        <div class="slot"></div>
        <div class="slot"></div>
        <div class="slot"></div>
        <div class="slot"></div>
        <div class="slot"></div>
        <div class="slot"></div>
        <div class="slot"></div>
      </div>
      <div class="scientists__tasks">
        <button class="task-btn" type="button">
          Які вчені народилися в 19 ст.
        </button>
        <button class="task-btn" type="button">
          Знайти рік народження Albert Einshtein
        </button>
        <button class="task-btn" type="button">
          Відсортувати вчених за алфавітом
        </button>
        <button class="task-btn" type="button">
          Знайти вчених, прізвища яких починаються на літеру “С”
        </button>
        <button class="task-btn" type="button">
          Відсортувати вчених за кількістю прожитих років
        </button>
        <button class="task-btn" type="button">
          Видалити всіх вчених, ім’я яких починається на “А”
        </button>
        <button class="task-btn" type="button">
          Знайти вченого, який народився найпізніше
        </button>
        <button class="task-btn" type="button">
          Знайти вченого, який прожив найдовше і вченого, який прожив найменше
        </button>
        <button class="task-btn" type="button">
          Знайти вчених, в яких співпадають перші літери імені і прізвища
        </button>
      </div>
    </form>
  </div>
`;

const scientists = [
  {
    name: 'Albert',
    surname: 'Einstein',
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: 'Isaac',
    surname: 'Newton',
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: 'Galileo',
    surname: 'Galilei',
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: 'Marie',
    surname: 'Curie',
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: 'Johannes',
    surname: 'Kepler',
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: 'Nicolaus',
    surname: 'Copernicus',
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: 'Max',
    surname: 'Planck',
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: 'Katherine',
    surname: 'Blodgett',
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: 'Ada',
    surname: 'Lovelace',
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: 'Sarah E.',
    surname: 'Goode',
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: 'Lise',
    surname: 'Meitner',
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: 'Hanna',
    surname: 'Hammarström',
    born: 1829,
    dead: 1909,
    id: 12,
  },
];

const slots = document.querySelectorAll('.slot');
const buttons = document.querySelectorAll('.task-btn');

function renderScientists(list) {
  slots.forEach(slot => (slot.textContent = ''));
  list.forEach((sci, i) => {
    if (slots[i]) {
      slots[
        i
      ].textContent = `${sci.name} ${sci.surname}\n${sci.born} – ${sci.dead}`;
    }
  });
}

function renderText(text) {
  slots.forEach(slot => (slot.textContent = ''));
  slots[0].textContent = text;
}

const actions = [
  () => scientists.filter(s => s.born >= 1801 && s.born <= 1900),

  () =>
    renderText(
      scientists.find(s => s.name === 'Albert' && s.surname === 'Einstein').born
    ),

  () => [...scientists].sort((a, b) => a.surname.localeCompare(b.surname)),

  () => scientists.filter(s => s.surname.startsWith('C')),

  () => [...scientists].sort((a, b) => a.dead - a.born - (b.dead - b.born)),

  () => scientists.filter(s => !s.name.startsWith('A')),

  () => {
    const latest = scientists.reduce((a, b) => (a.born > b.born ? a : b));
    return [latest];
  },
  () => {
    const longest = scientists.reduce((a, b) =>
      a.dead - a.born > b.dead - b.born ? a : b
    );
    const shortest = scientists.reduce((a, b) =>
      a.dead - a.born < b.dead - b.born ? a : b
    );
    return [longest, shortest];
  },

  () =>
    scientists.filter(
      s => s.name[0].toLowerCase() === s.surname[0].toLowerCase()
    ),

  // сума років життя
  // () => renderText(scientists.reduce((acc, s) => acc + (s.dead - s.born), 0)),

  // видалити хто народився у 15–17 ст
  // () => scientists.filter(s => s.born >= 1701),

  // чи всі жили в 19 ст
  // () =>
  //   renderText(
  //     scientists.every(s => s.born >= 1801 && s.born <= 1900)
  //       ? 'Так, всі'
  //       : 'Ні, не всі'
  //   ),
];

buttons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    const result = actions[i]();
    if (Array.isArray(result)) {
      renderScientists(result);
    }
  });
});
