const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

// Criar partículas
function createParticles() {
  for (let i = 0; i < 120; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() * 300 - 150),
      y: canvas.height * 0.75 + (Math.random() * 50),
      size: Math.random() * 4 + 1,
      speedY: Math.random() * 1 + 0.5,
      opacity: Math.random(),
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p) => {
    ctx.beginPath();
    ctx.fillStyle = `rgba(150, 0, 255, ${p.opacity})`;
    ctx.shadowBlur = 15;
    ctx.shadowColor = "purple";
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    p.y -= p.speedY;
    p.opacity -= 0.002;

    if (p.opacity <= 0) {
      p.y = canvas.height * 0.75;
      p.opacity = Math.random();
    }
  });

  requestAnimationFrame(drawParticles);
}

createParticles();
drawParticles();

/* Parallax leve com mouse */
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  document.querySelector(".background").style.transform =
    `translate(${x}px, ${y}px) scale(1.05)`;
});

/* Brilho dinâmico da lua */
setInterval(() => {
  document.querySelector(".background").style.filter =
    `brightness(${0.85 + Math.random()*0.1}) contrast(1.1)`;
}, 3000);