function moveTo(index) {
    const mainImage = document.getElementById("main-image");
    const extraContent = document.getElementById("extra-content");

    const backgrounds = [
        "/assets/img/banner1.jpg",      // INICIO
        "/assets/img/banner2.jpg",     // QUIENES SOMOS
        "/assets/img/banner3.jpg",   // PRODUCTOS
        "/assets/img/banner4.jpg",     // OFERTAS
        "/assets/img/banner5.jpg",    // SERVICIO TÉCNICO
        "/assets/img/banner6.jpg"     // CONTACTO
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
