/* Reset básico */
body, html {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden; /* Evita el scroll si hay desbordamiento */
}

/* Header */
header {
    width: 100%;
    height: 100px;
    background-color: #1E3A5F;
    position: fixed;
    left: 0;
    top: 0;
}

/* Footer */
footer {
    width: 100%;
    height: 50px;
    background-color: #12243F;
    bottom: 0;
    left: 0;
    color: white;
    position: fixed;
    text-align: center;
    line-height: 50px;
}

/* Botones de navegación */
.button-container {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 15px;
    z-index: 1001;
}

.button-container button {
    padding: 10px 15px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    background: #64b5f6;
    color: white;
    border-radius: 2px;
    transition: background 0.3s;
}

.button-container button:hover {
    background: #1565c0;
}

/* Navbar */
.navbar {
    width: 100%;
    height: 80px;
    background-color: #1E3A5F;
    position: fixed;
    top: 0;
    z-index: 1000;
}

/* Contenedor principal */
.content {
    display: flex;
    width: 100%;
    height: calc(100vh - 150px); /* Ajusta al tamaño exacto entre header (100px) y footer (50px) */
    transition: all 0.5s ease-in-out;
}

/* Imagen principal (70%) */
.image-section {
    flex: 0.7;
    background: url('/assets/img/banner1.jpg') center/cover no-repeat;
    transition: all 0.5s ease-in-out;
}

/* Imagen extra (30%) */
.extra-section {
    flex: 0.3;
    background: url('/assets/img/contacto1.jpg') center/cover no-repeat;
    transition: all 0.5s ease-in-out;
    order: -1; /* Mueve la imagen pequeña a la izquierda */

    /* Ajuste para que la imagen pequeña no se desborde */
    background-size: contain;  /* Ajusta sin recortar */
    background-position: center;
    background-repeat: no-repeat;
}
