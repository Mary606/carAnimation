function play() {
    const car = document.querySelector('.car');
    car.style.animationPlayState = 'running'; 

    const mensagem = document.querySelector('.msg');
    mensagem.textContent = "Ao infinito e além 🚗💨";
    mensagem.style.color = "red"; 
}

function pause() {
    const car = document.querySelector('.car');
    car.style.animationPlayState = 'paused'; 

    const mensagem = document.querySelector('.msg');
    mensagem.textContent = "O carro parou! ⛔";
    mensagem.style.color = "red";
}

