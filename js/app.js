// ========================================
// FUNCIONALIDADES DE PASSION COLOMBIA
// ========================================


// 1. VALIDAR EL FORMULARIO DE INICIO DE SESIÓN

const formularioLogin = document.getElementById("formulario-login");

if (formularioLogin) {
    formularioLogin.addEventListener("submit", function (evento) {
        evento.preventDefault();

        // Obtener los valores introducidos por el usuario.
        const correo = document.getElementById("usuario").value.trim();
        const contrasena = document.getElementById("contrasena").value;

        // Comprobar que los campos no estén vacíos.
        if (correo === "" || contrasena.trim() === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Continuar hacia Home.
        window.location.href = "home.html";
    });
}

// 2. OPCIÓN PARA RECUPERAR LA CONTRASEÑA

const enlaceRecuperar = document.getElementById("enlace-recuperar");

if (enlaceRecuperar) {

    enlaceRecuperar.addEventListener("click", function (evento) {

        evento.preventDefault();

        alert(
            "La recuperación de contraseña estará disponible " +
            "cuando se implemente el sistema de usuarios."
        );

    });

}







// ========================================
// 3. VALIDAR EL FORMULARIO DE REGISTRO
// ========================================

const formularioRegistro = document.getElementById("formulario-registro");

if (formularioRegistro) {

    formularioRegistro.addEventListener("submit", function (evento) {

        // Evitar que la página se recargue.
        evento.preventDefault();

        // Obtener los datos del formulario.
        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const tipoDocumento = document.getElementById("tipo-documento").value;
        const contrasena = document.getElementById("contrasena-registro").value;
        const aceptaTerminos = document.getElementById("aceptar-terminos").checked;

        // Validar que los campos tengan información.
        if (
            nombre === "" ||
            correo === "" ||
            telefono === "" ||
            tipoDocumento === "" ||
            contrasena.trim() === ""
        ) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Validar la longitud mínima de la contraseña.
        if (contrasena.length < 8) {
            alert("La contraseña debe tener al menos 8 caracteres.");
            return;
        }

        // Comprobar la aceptación de los términos.
        if (!aceptaTerminos) {
            alert("Debes aceptar los términos y condiciones.");
            return;
        }

        // Continuar hacia Home.
        window.location.href = "home.html";

    });

}






// ========================================
// FAVORITOS - DETALLE DE RUTA
// PASSION COLOMBIA
// ========================================

const botonFavorito = document.getElementById("boton-favorito");
const mensajeFavorito = document.getElementById("mensaje-favorito");

if (botonFavorito && mensajeFavorito) {

    botonFavorito.addEventListener("click", function () {

        const estaGuardado = botonFavorito.dataset.favorito === "true";

        if (estaGuardado) {

            botonFavorito.dataset.favorito = "false";
            botonFavorito.textContent = "☆ Agregar a favoritos";

            mensajeFavorito.textContent =
                "El destino se ha eliminado de tus favoritos.";

        } else {

            botonFavorito.dataset.favorito = "true";
            botonFavorito.textContent = "★ Quitar de favoritos";

            mensajeFavorito.textContent =
                "¡Destino agregado a tus favoritos!";

        }

    });

}






// ========================================
// DETALLE DINÁMICO DE DESTINOS
// PASSION COLOMBIA
// ========================================

const parametrosURL = new URLSearchParams(window.location.search);
const destinoSeleccionado = parametrosURL.get("destino");

const destinosPassion = {
    "eje-cafetero": {
        nombre: "Eje Cafetero",
        categoria: "Naturaleza y cultura",
        descripcion: "Descubre paisajes verdes, cafetales, pueblos coloridos y la tradición cafetera de Colombia.",
        ubicacion: "Región cafetera de Colombia",
        calificacion: "4.9"
    },

    "catedral": {
        nombre: "Catedral de Sal de Zipaquirá",
        categoria: "Cultura y patrimonio",
        descripcion: "Explora una impresionante construcción subterránea que combina arquitectura, historia y espiritualidad.",
        ubicacion: "Zipaquirá, Cundinamarca",
        calificacion: "5.0"
    },

    "boyaca": {
        nombre: "Pueblos patrimonio de Boyacá",
        categoria: "Historia y tradición",
        descripcion: "Conoce pueblos llenos de historia, arquitectura tradicional, plazas y cultura colombiana.",
        ubicacion: "Departamento de Boyacá, Colombia",
        calificacion: "4.8"
    }
};

const destinoActual = destinosPassion[destinoSeleccionado];

if (destinoActual) {

    const nombreRuta = document.getElementById("nombre-ruta");
    const descripcionRuta = document.getElementById("descripcion-ruta");
    const ubicacionRuta = document.getElementById("ubicacion-ruta");
    const etiquetaDestino = document.querySelector(".contenido-portada .etiqueta-destino");
    const calificacionRuta = document.querySelector(".contenido-portada .calificacion");



        // Cambiar los colores de la ilustración según el destino
    const imagenDetalle = document.querySelector(".imagen-detalle");

    if (imagenDetalle) {

        imagenDetalle.classList.remove(
            "imagen-cafetero",
            "imagen-catedral",
            "imagen-boyaca"
        );

        if (destinoSeleccionado === "eje-cafetero") {
            imagenDetalle.classList.add("imagen-cafetero");
            imagenDetalle.setAttribute(
                "aria-label",
                "Ilustración del Eje Cafetero"
            );

        } else if (destinoSeleccionado === "catedral") {
            imagenDetalle.classList.add("imagen-catedral");
            imagenDetalle.setAttribute(
                "aria-label",
                "Ilustración de la Catedral de Sal de Zipaquirá"
            );

        } else if (destinoSeleccionado === "boyaca") {
            imagenDetalle.classList.add("imagen-boyaca");
            imagenDetalle.setAttribute(
                "aria-label",
                "Ilustración de los pueblos de Boyacá"
            );
        }
    }





    if (nombreRuta) {
        nombreRuta.textContent = destinoActual.nombre;
    }

    if (descripcionRuta) {
        descripcionRuta.textContent = destinoActual.descripcion;
    }

    if (ubicacionRuta) {
        ubicacionRuta.textContent = destinoActual.ubicacion;
    }

    if (etiquetaDestino) {
        etiquetaDestino.textContent = destinoActual.categoria;
    }

    if (calificacionRuta) {
        calificacionRuta.textContent = "★ " + destinoActual.calificacion + " / 5.0";
    }

}





// ========================================
// CONFIGURACIÓN Y ACCESIBILIDAD
// PASSION COLOMBIA 
// ========================================

const controlContrasteMenos = document.getElementById("contraste-menos");
const controlContrasteMas = document.getElementById("contraste-mas");
const valorContraste = document.getElementById("valor-contraste");

const controlFuenteMenos = document.getElementById("fuente-menos");
const controlFuenteMas = document.getElementById("fuente-mas");
const valorFuente = document.getElementById("valor-fuente");
const valorFuenteVisible = document.getElementById("valor-fuente-visible");

const interruptorLector = document.getElementById("lector-pantalla");
const mensajeAccesibilidad = document.getElementById("mensaje-accesibilidad");

const botonEditarPerfil = document.getElementById("opcion-editar-perfil");
const botonCambiarContrasena = document.getElementById("opcion-contrasena");
const botonNotificaciones = document.getElementById("opcion-notificaciones");


// Ejecutar únicamente en la pantalla de configuración.
if (
    valorContraste &&
    valorFuente &&
    valorFuenteVisible &&
    interruptorLector
) {

    // Valores iniciales y límites.
    let contrasteActual = 3;
    let fuenteActual = 10;

    const contrasteMinimo = 1;
    const contrasteMaximo = 5;

    const fuenteMinima = 10;
    const fuenteMaxima = 20;

    // Recuperar preferencias previamente guardadas.
    try {
        const preferenciasGuardadas = JSON.parse(
            localStorage.getItem("passionColombiaAccesibilidad") || "{}"
        );

        if (
            Number.isFinite(preferenciasGuardadas.contraste) &&
            preferenciasGuardadas.contraste >= contrasteMinimo &&
            preferenciasGuardadas.contraste <= contrasteMaximo
        ) {
            contrasteActual = preferenciasGuardadas.contraste;
        }

        if (
            Number.isFinite(preferenciasGuardadas.fuente) &&
            preferenciasGuardadas.fuente >= fuenteMinima &&
            preferenciasGuardadas.fuente <= fuenteMaxima
        ) {
            fuenteActual = preferenciasGuardadas.fuente;
        }

        interruptorLector.checked =
            preferenciasGuardadas.lectorPantalla === true;

    } catch (error) {
        console.warn("No se pudieron recuperar las preferencias de accesibilidad.");
    }


    // Guardar las preferencias actuales.
    function guardarAccesibilidad() {
        try {
            localStorage.setItem(
                "passionColombiaAccesibilidad",
                JSON.stringify({
                    contraste: contrasteActual,
                    fuente: fuenteActual,
                    lectorPantalla: interruptorLector.checked
                })
            );
        } catch (error) {
            console.warn("No se pudieron guardar las preferencias de accesibilidad.");
        }
    }


    // Actualizar los números y aplicar el tamaño de fuente.
    function actualizarAccesibilidad() {
        valorContraste.textContent = contrasteActual;
        valorFuente.value = fuenteActual;
        valorFuenteVisible.textContent = fuenteActual;

        // Escala el tamaño de la tipografía según el valor seleccionado.
        const escalaFuente = fuenteActual / 10;
        document.documentElement.style.setProperty(
            "--escala-fuente",
            escalaFuente
        );

        document.body.classList.toggle(
            "contraste-medio",
            contrasteActual === 2
        );

        document.body.classList.toggle(
            "contraste-alto",
            contrasteActual >= 4
        );

        guardarAccesibilidad();
    }


    // Disminuir el contraste.
    if (controlContrasteMenos) {
        controlContrasteMenos.addEventListener("click", function () {
            if (contrasteActual > contrasteMinimo) {
                contrasteActual--;
                actualizarAccesibilidad();
            }
        });
    }


    // Aumentar el contraste.
    if (controlContrasteMas) {
        controlContrasteMas.addEventListener("click", function () {
            if (contrasteActual < contrasteMaximo) {
                contrasteActual++;
                actualizarAccesibilidad();
            }
        });
    }


    // Disminuir el tamaño de fuente.
    if (controlFuenteMenos) {
        controlFuenteMenos.addEventListener("click", function () {
            if (fuenteActual > fuenteMinima) {
                fuenteActual--;
                actualizarAccesibilidad();
            }
        });
    }


    // Aumentar el tamaño de fuente.
    if (controlFuenteMas) {
        controlFuenteMas.addEventListener("click", function () {
            if (fuenteActual < fuenteMaxima) {
                fuenteActual++;
                actualizarAccesibilidad();
            }
        });
    }


    // Guardar el estado de la preferencia del lector de pantalla.
    // Este control no activa por sí mismo el lector del sistema operativo.
    interruptorLector.addEventListener("change", function () {
        guardarAccesibilidad();

        if (mensajeAccesibilidad) {
            mensajeAccesibilidad.textContent = interruptorLector.checked
                ? "Preferencia de lector de pantalla activada."
                : "Preferencia de lector de pantalla desactivada.";
        }
    });


    // Inicializar los valores y la apariencia.
    actualizarAccesibilidad();
}


// ========================================
// OPCIONES DE CUENTA
// ========================================

// Estas opciones muestran un aviso porque todavía no están
// conectadas a pantallas de perfil, cambio de contraseña o notificaciones.

if (botonEditarPerfil) {
    botonEditarPerfil.addEventListener("click", function (evento) {
        evento.preventDefault();
        alert("La edición del perfil estará disponible cuando se implemente la gestión de usuarios.");
    });
}

if (botonCambiarContrasena) {
    botonCambiarContrasena.addEventListener("click", function (evento) {
        evento.preventDefault();
        alert("El cambio de contraseña estará disponible cuando se implemente la gestión de usuarios.");
    });
}

if (botonNotificaciones) {
    botonNotificaciones.addEventListener("click", function (evento) {
        evento.preventDefault();
        alert("La configuración de notificaciones estará disponible cuando se implemente esta funcionalidad.");
    });
}