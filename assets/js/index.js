//console.log("ᓀ‸ᓂ");

class Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;
    }
    //Getters
    get nombre(){
        return this._nombre;
    }
    
    get edad(){
        return this._edad;
    }
    
    get img(){
        return this._img;
    }
    //Setters
    set comentarios(comentario){
        this._comentarios = comentario;
    }

    set sonido(sonido){
        this._sonido = sonido;
    }
}

class Leon extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    rugir(){console.log("Hola, soy " + this._nombre)}
}

class Lobo extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    aullar(){console.log("Hola, soy " + this._nombre)}
}

class Oso extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    gruñir(){console.log("Hola, soy " + this._nombre)}
}

class Serpiente extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    sisear(){console.log("Hola, soy " + this._nombre)}
}

class Aguila extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    chillar(){console.log("Hola, soy " + this._nombre)}
}

// Función para crear instancia correspondiente a nombre de animal
const crearAnimal = (nombre, edad, img, comentarios, sonido) =>{
    switch(nombre){
        case "Leon":
            return new Leon(nombre, edad, img, comentarios, sonido);
        case "Lobo":
            return new Lobo(nombre, edad, img, comentarios, sonido);
        case "Oso":
            return new Oso(nombre, edad, img, comentarios, sonido);
        case "Serpiente":
            return new Serpiente(nombre, edad, img, comentarios, sonido);
        case "Aguila":
            return new Aguila(nombre, edad, img, comentarios, sonido);
        default:
            return new Animal(nombre, edad, img, comentarios, sonido);
    }
}

const boton = document.getElementById("btnRegistrar");
boton.addEventListener("click", (event) => {

    // Datos para construir animal
    let nombreAnimal = document.getElementById("animal").value;
    let edadAnimal = document.getElementById("edad").value;
    let imagenAnimal;//se obtendrá de json
    let comentarioAnimal = document.getElementById("comentarios").value;
    let sonidoAnimal;//se obtendrá de json
    
    // Instancia
    let animal;//se inicializa luego de obtener datos del json
    
    // Consulta a animales.jason
    let requestAnimales = request("./animales.json");

    requestAnimales.then(async (val)=>{       
        await val.animales.forEach(element => {
            // Obteniendo imagen y sonido del animal
            if(element.name == nombreAnimal){
                imagenAnimal = element.imagen;
                sonidoAnimal = element.sonido;
                animal = crearAnimal(nombreAnimal, edadAnimal, imagenAnimal, comentarioAnimal, sonidoAnimal);
                //console.log(animal);
            }
        });
    }); 
})

// Consulta asincrónica
const request = async (url) => {
    const results = await fetch(url);
    const response = await results.json();
    return response;
}