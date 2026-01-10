window.onload = function () {
  const form = document.getElementById("formulario");

  form.addEventListener("submit", function(e) {
    let valido = true;

    if (!validarCaracteres("nombre")) valido = false;
    if (!validarCaracteres("grupo")) valido = false;

    if (!anoValido("ano")) valido = false;

      if (!localizacionValida("localizacion")) valido = false;

    if (!valido) {
      e.preventDefault();
    }
  });
};

function validarCaracteres(campo) {
  const campo1 = document.getElementById(campo);

  if (campo1.value.trim() === "" || campo1.value.length < 20) {
    campo1.style.border="1px solid red";
    return false;
  } else {
    campo1.style.border="1px solid black";
    return true;
  }
}

function anoValido(campo) {
  const campo1 = document.getElementById(campo);
  const regla = /^[0-9]{4}$/;

  if (!regla.test(campo1.value)) {
    campo1.style.border="1px solid red";
    return false;
  } else {
    campo1.style.border="1px solid black";
    return true;
  }
}

function localizacionValida(campo) {
  const campo1 = document.getElementById(campo);
  if (campo1.value !== "" && isNaN(campo1.value)) {
    campo1.style.border="1px solid red";
    return false;
  } else {
    campo1.style.border="1px solid black";
    return true;
  }
}
