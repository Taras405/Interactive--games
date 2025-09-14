import lupa from './img/lupa.png'
import lupaTwo from './img/lupaTwo.png'
const input = document.createElement('input')
console.log(input);
input.classList.add('input__center__section1')
input.placeholder = 'Введіть рік народження'
input.setAttribute('type', 'text')


const img = document.createElement('img')
img.src = lupa;
img.alt = 'lupa'

const button = document.createElement('button')
button.classList.add('button__center__section1')
button.setAttribute('type', 'button')
button.appendChild(img)
console.log(button);

const form = document.querySelector('.form__center__section1')
const divCenter = document.querySelector('.div__center__section1')
const formEnd = document.querySelector('.form__end__section1')


form.appendChild(input)
form.appendChild(button)

const inputGuessNumber = document.createElement('input')
inputGuessNumber.classList.add('input__end__section1')
inputGuessNumber.placeholder = 'Введіть число'
inputGuessNumber.setAttribute('type', 'text')

const imgLupa = document.createElement('img')
imgLupa.src = lupaTwo;
imgLupa.alt = 'lupa'

const buttonGuessNumber = document.createElement('button')
buttonGuessNumber.classList.add('button__end__section1')
buttonGuessNumber.setAttribute('type', 'button')
buttonGuessNumber.appendChild(imgLupa)


const divEnd = document.querySelector('.div__end__section1')

formEnd.appendChild(inputGuessNumber)
formEnd.appendChild(buttonGuessNumber)

