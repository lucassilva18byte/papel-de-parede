// Brilho pulsante da lua (efeito cinematográfico)
setInterval(() => {
  document.querySelector(".background").style.filter =
    `brightness(${0.85 + Math.random()*0.1}) contrast(1.1)`;
}, 2000);