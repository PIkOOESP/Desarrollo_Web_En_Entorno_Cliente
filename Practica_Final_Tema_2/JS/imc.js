function imc(){
    let div = document.getElementById("datos");
    div.innerHTML="";
    const lista_peso = [
        "<16.00: Infrapeso (delgadez severa)", 
        "16.00 – 16.99: Infrapeso (delgadez moderada)", 
        "17.00 - 18.49: Infrapeso (delgadez aceptable)",
        "18.50 - 24.99: Peso normal",
        "25.00 - 29.99: Sobrepeso",
        "30.00 - 34.99: Obeso (Tipo I)",
        "35.00 - 40.00: Obeso (Tipo II)",
        ">40.00: Obeso (Tipo III)" 
    ];

    let indice;
    let peso;
    let altura;
    while (true){
        altura = window.prompt("Introduce tu altura en cm");
        peso = window.prompt("Introduce tu peso en KG");

        if(!isNaN(altura) && !isNaN(peso)){
            if(altura > 0 && peso > 0){
                peso = parseFloat(peso);
                altura = parseFloat(altura);
                break;
            }
        }
        window.alert("Un dato no se introdujo correctamente");
    }

    let imc = peso/Math.pow(altura/100,2);

    switch(true){
        case (imc < 16):
            indice = 0;
            break;

        case (imc < 17):
            indice = 1;
            break;

        case (imc < 18.50):
            indice = 2;
            break;

        case (imc < 25):
            indice = 3;
            break;

        case (imc < 30):
            indice = 4;
            break;
        
        case (imc < 35):
            indice = 5;
            break;

        case (imc <= 40):
            indice = 6;
            break;

        case (imc > 40):
            indice = 7;
            break;
    }

    div.innerHTML += "<ul>";
    for (let i = 0 ; i < lista_peso.length ; i++){
        if(i == indice){
            div.innerHTML += "<li><b>" + lista_peso[i] + "</b></li>";
        } else {
            div.innerHTML +="<li>" + lista_peso[i] + "</li>";
        }
    }
    div.innerHTML += "</ul>";
}