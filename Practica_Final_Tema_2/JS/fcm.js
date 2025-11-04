function fcm(){
    let div = document.getElementById("datos");
    div.innerHTML="";
    const lista_zona = [
        "Zona de recuperación", 
        "Zona aeróbica", 
        "Zona anaeróbica",
        "Línea roja"
    ];

    let edad;
    let sexo;
    while (true){
        edad = window.prompt("Introduce tu edad");
        sexo = window.prompt("Introduce tu sexo");

        if((sexo.toLowerCase() == "masculino" || sexo.toLowerCase() == "femenino") && !isNaN(edad)){
            if( edad > 0){
                edad = parseFloat(edad);
                break;
            }
            window.alert("Un dato no se introdujo ");
        }
        window.alert("Un dato no se introdujo correctamente");
    }

    let fmc = 220 - edad;
    const porcentaje = [
        (60*fmc)/100,
        (70*fmc)/100,
        (80*fmc)/100,
        (90*fmc)/100,
        (100*fmc)/100,
    ];

    div.innerHTML += "<ul>";
    for (let i = 0 ; i < lista_zona.length ; i++){
        div.innerHTML +="<li>" + lista_zona[i] + " (" + porcentaje[i] + "-" + porcentaje[i+1] + ")</li>";
    }
    div.innerHTML += "</ul>";
}