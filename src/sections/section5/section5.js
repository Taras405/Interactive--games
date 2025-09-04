const football = document.querySelector('.section5');
football.innerHTML = `
    <h2 class="titleGame">Футбол</h2>
    <canvas id="footballGame" width="720px" height="220px"></canvas>
`;

const canvas = document.getElementById('footballGame');
const ctx = canvas.getContext('2d');
// width: 720px;
// height: 220px;

canvas.style = `
  display: block;
  margin: 0 auto;
  border-radius: 37px;
  border: 2px solid black;
  background-color: #5abb58;
`;

const ball = {
  x: 92,
  y: canvas.height / 2,
  radius: 20,
  dx: 0,
  dy: 0,
};

import ballSrc from './img/ball.svg';

const ballImg = new Image();
ballImg.src = ballSrc;

function drawBall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    ballImg,
    ball.x - ball.radius,
    ball.y - ball.radius,
    ball.radius * 2,
    ball.radius * 2
  );
}

function update() {
  ball.x += ball.dx;
  ball.y += ball.dy;

  ball.dx *= 0.98;
  ball.dy *= 0.98;

  if (Math.abs(ball.dx) < 0.05) ball.dx = 0;
  if (Math.abs(ball.dy) < 0.05) ball.dy = 0;

  if (ball.x - ball.radius < 0) {
    ball.x = ball.radius;
    ball.dx *= -0.7;
  }
  if (ball.x + ball.radius > canvas.width) {
    ball.x = canvas.width - ball.radius;
    ball.dx *= -0.7;
  }
  if (ball.y - ball.radius < 0) {
    ball.y = ball.radius;
    ball.dy *= -0.7;
  }
  if (ball.y + ball.radius > canvas.height) {
    ball.y = canvas.height - ball.radius;
    ball.dy *= -0.7;
  }

  drawBall();
  requestAnimationFrame(update);
}

// Удар по м’ячу
canvas.addEventListener('click', e => {
  const rect = canvas.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const clickY = e.clientY - rect.top;

  const dx = clickX - ball.x;
  const dy = clickY - ball.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist <= ball.radius) {
    const angle = Math.atan2(dy, dx) + Math.PI;

    const maxPower = 8;
    const strength = 1 - dist / ball.radius;
    const power = maxPower * strength;

    ball.dx = Math.cos(angle) * power;
    ball.dy = Math.sin(angle) * power;
  }
});

ballImg.onload = () => {
  update();
};
