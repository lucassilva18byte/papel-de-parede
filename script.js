const bg = document.getElementById("bg");

document.addEventListener("mousemove", e=>{
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    bg.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
});

/* Partículas mágicas */

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){
    particles.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        size:Math.random()*2 + 1,
        speedY:Math.random()*0.4 + 0.1,
        color: Math.random() > 0.5 
            ? "rgba(255,215,150,0.6)" 
            : "rgba(170,120,255,0.6)"
    });
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
        ctx.fillStyle=p.color;
        ctx.fill();

        p.y -= p.speedY;

        if(p.y < 0){
            p.y = canvas.height;
            p.x = Math.random()*canvas.width;
        }
    });

    requestAnimationFrame(animate);
}

animate();