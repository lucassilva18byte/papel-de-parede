const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Partículas da fogueira
class Particle {
    constructor(x, y, size, color, speedX, speedY, life) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
        this.life = life;
        this.maxLife = life;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
        this.size *= 0.97;
    }
    draw() {
        ctx.globalAlpha = this.life / this.maxLife;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

let particles = [];

function createParticles() {
    const fogueira = document.querySelector('.fogueira');
    const rect = fogueira.getBoundingClientRect();
    const x = rect.left + rect.width/2;
    const y = rect.top + rect.height/2;

    for (let i = 0; i < 3; i++) {
        particles.push(new Particle(
            x + (Math.random()-0.5)*20,
            y,
            Math.random()*5+3,
            'orange',
            (Math.random()-0.5)*1,
            -Math.random()*2,
            60
        ));
    }
}

function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    if(particles.length < 50) createParticles();

    particles.forEach((p, index)=>{
        p.update();
        p.draw();
        if(p.life <= 0 || p.size < 0.5) particles.splice(index,1);
    });

    requestAnimationFrame(animate);
}

animate();