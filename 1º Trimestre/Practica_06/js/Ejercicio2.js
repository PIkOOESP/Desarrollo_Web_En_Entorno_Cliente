let id1 = 0;

function match(id){
    carta2 = document.getElementById(id1);
    carta = document.getElementById(id);
    imagen = document.getElementById("imagen");

    if (carta.classList.contains('match')){
        imagen.innerHTML = "<img src='../imagenes/stop.png'>"
        return
    }

    if (id1 == 0){
        id1 = id
        carta.innerHTML = "<img src='../imagenes/" + carta.getAttribute('name') + ".jpg'>";
    } else {
        if(id1==id){
            imagen.innerHTML = "<img src='../imagenes/stop.png'>"
            carta2.innerHTML="";
            carta.innerHTML="";
            return
        }
        if(carta.getAttribute('name') == carta2.getAttribute('name')){
            carta.innerHTML="<img src='../imagenes/" + carta.getAttribute('name') + ".jpg'>";
        } else {
            carta2.innerHTML="";
            carta.innerHTML="";
        }
        id1 = 0;
    }
}