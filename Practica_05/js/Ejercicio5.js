let info = document.getElementById("info");
let form = document.getElementById("form");

function mostrarNum(arr){
    info.innerHTML = "El numero total de discos es " + arr.length;    
}

function listado(){
    form.innerHTML = "<input type='radio' name='listado' id='normal' onclick='mostrarElem(discos)'><input type='radio' name='listado' id='reverse' onclick='mostrarElemRev(discos)'><input type='radio' name='listado' id='ordenado'onclick='mostrarElemOrd(discos)'>"
}

function mostrarElem(arr){
    info.innerHTML ="<ul>";

    for (let i = 0 ; i < arr.length ; i++){
        info.innerHTML += "<li>" + arr[i].mostrarInfo() + "</li>";
    }

    info.innerHTML += "</ul>";
}

function mostrarElemRev(arr){
    newarr = arr.slice();
    newarr.reverse();

    info.innerHTML ="<ul>";

    for (let i = 0 ; i < newarr.length ; i++){
        info.innerHTML += "<li>" + newarr[i].mostrarInfo() + "</li>";
    }

    info.innerHTML += "</ul>";
}

function mostrarElemOrd(arr){
    newarr = arr.slice();
    newarr.sort();

    info.innerHTML ="<ul>";

    for (let i = 0 ; i < newarr.length ; i++){
        info.innerHTML += "<li>" + newarr[i].mostrarInfo() + "</li>";
    }

    info.innerHTML += "</ul>";
}

function intervalo(){
    form.innerHTML = "<input type='text' name='intervalo' id='intervalo'> <button onclick=validarMostrarInter()>Enviar<button>"
}

function validarMostrarInter(){
    indice = document.getElementById("intevalo").value;
    indices = indice.split("-");
    if(indices.length == 2){
        indice1 = parseInt(indices[0]);
        indice2 = parseInt(indices[1]);

        if(isNaN(indice1) || isNaN(indice2)){
            info.innerHTML = "Debes introducir 2 números en el formato correcto";
        }else if(indice1 < 0 || indice1 > indice2 || indice2 > meses.length){
            info.innerHTML ="Valores de índice inválidos";
        } else{
            mostrarInter(discos,indice1,indice2);
        }
    } else {
         info.innerHTML ="Debes introducir 2 números en el formato correcto";
    }
}

function mostrarInter(arr,ind1,ind2){
    newarr = arr.slice(ind1,ind2+1);
    most.innerHTML +="<br><br><ul>";

    for (let i = 0 ; i < newarr.length ; i++){
        most.innerHTML += "<li>" + newarr[i] + "</li>";
    }
    most.innerHTML +="</ul>"
}

function anadir(){
    form.innerHTML = "<input type='text' id='nombre' placeholder='Nombre'> <input type='text' id='ano' placeholder='Año de lanzamiento'> <br> <input type='text' id='grupo' placeholder='Grupo'> <br> <input type='text' id='tipo' placeholder='Tipo de música'> <br> <input type='number' id='localizacion' placeholder='Numero de estantería'> <br> <input type='radio' name='si' id='ini' checked> <laber for='ini'>Borrar al inicio</label> <br> <input type='radio' name='si' id='end'> <laber for='ini'>Borrar al inicio</label> <br> <button onclick='validarAnadir()'>Enviar<button>"
}

function validarAnadir(){
    if(document.getElementById("end").checked){
        anadirIni(discos);
    } else {
        anadirEnd(discos);
    }
}

function anadirIni(arr){
    nombre = document.getElementById("nombre").value;
    grupo = document.getElementById("grupo").value;
    ano = document.getElementById("ano").value;
    tipo = document.getElementById("tipo").value;
    localizacion = document.getElementById("localizacion").value;

    disco = new Disco(nombre,grupo,ano,tipo,localizacion);

    arr.unshift(disco);
}

function anadirEnd(arr){
    nombre = document.getElementById("nombre").value;
    grupo = document.getElementById("grupo").value;
    ano = document.getElementById("ano").value;
    tipo = document.getElementById("tipo").value;
    localizacion = document.getElementById("localizacion").value;
    
    disco = new Disco(nombre,grupo,ano,tipo,localizacion);

    arr.push(disco);
}

function borrar(){
    form.innerHTML = "<input type='radio' name='no' id='ini' checked><laber for='ini'>Borrar al inicio</label> <br> <input type='radio' name='no' id='end'><laber for='end'>Borrar al final</label> <br> <button onclick='validarBorrar()'>Enviar</button>" 
}

function validarBorrar(){
    if(document.getElementById("end").checked){
        borrarIni(discos);
    } else {
        borrarEnd(discos);
    }
}

function borrarIni(arr){
    info.innerHTML = "Elemento eliminado: " + arr.shift();
}

function borrarEnd(arr){
    info.innerHTML = "Elemento eliminado: " + arr.pop();
}

function consulta(){
    form.innerHTML = "<input type='radio' name='si' id='indice'><>"
}