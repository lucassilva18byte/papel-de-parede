const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height * 0.7 + Math.random() * 100;
    this.size = Math.random() * 4 + 1;
    this.speedY = Math.random() * 1 + 0.5;
    this.opacity = 1;
  }

  update() {
    this.y -= this.speedY;
    this.opacity -= 0.005;
  }

  draw() {
    ctx.fillStyle = `rgba(170,0,255,${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  for (let i = 0; i < 150; i++) {
    particlesArray.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particlesArray.forEach((particle, index) => {
    particle.update();
    particle.draw();

    if (particle.opacity <= 0) {
      particlesArray.splice(index, 1);
      particlesArray.push(new Particle());
    }
  });

  requestAnimationFrame(animate);
}

init();
animate();