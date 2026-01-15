function validarcontra(){
    let contrasena = document.getElementById("contra").value;
    let respuesta = document.getElementById("validacion");
    let mayus = /[A-Z]/;
    let minus = /[a-z]/;
    if(contrasena.length < 8 || contrasena.length > 16){
        respuesta.innerHTML = "La contraseña debe tener entre 8 y 16 caracteres";
    } else {
        respuesta.innerHTML = "";
        if(mayus.test(contrasena)){
            respuesta.innerHTML = "";
            if(minus.test(contrasena)){
                respuesta.innerHTML = "";
                if(contrasena.includes("-") || contrasena.includes("_") || contrasena.includes("@") || contrasena.includes("#") || contrasena.includes("$") || contrasena.includes("%") || contrasena.includes("&")){
                    respuesta.innerHTML = "";
                    respuesta.innerHTML = "Contraseña correcta";
                } else{
                    respuesta.innerHTML = "La contraseña debe tener un simbolo";
                }
            } else {
                respuesta.innerHTML = "La contraseña debe tener una letra minuscula"
            }
        } else{
            respuesta.innerHTML = "La contraseña debe tener una letra mayuscula";
        }
    }
}