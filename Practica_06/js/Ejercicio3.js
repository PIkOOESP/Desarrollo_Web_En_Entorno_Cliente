window.onload = function () {
  const form = document.getElementById("formulario");

  form.addEventListener("submit", function (e) {
    let valido = true;

    if (!validarCaracteres("nombre")) valido = false;
    if (!validarCaracteres("grupo")) valido = false;

    if (!anioValido("anio")) valido = false;

        if (!localizacionValida("localizacion", "lblLocalizacion")) valido = false;

    if (!valido) {
      e.preventDefault();
    }
  });
};

function validarCaracteres(campo) {
    const campo1 = document.getElementById(campo);

    if (campo1.value.trim() === "" || campo1.value.length > 20) {
        return false;
    } else {
        return true;
    }
}

function anioValido(campo) {
  const campo1 = document.getElementById(campo);
  const regla = /^[0-9]{4}$/;

  if (!regla.test(campo.value)) {
    return false;
  } else {
    return true;
  }
}

function localizacionValida(campo) {
    const campo1 = document.getElementById(campo);
    if (campo1.value !== "" && isNaN(campo1.value)) {
        return false;
    } else {
        return true;
    }
}
