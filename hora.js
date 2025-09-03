function actualizarHora() {
    const lockTime = document.getElementById("lock-time");
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2,'0');
    const minutos = ahora.getMinutes().toString().padStart(2,'0');
    lockTime.textContent = `${horas}:${minutos}`;
}
setInterval(actualizarHora, 1000);
actualizarHora();
