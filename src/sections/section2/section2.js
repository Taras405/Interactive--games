const section = document.createElement('section');
section.className = 'container section2';

const h1 = document.createElement('h1');
h1.className = 'game__title';
h1.textContent = 'Камінь - ножиці - папір';
section.appendChild(h1);

const ul = document.createElement('ul');
ul.className = 'list__choices';

const choices = [
  { choice: 'rock', img: './sections/section2/img/rock.svg', alt: 'Камінь' },
  { choice: 'scissors', img: './sections/section2/img/scissors.svg', alt: 'Ножиці' },
  { choice: 'paper', img: './sections/section2/img/paper.svg', alt: 'Папір' }
];

choices.forEach(({ choice, img, alt }) => {
  const li = document.createElement('li');
  li.className = 'item__choice';
  li.setAttribute('data-choice', choice);

  const image = document.createElement('img');
  image.src = img;
  image.alt = alt;

  li.appendChild(image);
  ul.appendChild(li);
});
section.appendChild(ul);

const resultDiv = document.createElement('div');
resultDiv.className = 'game__result';
resultDiv.id = 'result';
resultDiv.textContent = 'Зробіть вибір!';
section.appendChild(resultDiv);

const scoreboardDiv = document.createElement('div');
scoreboardDiv.className = 'game__scoreboard';

const scoreTitle = document.createElement('p');
scoreTitle.textContent = 'Рахунок:';
scoreboardDiv.appendChild(scoreTitle);

const computerScore = document.createElement('p');
computerScore.innerHTML = `Комп'ютер - <span id="computer-score">0</span>`;
scoreboardDiv.appendChild(computerScore);

const playerScore = document.createElement('p');
playerScore.innerHTML = `Ви - <span id="player-score">0</span>`;
scoreboardDiv.appendChild(playerScore);

section.appendChild(scoreboardDiv);

const button = document.createElement('button');
button.className = 'game__btn';
button.type = 'button';
button.textContent = 'Варіант комп\'ютера';
button.onclick = function() { playComputer(); };
section.appendChild(button);

// Append to body or a specific





const CHOICES = ["rock", "paper", "scissors"];
const choiceEls = document.querySelectorAll(".item__choice");
const result = document.querySelector(".game__result");
const computerScore = document.getElementById("computer-score");
const playerScore = document.getElementById("player-score");

let playerScoreValue = 0;
let computerScoreValue = 0;
let playerChoice = null;

choiceEls.forEach((el) => {
  el.addEventListener("click", () => {
    playerChoice = el.dataset.choice;
    result.textContent = "Натисніть 'Варіант комп'ютера'";
    result.style.color = "black";
  });
});

function playComputer() {
  if (!playerChoice) {
    result.textContent = "Спочатку зробіть вибір!";
    result.style.color = "red";
    return;
  }

  const computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
  let outcome = "";
  let color = "black";

  if (playerChoice === computerChoice) {
    outcome = "Нічия!";
  } else {
    switch (playerChoice) {
      case "rock":
        outcome = computerChoice === "scissors" ? "Ви виграли!" : "Комп'ютер виграв!";
        break;
      case "paper":
        outcome = computerChoice === "rock" ? "Ви виграли!" : "Комп'ютер виграв!";
        break;
      case "scissors":
        outcome = computerChoice === "paper" ? "Ви виграли!" : "Комп'ютер виграв!";
        break;
    }
    if (outcome === "Ви виграли!") {
      playerScoreValue++;
      playerScore.textContent = playerScoreValue;
      color = "green";
    } else if (outcome === "Комп'ютер виграв!") {
      computerScoreValue++;
      computerScore.textContent = computerScoreValue;
      color = "red";
    }
  }

  result.textContent = `Ви: ${playerChoice}, Комп'ютер: ${computerChoice}. ${outcome}`;
  result.style.color = color;

  playerChoice = null;
}

window.playComputer = playComputer;