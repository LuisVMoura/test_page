function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw"; // Coloca o coração em uma posição aleatória no eixo X
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Define uma duração aleatória para a animação

    document.getElementById("hearts-container").appendChild(heart);

    // Remove o coração após a animação terminar
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Cria um coração a cada 300ms
setInterval(createHeart, 300);
