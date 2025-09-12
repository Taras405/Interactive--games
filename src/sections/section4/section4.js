import dino_2 from './img/dino2.svg';
import dino_3 from './img/dino3.svg';
import cactus from './img/cactus.svg';
import pterodactyl from './img/Pterodactyl_Google.svg';
import ground from './img/ground.png';

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const gameOverElement = document.getElementById('game-over');

let distance = 0;
let gameRunning = false;
let gameOver = false;

const dino = {
  x: 50,
  y: 300,
  width: 50,
  height: 50,
  velocityY: 0,
  gravity: 0.6,
  jumpStrength: -12,
  isJumping: false,
  frame: 0,
  frameCount: 0,
};

let obstacles = [];
const images = {};
const imageNames = [
  'dino1',
  'dino2',
  'cactus1',
  'cactus2',
  'pterodactyl',
  'ground',
];

function loadImages() {
  const imgFiles = [dino_2, dino_3, cactus, cactus, pterodactyl, ground];

  let loadedCount = 0;
  const totalImages = imgFiles.length;

  imgFiles.forEach((file, index) => {
    const img = new Image();
    img.onload = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        startGame();
      }
    };
    console.log(file);
    img.src = `${file}`;
    images[imageNames[index]] = img;
  });
}

function startGame() {
  gameRunning = true;
  gameOver = false;
  distance = 0;
  dino.y = 200;
  dino.velocityY = 0;
  dino.isJumping = false;
  obstacles = [];
  gameOverElement.style.display = 'none';
  gameLoop();
}

function gameLoop() {
  if (!gameRunning) return;

  update();
  draw();

  if (!gameOver) {
    requestAnimationFrame(gameLoop);
  }
}

function update() {
  dino.velocityY += dino.gravity;
  dino.y += dino.velocityY;

  if (dino.y >= 290) {
    dino.y = 290;
    dino.velocityY = 0;
    dino.isJumping = false;
  }

  dino.frameCount++;
  if (dino.frameCount % 10 === 0) {
    dino.frame = (dino.frame + 1) % 2;
  }

  if (Math.random() < 0.01) {
    const obstacleType = Math.random() < 0.7 ? 'cactus' : 'pterodactyl';
    const obstacle = {
      x: canvas.width,
      y: obstacleType === 'cactus' ? 310 : 240,
      width: 30,
      height: obstacleType === 'cactus' ? 40 : 30,
      type: obstacleType,
      speed: 5,
    };
    obstacles.push(obstacle);
  }

  obstacles.forEach((obstacle, index) => {
    obstacle.x -= obstacle.speed;

    if (obstacle.x + obstacle.width < 0) {
      obstacles.splice(index, 1);
    }

    if (checkCollision(dino, obstacle)) {
      endGame();
    }
  });

  distance += 0.1;

  scoreElement.textContent = Math.floor(distance);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (images.ground) {
    const groundY = canvas.height - images.ground.height - 45;
    ctx.drawImage(
      images.ground,
      0,
      groundY,
      canvas.width,
      images.ground.height
    );
  }

  const dinoImg = dino.frame === 0 ? images.dino1 : images.dino2;
  if (dinoImg) {
    ctx.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
  }

  obstacles.forEach(obstacle => {
    let img;
    if (obstacle.type === 'cactus') {
      img = Math.random() < 0.5 ? images.cactus1 : images.cactus2;
    } else {
      img = images.pterodactyl;
    }
    if (img) {
      ctx.drawImage(
        img,
        obstacle.x,
        obstacle.y,
        obstacle.width,
        obstacle.height
      );
    }
  });
}

function checkCollision(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  );
}

function endGame() {
  gameRunning = false;
  gameOver = true;
  gameOverElement.style.display = 'block';
}

document.addEventListener('keydown', e => {
  if (e.code === 'Space') {
    e.preventDefault();
    if (gameOver) {
      startGame();
    } else if (!dino.isJumping) {
      dino.velocityY = dino.jumpStrength;
      dino.isJumping = true;
    }
  }
});

loadImages();
