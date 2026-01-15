const most = document.getElementById("mostrar");

function mostrarNum(arr){
    most.innerHTML += "<br><br>El numero de elementos del array es: " + arr.length;
}

function mostrarElem(arr){
    most.innerHTML +="<br><br><ul>";

    for (let i = 0 ; i < arr.length ; i++){
        most.innerHTML += "<li>" + arr[i] + "</li>";
    }

    most.innerHTML += "</ul>";
}

function mostrarElemRev(arr){
    newarr = arr.slice();
    newarr.reverse();

    most.innerHTML +="<br><br><ul>";

    for (let i = 0 ; i < newarr.length ; i++){
        most.innerHTML += "<li>" + newarr[i] + "</li>";
    }

    most.innerHTML += "</ul>";
}

function mostrarElemOrd(arr){
    newarr = arr.slice();
    newarr.sort();

    most.innerHTML +="<br><br><ul>";

    for (let i = 0 ; i < newarr.length ; i++){
        most.innerHTML += "<li>" + newarr[i] + "</li>";
    }

    most.innerHTML += "</ul>";
}

function anadirIni(arr, elem){
    arr.unshift(elem);
}

function anadirEnd(arr, elem){
    arr.push(elem);
}

function borrarIni(arr){
    most.innerHTML += "<br><br>Elemento eliminado: " + arr.shift();
}

function borrarEnd(arr){
    most.innerHTML += "<br><br>Elemento eliminado: " + arr.pop();
}

function mostrarElemPos(arr,ind){
    most.innerHTML += "<br><br>Elemento en el indice " + ind + ": " + arr[ind];
}

function mostrarPosElem(arr,nombre){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] == nombre){
            most.innerHTML += "<br><br>El elemento " + nombre + " está en el indice " + i;
            return
        }
    }
    most.innerHTML+="<br><br>Elemento no encontrado";
}

function mostrarInter(arr,ind1,ind2){   
    newarr = arr.slice(ind1,ind2+1);
    most.innerHTML +="<br><br><ul>";

    for (let i = 0 ; i < newarr.length ; i++){
        most.innerHTML += "<li>" + newarr[i] + "</li>";
    }
    most.innerHTML +="</ul>"
}