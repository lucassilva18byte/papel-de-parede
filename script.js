// Pequeno efeito extra de brilho dinâmico na lua
setInterval(() => {
  const moon = document.querySelector(".moon");
  moon.style.boxShadow = `0 0 ${50 + Math.random()*20}px rgba(255,255,255,0.7)`;
}, 1000);