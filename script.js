let clicks = 0;
const cachorro = document.getElementById('cachorro');
const presente = document.getElementById('presente');
const mensagem = document.getElementById('mensagem');
const campoH = document.getElementById('CAMPOH');

cachorro.addEventListener('click', function() {
    clicks++;
    moveDog();

    if (clicks === 6) {
        setTimeout(() => {
            cachorro.style.display = 'none';
            campoH.style.display = 'none'; // Esconde o texto "CLICK-ME"
            presente.style.display = 'block';
            presente.classList.add('show');
            setTimeout(() => {
                presente.style.display = 'none';
                mensagem.style.display = 'block';
            }, 3000); // Tempo para o presente ficar visível
        }, 500);
    }
});

function moveDog() {
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 100);

    cachorro.style.left = `${randomX}px`;
    cachorro.style.top = `${randomY}px`;

    if (clicks === 6) {
        setTimeout(() => {
            cachorro.style.left = '50%';
            cachorro.style.top = '50%';
            cachorro.style.transform = 'translate(-50%, -50%)';
        }, 500);
    }
}
