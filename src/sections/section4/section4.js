import dino_2 from './img/dino2.jpg';
import dino_3 from './img/dino3.jpg';
import cactus from './img/cactus.jpg';
import pterodactyl from './img/Pterodactyl_Google.jpg';
import ground from './img/ground.png';
// Google Dinosaur Game Implementation

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const gameOverElement = document.getElementById('game-over');

// Game variables
let distance = 0;
let gameRunning = false;
let gameOver = false;

// Dinosaur properties
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

// Obstacles array
let obstacles = [];

// Images
const images = {};
const imageNames = [
  'dino1',
  'dino2',
  'cactus1',
  'cactus2',
  'pterodactyl',
  'ground',
];

// Load images from img folder
function loadImages() {
  const imgFiles = [
    dino_2, // dino1
    dino_3, // dino2
    cactus, // cactus1
    cactus, // cactus2
    pterodactyl, // pterodactyl
    ground, // ground
  ];

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

// Start game
function startGame() {
  gameRunning = true;
  gameOver = false;
  distance = 0;
  dino.y = 200; // moved up by 10px
  dino.velocityY = 0;
  dino.isJumping = false;
  obstacles = [];
  gameOverElement.style.display = 'none';
  gameLoop();
}

// Game loop
function gameLoop() {
  if (!gameRunning) return;

  update();
  draw();

  if (!gameOver) {
    requestAnimationFrame(gameLoop);
  }
}

// Update game state
function update() {
  // Update dinosaur
  dino.velocityY += dino.gravity;
  dino.y += dino.velocityY;

  // Ground collision
  if (dino.y >= 290) {
    // moved up by 10px
    dino.y = 290;
    dino.velocityY = 0;
    dino.isJumping = false;
  }

  // Update dinosaur animation
  dino.frameCount++;
  if (dino.frameCount % 10 === 0) {
    dino.frame = (dino.frame + 1) % 2;
  }

  // Generate obstacles
  if (Math.random() < 0.01) {
    const obstacleType = Math.random() < 0.7 ? 'cactus' : 'pterodactyl';
    const obstacle = {
      x: canvas.width,
      y: obstacleType === 'cactus' ? 310 : 240, // moved up by 10px
      width: 30,
      height: obstacleType === 'cactus' ? 40 : 30,
      type: obstacleType,
      speed: 5,
    };
    obstacles.push(obstacle);
  }

  // Update obstacles
  obstacles.forEach((obstacle, index) => {
    obstacle.x -= obstacle.speed;

    // Remove off-screen obstacles
    if (obstacle.x + obstacle.width < 0) {
      obstacles.splice(index, 1);
    }

    // Collision detection
    if (checkCollision(dino, obstacle)) {
      endGame();
    }
  });

  // Update distance (increments every frame)
  distance += 0.1;

  scoreElement.textContent = Math.floor(distance);
}

// Draw game
function draw() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw ground
  if (images.ground) {
    // Draw ground at bottom of canvas, adjust y to position ground image properly
    const groundY = canvas.height - images.ground.height - 10; // moved up by 10px
    ctx.drawImage(
      images.ground,
      0,
      groundY,
      canvas.width,
      images.ground.height
    );
  }

  // Draw dinosaur
  const dinoImg = dino.frame === 0 ? images.dino1 : images.dino2;
  if (dinoImg) {
    ctx.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
  }

  // Draw obstacles
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

// Check collision
function checkCollision(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  );
}

// End game
function endGame() {
  gameRunning = false;
  gameOver = true;
  gameOverElement.style.display = 'block';
}

// Handle keyboard input
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

// Initialize game
loadImages();
