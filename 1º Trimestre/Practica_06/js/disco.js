//Ejercicio 4

class Disco {
    constructor(nombre, grupo, ano, tipo, localizacion) {
        this.nombre = nombre;
        this.ano = ano;
        this.grupo = grupo;
        this.tipo = tipo;
        this.localizacion = localizacion;
        this.prestado = false;
    }

    setLocalizacion(localizacion) {
        this.localizacion = localizacion;
    }

    setPrestado(prestado){
        this.prestado = prestado;
    }

    getNombre(){
        return this.nombre;
    }

    mostrarInfo(){
        let doc = document.getElementById("info");
        doc.innerHTML += "Nombre: "+ this.nombre + "<br>Año de publicación: " + this.ano + "<br>Grupo: " + this.grupo + "<br>Tipo de música: " + this.tipo + "<br>Localizacion: " + this.localizacion + "<br>Prestado: ";
        if(this.prestado ==  true){
            doc.innerHTML += "si";
        } else {
            doc.innerHTML += "no";
        }
    }
}