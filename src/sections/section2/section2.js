const CHOICES = ["rock", "paper", "scissors"];
const choiceEls = document.querySelectorAll(".choice");
const result = document.querySelector(".result");
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