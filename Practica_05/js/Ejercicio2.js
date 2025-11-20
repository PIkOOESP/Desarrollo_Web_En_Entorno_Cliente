const most = document.getElementById("mostrar");

function mostrarNum(arr){
    most.innerHTML ="El numero de elementos del array es:" + arr.length;
}

function mostrarElem(arr){
    most.innerHTML = "<ul>";

    for (let i = 0 ; i < arr.length ; i++){
        most.innerHTML += "<li>" + arr[i] + "</li>";
    }

    most.innerHTML += "</ul>";
}

function mostrarElemRev(arr){
    newarr = arr.reverse();

    most.innerHTML = "<ul>";

    for (let i = 0 ; i < newarr.length ; i++){
        most.innerHTML += "<li>" + newarr[i] + "</li>";
    }

    most.innerHTML += "</ul>";
}

function mostrarElemOrd(arr){
    newarr = arr.sort();

    most.innerHTML = "<ul>";

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
    most.innerHTML = "Elemento eliminado: " + arr.shift();
}

function borrarEnd(arr){
    most.innerHTML = "Elemento eliminado: " + arr.pop();
}

function mostrarElemPos(arr,ind){
    if(ind >= arr.length || ind < 0){
        most.innerHTML = "El indice buscado fuera de rango";
    } else {
        most.innerHTML = "Elemento en el indice " + ind + ": " + arr[ind];
    }
}
