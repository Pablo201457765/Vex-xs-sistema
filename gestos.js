document.addEventListener("DOMContentLoaded", () => {
  const boot = document.getElementById("boot-screen");
  const lock = document.getElementById("lock-screen");
  const home = document.getElementById("home-screen");

  // Boot screen -> Lock screen after 30s
  setTimeout(() => {
    boot.classList.add("hidden");
    lock.classList.remove("hidden");
  }, 30000);

  // Unlock gesture
  let startY = null;
  document.getElementById("lock-screen").addEventListener("touchstart", e => {
    startY = e.touches[0].clientY;
  });
  document.getElementById("lock-screen").addEventListener("touchend", e => {
    const endY = e.changedTouches[0].clientY;
    if (startY - endY > 50) { // swipe up
      lock.classList.add("hidden");
      home.classList.remove("hidden");
    }
  });
});
