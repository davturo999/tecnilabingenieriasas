function moveTo(index) {
    const mainImage = document.getElementById("main-image");
    const extraContent = document.getElementById("extra-content");

    const backgrounds = [
        "/assets/img/banner1.jpg",      // INICIO
        "/assets/img/contacto1.jpg",     // QUIENES SOMOS
        "/assets/img/contacto1.jpg",   // PRODUCTOS
        "/assets/img/contacto1.jpg",     // OFERTAS
        "/assets/img/contacto1.jpg",    // SERVICIO TÉCNICO
        "/assets/img/contacto1.jpg"     // CONTACTO
    ];

    const extraBackgrounds = [
        "/assets/img/banner1.jpg",
        "/assets/img/banner2.jpg",
        "/assets/img/banner2.jpg",
        "/assets/img/banner2.jpg",
        "/assets/img/banner2.jpg",
        "/assets/img/banner2.jpg"
    ];

    if (index === 0) {
        // Modo inicio (pantalla completa)
        mainImage.style.flex = "1";
        extraContent.style.flex = "0";
    } else {
        // Modo seccion dividida
        mainImage.style.flex = "0.3";
        extraContent.style.flex = "0.7";
    }

    mainImage.style.backgroundImage = `url('${backgrounds[index]}')`;
    extraContent.style.backgroundImage = `url('${extraBackgrounds[index]}')`;
}
