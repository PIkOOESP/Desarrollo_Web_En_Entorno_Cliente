//Ejercicio 4

class Disco {
    constructor(){
        this.nombre = "";
        this.ano = "";
        this.grupo = "";
        this.tipo = "";
        this.localizacion = 0;
        prestado = false;
    }

    constructor(nombre, grupo, ano, tipo, localizacion) {
        this.nombre = nombre;
        this.ano = ano;
        this.grupo = grupo;
        this.tipo = tipo;
        this.localizacion = localizacion;
        prestado = false;
    }

    setLocalizacion(localizacion) {
        this.localizacion = localizacion;
    }

    setPrestado(prestado){
        this.prestado = prestado;
    }

    mostrarInfo(){
        let doc = document.getElementById("info");
        doc.innerHTML = "Nombre: "+ this.nombre + "\nAño de publicación: " + this.ano + "\nGrupo: " + this.grupo + "\nTipo de música: " + this.tipo + "\nLocalizacion: " + this.localizacion + "\nPrestado: ";
        if(this.prestado ==  true){
            doc.innerHTML += "si";
        } else {
            doc.innerHTML += "no";
        }
    }
}