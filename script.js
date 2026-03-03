const scene = document.querySelector(".scene");

document.addEventListener("mousemove", (e) => {
  let x = (e.clientX / window.innerWidth - 0.5) * 10;
  let y = (e.clientY / window.innerHeight - 0.5) * 10;

  scene.style.transform = `translate(${x}px, ${y}px)`;
});