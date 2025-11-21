let info = document.getElementById("info");
let form = document.getElementById("form");

function mostrarNum(arr){
    form.innerHTML="";
    info.innerHTML = "El numero total de discos es " + arr.length;    
}

function listado(){
    form.innerHTML = "<input type='radio' name='listado' id='normal' onclick='mostrarElem(discos)'> <label for='normal'>Normal</label> <input type='radio' name='listado' id='reverse' onclick='mostrarElemRev(discos)'> <label for='reverse'>Reversa</label> <input type='radio' name='listado' id='ordenado'onclick='mostrarElemOrd(discos)'> <label for='ordenado'>Ordenado</label>";
    info.innerHTML = "";
}

function mostrarElem(arr){
    info.innerHTML ="<ul>";

    for (let i = 0 ; i < arr.length ; i++){
        info.innerHTML += "<li>";
        arr[i].mostrarInfo();
        info.innerHTML +="</li>";
    }

    info.innerHTML += "</ul>";
}

function mostrarElemRev(arr){
    newarr = arr.slice();
    newarr.reverse();

    info.innerHTML ="<ul>";

    for (let i = 0 ; i < newarr.length ; i++){
        info.innerHTML += "<li>";
        newarr[i].mostrarInfo();
        info.innerHTML+="</li>";
    }

    info.innerHTML += "</ul>";
}

function mostrarElemOrd(arr){
    newarr = arr.slice();
    newarr.sort();

    info.innerHTML ="<ul>";

    for (let i = 0 ; i < newarr.length ; i++){
        info.innerHTML += "<li>";
        newarr[i].mostrarInfo();
        info.innerHTML+="</li>";
    }

    info.innerHTML += "</ul>";
}

function intervalo(){
    info.innerHTML = "";
    form.innerHTML = "<input type='text' name='intervalo' id='intervalo'> <button onclick=validarMostrarInter()>Enviar</button>"
}

function validarMostrarInter(){
    indice = document.getElementById("intervalo").value;
    indices = indice.split("-");
    if(indices.length == 2){
        indice1 = parseInt(indices[0]);
        indice2 = parseInt(indices[1]);

        if(isNaN(indice1) || isNaN(indice2)){
            info.innerHTML = "Debes introducir 2 números en el formato correcto";
        }else if(indice1 < 0 || indice1 > indice2 || indice2 > discos.length){
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
    info.innerHTML ="<ul>";

    for (let i = 0 ; i < newarr.length ; i++){
        info.innerHTML += "<li>"; 
        newarr[i].mostrarInfo(); 
        info.innerHTML += "</li>";
    }
    info.innerHTML +="</ul>"
}

function anadir(){
    info.innerHTML = "";
    form.innerHTML = "<input type='text' id='nombre' placeholder='Nombre'> <br> <input type='text' id='ano' placeholder='Año de lanzamiento'> <br> <input type='text' id='grupo' placeholder='Grupo'> <br> <input type='text' id='tipo' placeholder='Tipo de música'> <br> <input type='number' id='localizacion' placeholder='Numero de estantería'> <br> <input type='radio' name='si' id='ini' checked> <laber for='ini'>Añadir al inicio</label> <br> <input type='radio' name='si' id='end'> <laber for='end'>Añadir al final</label> <br> <button onclick='validarAnadir()'>Enviar</button>"
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
    info.innerHTML = "";
    form.innerHTML = "<input type='radio' name='no' id='ini' checked><laber for='ini'>Borrar al inicio</label> <br> <input type='radio' name='no' id='end'><laber for='end'>Borrar al final</label> <br> <button onclick='validarBorrar()'>Enviar</button>";
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
    info.innerHTML = "";
    form.innerHTML = "<input type='radio' name='si' id='ind' onclick='buscarIndice()'> <label for='indice'>Busqueda por indice</label> <br> <input type='radio' name='si' id='nom' onclick='buscarNombre()'><laber for='nombre'>Busqueda por nombre</label>";
}

function buscarIndice(){
    consulta();
    form.innerHTML +="<br> <input type='number' name='indice' id='indice' placeholder='Indice'> <br> <button onclick='validarMostrarElemPos()'>Enviar</button>";
}

function buscarNombre(){
    consulta();
    form.innerHTML +="<br> <input type='text' name='nombre' id='nombre' placeholder='Nombre'> <br> <button onclick='mostrarPosElem(discos)'>Enviar</button>"
}

function validarMostrarElemPos(){
    ind = document.getElementById("indice").value;
    indice = parseInt(ind);
    if(isNaN(indice)){
        info.innerHTML = "Debe introducir un numero";
    } else if(indice >= discos.length || indice < 0){
        info.innerHTML = "El indice buscado fuera de rango";
    } else {
        mostrarElemPos(discos,indice);
    }
}

function mostrarElemPos(arr,ind){
    info.innerHTML = "Elemento en el indice " + ind + ": " + arr[ind].mostrarInfo();
}

function mostrarPosElem(arr){
    nombre = document.getElementById("nombre").value;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].getNombre() == nombre){
            info.innerHTML = "El elemento " + nombre + " está en el indice " + i;
            return
        }
    }
    info.innerHTML = "Elemento no encontrado";
}