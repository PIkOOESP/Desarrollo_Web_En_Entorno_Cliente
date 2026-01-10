function crearCookie(){
    let galletas = document.cookie.split(";");
    let nombre = "galleta";

    for ( let i = 0 ; i < galletas.length ; i++){
        while (galletas[i].charAt(0) == " ") galletas[i] = galletas[i].substring(1,galletas[i].length);
        

        if(galletas[i].indexOf(nombre) == 0){
            return galletas[i].substring(nombre.length+1,galletas[i].length);
        }
    }
    document.cookie="galleta=0;max-age=3600;path=/";
    return 0;
}

function modificarCookie(valor){
    valor = parseInt(valor) + 1;
    console.log(valor)
    document.cookie = "galleta="+ valor +";max-age=3600;path=/";
    return valor;
}

function lavarCookie(){
    document.cookie = "galleta=0;max-age=3600;path=/";
    return 0;
}