function moveTo(index) {
    const mainImage = document.getElementById("main-image");
    const extraContent = document.getElementById("extra-content");

    // Imagen pequeña (30%) fija
    const extraBackground = "/assets/img/contacto1.jpg";

    // Imagen grande (70%) cambia según el botón
    const mainBackgrounds = [
        "/assets/img/banner1.jpg",
        "/assets/img/banner2.jpg",
        "/assets/img/banner3.jpg",
        "/assets/img/banner4.jpg",
        "/assets/img/banner5.jpg",
        "/assets/img/banner1.jpg"
    ];

    if (index === 0) {
        // Si es "Inicio", la imagen grande ocupa todo el ancho
        mainImage.style.flex = "1";
        extraContent.style.flex = "0";
    } else {
        // Si es cualquier otro botón, la imagen grande se reduce y la pequeña aparece a la IZQUIERDA
        mainImage.style.flex = "0.7";
        extraContent.style.flex = "0.3";
        extraContent.style.order = "-1"; // Esto mueve la imagen pequeña a la izquierda
    }

    mainImage.style.backgroundImage = `url('${mainBackgrounds[index]}')`;
    extraContent.style.backgroundImage = `url('${extraBackground}')`;
}

// Mostrar banner1 al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    moveTo(0);
});
