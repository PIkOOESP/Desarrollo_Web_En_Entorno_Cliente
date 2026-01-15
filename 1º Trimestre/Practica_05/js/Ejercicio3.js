function menu(){
    return prompt("--Mostrar meses--\n1.Número de meses \n2.Listado de meses \n3.Intervalo de meses \n4.Añadir mes \n5.Borrar mes \n6.Consultar mes \n7.Salir");
}

function main(){
    let opcion,opcion2;
    while (true){
        opcion = menu();
        opcion = parseInt(opcion);

        switch(opcion){
            case 1:
                mostrarNum(meses);
                break;

            case 2:
                while (true){
                    opcion2 = prompt("--Listas--\n1.Normal \n2.Del reves \n3.Ordenada \n4.Salir");
                    opcion2 = parseInt(opcion2);

                    if(opcion2 == 1){
                        mostrarElem(meses);
                        break;
                    } else if (opcion2 == 2){
                        mostrarElemRev(meses);
                        break
                    } else if (opcion2 == 3){
                        mostrarElemOrd(meses);
                        break;
                    } else if(opcion2 == 4){
                        break;
                    }else {
                        alert("Introduce una opción válida");
                    }
                }
                break;

            case 3:
                while(true){
                    opcion2=prompt("Introduce el intervalo en formato inicio-fin");
                    indices=opcion2.split("-");
                    if(indices.length == 2){
                        indice1 = parseInt(indices[0]);
                        indice2 = parseInt(indices[1]);

                        if(isNaN(indice1) || isNaN(indice2)){
                            alert("Debes introducir 2 números en el formato correcto");
                        }else if(indice1 < 0 || indice1 > indice2 || indice2 > meses.length){
                            alert ("Valores de índice inválidos");
                        } else {
                            mostrarInter(meses,indice1,indice2);
                            break;
                        }
                    } else {
                        alert("Debes introducir 2 números en el formato correcto");
                    }
                }
                break;
            
            case 4:
                while(true){
                    mes = prompt("Mes que deseas añadir");
                    opcion2 = prompt("Donde quieres añadirlo\n1.Al principio\n2.Al final\n3.Salir");
                    opcion2 = parseInt(opcion2);
                    
                    if(opcion2 == 1){
                        anadirIni(meses,mes);
                        break;
                    } else if(opcion2 == 2){
                        anadirEnd(meses,mes);
                        break;
                    } else if(opcion2 == 3){
                        break;
                    } else {
                        alert("Introduce una opción válida");
                    }
                }
                break;

            case 5:
                while(true){
                    opcion2 = prompt("Donde quieres eliminar\n1.Al principio\n2.Al final\n3.Salir");
                    opcion2 = parseInt(opcion2);
                    
                    if(opcion2 == 1){
                        borrarIni(meses);
                        break;
                    } else if(opcion2 == 2){
                        borrarEnd(meses);
                        break;
                    } else if(opcion2 == 3){
                        break;
                    } else {
                        alert("Introduce una opción válida");
                    }
                }
                break;

            case 6:
                while(true){
                    opcion2 = prompt("--Consultas--\n1.Por posicion \n2.Por nombre\n3.Salir");
                    opcion2 = parseInt(opcion2);

                    if(opcion2 == 1){
                        indice = prompt("Numero del mes a consultar");
                        indice = parseInt(indice);
                        if(isNaN(indice)){
                            alert("Debe introducir un numero")
                        } else if(indice >= meses.length || indice < 0){
                            alert("El indice buscado fuera de rango");
                        } else {
                            mostrarElemPos(meses,indice);
                            break;
                        }
                    } else if(opcion2 == 2){
                        mes = prompt("Mes a consultar");
                        mostrarPosElem(meses,mes);
                        break;
                    } else if(opcion2 == 3){
                        break;
                    } else {
                        alert("Introduce una opción válida");
                    }
                }
                break;
            
            case 7:
                alert("Saliendo...");
                break;
            
            default:
                alert("Introduce una opción válida")
                

        }
        if (opcion == 7) break;
    }
}