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