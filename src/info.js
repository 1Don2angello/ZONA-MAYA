// Cerrar el modal al hacer clic fuera o en el botón de cerrar
document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("infoModal");
    var closeButton = document.querySelector(".close-btn");

    closeButton.addEventListener("click", cerrarModal);

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            cerrarModal();
        }
    });
});

// Función para cargar contenido del modal desde un archivo externo
function cargarModal(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var modalContainer = document.getElementById("infoModal");
            modalContainer.innerHTML = this.responseText;
            modalContainer.style.display = "block";
        }
    };
    xhr.send();
}

// Función para decidir qué contenido cargar basado en el ID
function mostrarInformacion(id) {
    switch (id) {
        case "ake":
            cargarModal("./infomodal_ake.html");
            break;
        case "chacmultun":
            cargarModal("./infomodal_chacmultun.html");
            break;
        // ... y así sucesivamente para el resto de las entradas ...
        
        default:
            console.log("No se encontró información para el ID: " + id);
    }
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById("infoModal").style.display = "none";
}
