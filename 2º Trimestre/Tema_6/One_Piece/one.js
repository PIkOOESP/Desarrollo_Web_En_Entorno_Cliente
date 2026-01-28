document.addEventListener("DOMContentLoaded", function() {
    let boton_generador = document.getElementById("generador");
    let boton_limpiador = document.getElementById("limpiador");

    const div_imagenes = document.createElement("div");

    boton_generador.addEventListener("click", function() {
        const form = document.createElement("form");
        form.id = "formulario";

        const select = document.createElement("select");
        select.id = "seleccion";

        const opciones = ["Luffy", "Zoro", "Nami", "Sanji"];

        opciones.forEach(function(opcion) {
            let option = document.createElement("option");
            option.value = opcion.toLowerCase();
            option.text = opcion;
            select.appendChild(option);
        });

        document.body.appendChild(document.createElement("br"));
        form.appendChild(select);
        form.appendChild(document.createElement("button")).textContent = "Enviar";
        document.body.appendChild(form);
        document.body.appendChild(document.createElement("br"));
    },{once: true});

    document.addEventListener("submit", function(event) {
        event.preventDefault();

        let seleccion = document.getElementById("seleccion").value;
        let imagen = document.createElement("div");
        imagen.className = seleccion;

        div_imagenes.appendChild(imagen);
        document.body.appendChild(div_imagenes);
    });

    boton_limpiador.addEventListener("click", function() {
        div_imagenes.removeChild(div_imagenes.lastChild);
    });
});