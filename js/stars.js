function drawStars() {
    const canvas = document.querySelector(".overlay-page__star-canvas")
    const context = canvas.getContext("2d")
    const stars = 300;

    for (let i = 0; i < stars; i++) {
        let x = Math.floor(Math.random() * canvas.offsetWidth);
        let y = Math.floor(Math.random() * canvas.offsetHeight);
        context.fillStyle = "white";
        context.fillRect(x,y,1,1);
    }
}

export { drawStars }