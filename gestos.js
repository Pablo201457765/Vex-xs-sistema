document.addEventListener("DOMContentLoaded", () => {
  const boot = document.getElementById("boot-screen");
  const lock = document.getElementById("lock-screen");
  const home = document.getElementById("home-screen");

  // Boot screen -> Lock screen after 30s con fade azul
  setTimeout(() => {
    boot.classList.add("hidden");
    lock.style.background = 'rgba(0,0,255,0.2)'; // azul chulo
    lock.classList.remove("hidden");
  }, 30000);

  // Unlock gesture
  let startY = null;
  lock.addEventListener("touchstart", e => { startY = e.touches[0].clientY; });
  lock.addEventListener("touchend", e => {
    const endY = e.changedTouches[0].clientY;
    if (startY - endY > 50) {
      lock.classList.add("hidden");
      home.classList.remove("hidden");
    }
  });
});
