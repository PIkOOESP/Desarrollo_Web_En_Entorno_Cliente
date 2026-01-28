document.addEventListener("DOMContentLoaded", function (e){
    boton = document.getElementById("boton_flori");
    boton_borrar = document.getElementById("boton_borrar");
    boton_filas = document.getElementById("boton_filas");

    const tabla = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    boton.addEventListener("click", function(e){
        let formulario = document.getElementById("formulario");
        formulario.innerHTML = "<input type='text' name='nombre' id='nombre' placeholder='Nombre'> <br> <input type='text' name='ubicacion' id='ubicacion' placeholder='Ubicacion'> <br> <input type='number' name='ejemplares' id='ejemplares' placeholder='Ejemplares'> <br> <input type='text' name='flor' id='flor' placeholder='Flor'> <br> <button onclick=''>Enviar</button>";
    })

    document.addEventListener("submit", function(e){
        e.preventDefault()
        let nombre = document.getElementById("nombre").value;
        let ubicacion = document.getElementById("ubicacion").value;
        let ejemplares = document.getElementById("ejemplares").value;
        let flor = document.getElementById("flor").value;
        let lista_cabezera = ["Nombre", "Ubicacion", "Ejemplares", "Flor", "Borrar"];
        let lista_datos = [nombre, ubicacion, ejemplares, flor];

        if(tabla.childNodes.length < 1){
            const tr_head = document.createElement("tr");
            lista_cabezera.forEach(cabeza =>{
                const th = document.createElement("th");
                th.textContent = cabeza;
                tr_head.appendChild(th);
            })
            thead.appendChild(tr_head);
            tabla.appendChild(thead);
        }

        const tr = document.createElement("tr");
        lista_datos.forEach(dato => {
            const th = document.createElement("th");
            th.textContent = dato;
            tr.appendChild(th)
        });
        tbody.appendChild(tr)
        tabla.appendChild(tbody)
        document.body.appendChild(tabla);
    })

    boton_borrar.addEventListener("click", function(e){
        tbody.removeChild(tbody.lastChild)
        tabla.appendChild(tbody)
        document.body.appendChild(tabla);
    })

    boton_filas.addEventListener("click",function (e){
        alert(tbody.childNodes.length)
    })
})