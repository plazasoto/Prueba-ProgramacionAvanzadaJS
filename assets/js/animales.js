export class Animal{
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

    get comentarios(){
        return this._comentarios;
    }
    //Setters
    set comentarios(comentario){
        this._comentarios = comentario;
    }

    set sonido(sonido){
        this._sonido = sonido;
    }
}

export class Leon extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    rugir(){console.log("Hola, soy " + this._nombre)}
}

export class Lobo extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    aullar(){console.log("Hola, soy " + this._nombre)}
}

export class Oso extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    gruñir(){console.log("Hola, soy " + this._nombre)}
}

export class Serpiente extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    sisear(){console.log("Hola, soy " + this._nombre)}
}

export class Aguila extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    chillar(){console.log("Hola, soy " + this._nombre)}
}

// Función para crear instancia correspondiente a nombre de animal
export const crearAnimal = (nombre, edad, img, comentarios, sonido) =>{
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