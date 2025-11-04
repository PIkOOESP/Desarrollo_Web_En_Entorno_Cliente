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