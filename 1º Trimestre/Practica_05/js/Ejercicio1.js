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

function tabla(){
    let div = document.getElementById("datos");
    div.innerHTML="";

    let table ="<table> <tr> <td></td> <th>Lunes</th> <th>Martes</th> <th>Miercoles</th> <th>Jueves</th> <th>Viernes</th> </tr>";
    for(let i = 9 ; i <= 15 ; i+=2){
        table += "<tr> <th>" + i + ":00</th> <td></td> <td></td> <td></td> <td></td> <td></td> </tr>";
    }

    table += "</table> <br><br> <table> <tr> <td></td> <th>Lunes</th> <th>Martes</th> <th>Miercoles</th> <th>Jueves</th> <th>Viernes</th> <th>Sabado</th> <th>Domingo</th> </tr>";
    for(let i = 16 ; i < 21 ; i++){
        table += "<tr> <th>" + i + ":00-" + (i+1) + ":00</th> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> </tr>";
    }
    table += "</table>";


    div.innerHTML+=table;
}

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

function categoria(){
    let div = document.getElementById("datos");
    div.innerHTML="";
    const lista_categorias = ["Micros",
        "Prebenjamín",
        "Benjamín",
        "Alevín",
        "Infantil",
        "Cadete",
        "Juvenil", 
        "Junior", 
        "Sub-23", 
        "Senior", 
        "Veterano"
    ];

    let indice;
    let ano;
    while (true){
        ano = window.prompt("Introduce tu año de nacimiento"); 

        if(!isNaN(ano)){
            if(ano > 0){
                ano = parseFloat(ano);
                break;
            }
        }
        window.alert("Un dato no se introdujo correctamente");
    }

    let edad = 2025 - ano;

    switch(true){
        case (edad < 5):
            indice = 0;
            break;

        case (edad < 7):
            indice = 1;
            break;

        case (edad < 9):
            indice = 2;
            break;

        case (edad < 11):
            indice = 3;
            break;

        case (edad < 13):
            indice = 4;
            break;
        
        case (edad < 16):
            indice = 5;
            break;

        case (edad < 19):
            indice = 6;
            break;

        case (edad < 23):
            indice = 7;
            break;
        
        case (edad < 30):
            indice = 8;
            break;

        case (edad >= 30):
            indice = 9;
            break;
    }

    div.innerHTML += "<ul>";
    for (let i = 0 ; i < lista_categorias.length ; i++){
        if(i == indice){
            div.innerHTML += "<li><b>" + lista_categorias[i] + "</b></li>";
        } else {
            div.innerHTML +="<li>" + lista_categorias[i] + "</li>";
        }
    }
    div.innerHTML += "</ul>";
}