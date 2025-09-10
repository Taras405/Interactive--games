const CHOICES = ["камінь", "папір", "ножиці"];
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
    // Highlight selected choice
    choiceEls.forEach(c => c.classList.remove("selected"));
    el.classList.add("selected");
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
  } else if (
    (playerChoice === "камінь" && computerChoice === "ножиці") ||
    (playerChoice === "папір" && computerChoice === "камінь") ||
    (playerChoice === "ножиці" && computerChoice === "папір")
  ) {
    outcome = "Ви виграли!";
    playerScoreValue++;
    playerScore.textContent = playerScoreValue;
    color = "green";
  } else {
    outcome = "Комп'ютер виграв!";
    computerScoreValue++;
    computerScore.textContent = computerScoreValue;
    color = "red";
  }

  result.textContent = `Ви: ${playerChoice}, Комп'ютер: ${computerChoice}. ${outcome}`;
  result.style.color = color;

  // Remove highlight after round
  choiceEls.forEach(c => c.classList.remove("selected"));
  playerChoice = null;
}

window.playComputer = playComputer;