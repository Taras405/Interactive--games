const section = document.querySelector('.number')

const h2 = document.createElement('h2');
h2.classList.add('numbers__title');
h2.textContent = 'Введіть 3 числа';
const ul = document.createElement('ul');
ul.classList.add('list-number');
for(let i = 1; i <= 3; i++){
    const li = document.createElement('li');
    li.classList.add('item__number');
    const input = document.createElement('input');
    input.classList.add('input__number');
    input.type = 'text';
    input.placeholder = `Введіть число`;
    li.appendChild(input);
    ul.appendChild(li);
}
const p = document.createElement('p');
p.classList.add('number__text');
p.textContent = 'Найбільше число, яке ви ввели - (число)'

section.appendChild(h2);
section.appendChild(ul);
section.appendChild(p);



const inputs = document.querySelectorAll('.input__number');
const result = document.querySelector('.number__result');

inputs.forEach(input => {
    input.addEventListener('input', () =>{
        const values = Array.from(inputs).map(i => parseFloat(i.value) || 0);
        const max = Math.max(...values);
        if(max !== -Infinity){
            result.textContent = `Максимальное число: ${max}`;
        } else {
            result.textContent = 'Введите числа в поля';
        }
    })
})

