//console.log("ᓀ‸ᓂ");
import { Animal, Leon, Lobo, Oso, Serpiente, Aguila, crearAnimal } from "./animales.js";

const RUTA = "./animales.json";//donde consultar por datos de animales

// Consulta asincrónica
const request = async (url) => {
    const results = await fetch(url);
    const response = await results.json();
    return response;
}

// Asociando función a botón
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
    let requestAnimales = request(RUTA);

    requestAnimales.then(async (val)=>{       
        await val.animales.forEach(element => {
            // Obteniendo imagen y sonido del animal
            if(element.name == nombreAnimal){
                imagenAnimal = element.imagen;
                sonidoAnimal = element.sonido;
                // Creando instancia de Animal
                animal = crearAnimal(nombreAnimal, edadAnimal, imagenAnimal, comentarioAnimal, sonidoAnimal);
                // Agregando el animal a la tabla
                manipularDOM.tabularAnimal(animal);
            }
        });
    }); 
})



// DOM
const manipularDOM = (()=>{
    const animalesEnInvestigacion = document.getElementById("Animales");
    return {
        tabularAnimal: (animal)=>{
            let card = document.createElement("div");
            card.setAttribute("class", "card col-3 bg-dark");
            
            let imagen = document.createElement("img");
            imagen.setAttribute('src', `./assets/imgs/${animal.img}`);
            imagen.setAttribute('class', 'card-img-top');

            let imgAudio = document.createElement("img");
            imgAudio.setAttribute('src', './assets/imgs/audio.svg');
            imgAudio.setAttribute('class', 'card-img-bottom');

            card.appendChild(imagen);
            card.appendChild(imgAudio);

            //Para que al hacer click en la imagen se muestre el modal
            imagen.setAttribute("data-toggle", "modal");
            imagen.setAttribute("data-target", "#exampleModal");
            //Pasar datos de este animal al modal
            imagen.addEventListener('click',(event)=>{
                let modal = document.querySelector(".modal-body");
                modal.innerHTML = `
                <img src="./assets/imgs/${animal.img}" alt="Imagen de ${animal.nombre}" class="w-100">
                <h4>${animal.edad}</h4>
                <h4>Comentarios</h4>
                <p>${animal.comentarios}</p>
                `;
                
            });

            animalesEnInvestigacion.appendChild(card);
        }
    }
})();

/******************** */
// Probando
/* manipularDOM.tabularAnimal(crearAnimal("Lobo","x","Lobo.jpg","z","no"));
manipularDOM.tabularAnimal(crearAnimal("Leon","x","Leon.png","z","no"));
manipularDOM.tabularAnimal(crearAnimal("Lobo","x","Lobo.jpg","z","no"));
manipularDOM.tabularAnimal(crearAnimal("Oso","x","Oso.jpg","z","no"));
manipularDOM.tabularAnimal(crearAnimal("Lobo","x","Lobo.jpg","z","no"));
manipularDOM.tabularAnimal(crearAnimal("Serpiente","x","Serpiente.jpg","z","no"));
manipularDOM.tabularAnimal(crearAnimal("Lobo","x","Lobo.jpg","z","no"));
manipularDOM.tabularAnimal(crearAnimal("Aguila","x","Aguila.png","z","no")); */

//para mostrar animal al seleccionarlo ... ?
menuAnimal.addEventListener('click',(event)=>{
    console.log(menuAnimal.value);
});