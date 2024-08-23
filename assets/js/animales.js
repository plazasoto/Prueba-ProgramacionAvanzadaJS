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

    get sonido(){
        return this._sonido;
    }
    //Setters
    set comentarios(comentario){
        this._comentarios = comentario;
    }
}

export class Leon extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    rugir(){
        return this.sonido;
    }
}

export class Lobo extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    aullar(){
        return this.sonido;
    }
}

export class Oso extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    gruñir(){
        return this.sonido;
    }
}

export class Serpiente extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    sisear(){
        return this.sonido;
    }
}

export class Aguila extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    chillar(){
        return this.sonido;
    }
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