let valorGalleta = crearCookie();

document.getElementById("galletica").innerHTML = valorGalleta;

window.onload = function() {
    const form = document.getElementById("formulario");

    form.addEventListener("submit", function(e){
        let valido = true

        if(!validarCreated("created")) valido = false;

        if(!validarCocinero("cocinero")) valido = false;

        if(!validarDestinatario("destinatario")) valido = false;

        if(!validarGramos("gramos")) valido = false;

        if(!validarComposicion("composicion")) valido = false;

        if(!validarCuenta("cuenta","cuentaLimpia")) valido = false;

        if (!valido) {
            e.preventDefault();
            valorGalleta = modificarCookie(valorGalleta);
            document.getElementById("galletica").innerHTML = valorGalleta;
        }
    });
}

function validarCreated(campo){
    const campo1 = document.getElementById(campo);
    const regla = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if (!regla.test(campo1.value)) {
        campo1.style.border="1px solid red";
        return false;
    } else {
        campo1.style.border="1px solid black";
        return true;
    }
}

function validarCocinero(campo){
    const campo1 = document.getElementById(campo);
    const regla = /^[A-Z]{2}\W\d{4}$/;

    if (!regla.test(campo1.value)) {
        campo1.style.border="1px solid red";
        return false;
    } else {
        campo1.style.border="1px solid black";
        return true;
    }
}

function validarDestinatario(campo){
    const campo1 = document.getElementById(campo);
    const regla = /^[A-Z]{2,3}_[a-z]+:\d{4}$/;

    if (!regla.test(campo1.value)) {
        campo1.style.border="1px solid red";
        return false;
    } else {
        campo1.style.border="1px solid black";
        return true;
    }
}

function validarGramos(campo){
    const campo1 = document.getElementById(campo);

    if(campo1.value < 100 || campo1.value > 5000){
        campo1.style.border="1px solid red";
        return false;
    } else {
        campo1.style.border="1px solid black";
        return true;
    }
}

function validarComposicion(campo){
    const campo1 = document.getElementById(campo);
    const regla = /^\d+g([A-Za-z]{1,2}\d?){2}$/;

    if (!regla.test(campo1.value)) {
        campo1.style.border="1px solid red";
        return false;
    } else {
        campo1.style.border="1px solid black";
        return true;
    }
}

function validarCuenta(campo, salida) {
    const campo1 = document.getElementById(campo);
    const salida1 = document.getElementById(salida)
    cuenta = campo1.value;
    const regla = /^[A-Z]{2}\d{2}-\d{12}-\d{4}$/;

    if (!regla.test(cuenta)) return false;

    const [letras, suma, cuentaNum, control] = cuenta.replace(/-/g, "").match(/^([A-Z]{2})(\d{2})(\d{12})(\d{4})$/).slice(1);

    const valorLetras = letras.charCodeAt(0) - 64 + letras.charCodeAt(1) - 64;

    if (parseInt(suma) !== valorLetras) return false;

    const primeros6 = cuentaNum.slice(0, 6).split("").reduce((a, b) => a + +b, 0);
    const segundos6 = cuentaNum.slice(6).split("").reduce((a, b) => a + +b, 0)

    const controlCalculado = Math.floor(primeros6 / 6).toString().padStart(2, "0") + Math.floor(segundos6 / 6).toString().padStart(2, "0");

    if(control === controlCalculado){
        salida1.innerHTML = campo1.value.replace(/-/g, "");
        return true;
    } else {
        return false;
    }
}
