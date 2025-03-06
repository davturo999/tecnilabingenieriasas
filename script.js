function moveTo(index) {
    const mainImage = document.getElementById("main-image");
    const extraContent = document.getElementById("extra-content");

    const backgrounds = [
        "/assets/img/inicio.jpg",      // INICIO
        "/assets/img/quienes.jpg",     // QUIENES SOMOS
        "/assets/img/productos.jpg",   // PRODUCTOS
        "/assets/img/ofertas.jpg",     // OFERTAS
        "/assets/img/servicio.jpg",    // SERVICIO TÉCNICO
        "/assets/img/contacto.jpg"     // CONTACTO
    ];

    const extraBackgrounds = [
        "/assets/img/extra-inicio.jpg",
        "/assets/img/extra-quienes.jpg",
        "/assets/img/extra-productos.jpg",
        "/assets/img/extra-ofertas.jpg",
        "/assets/img/extra-servicio.jpg",
        "/assets/img/extra-contacto.jpg"
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
