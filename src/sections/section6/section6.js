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

