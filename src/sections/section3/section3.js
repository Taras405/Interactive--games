let operation = null;

document.querySelectorAll('.calc__ops .calc__btn').forEach(btn => {
  btn.addEventListener('click', () => {
    operation = btn.dataset.op;

    document
      .querySelectorAll('.calc__ops .calc__btn')
      .forEach(x => x.classList.remove('active'));

    btn.classList.add('active');
  });
});

document.getElementById('eq').addEventListener('click', () => {
  const a = parseFloat(document.getElementById('num1').value);
  const b = parseFloat(document.getElementById('num2').value);
  const out = document.getElementById('calcResult');

  if (isNaN(a) || isNaN(b)) {
    out.textContent = 'Введіть числа!';
    return;
  }

  let res;
  switch (operation) {
    case '+':
      res = a + b;
      break;
    case '-':
      res = a - b;
      break;
    case '*':
      res = a * b;
      break;
    case '/':
      res = b !== 0 ? a / b : 'Ділення на 0';
      break;
    default:
      res = 'Оберіть операцію';
  }

  out.textContent = res;
});

document.getElementById('timeBtn').addEventListener('click', () => {
  const m = parseInt(document.getElementById('minutes').value, 10);
  const out = document.getElementById('timeResult');

  if (isNaN(m)) {
    out.textContent = 'Введіть хвилини!';
    return;
  }

  const days = Math.floor(m / 1440);
  const hours = Math.floor((m % 1440) / 60);
  const mins = m % 60;

  out.textContent = `${days} дн. ${String(hours).padStart(2, '0')}:${String(
    mins
  ).padStart(2, '0')}`;
});


