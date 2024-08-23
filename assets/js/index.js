//console.log("ᓀ‸ᓂ");
import { Animal, Leon, Lobo, Oso, Serpiente, Aguila, crearAnimal } from "./animales.js";

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
    let requestAnimales = request("./animales.json");

    requestAnimales.then(async (val)=>{       
        await val.animales.forEach(element => {
            // Obteniendo imagen y sonido del animal
            if(element.name == nombreAnimal){
                imagenAnimal = element.imagen;
                sonidoAnimal = element.sonido;
                animal = crearAnimal(nombreAnimal, edadAnimal, imagenAnimal, comentarioAnimal, sonidoAnimal);
                //console.log(animal);
                //animal.gruñir();
                //--------------------------------
                /*document.getElementById("Animales").innerHTML =
                `<img src="./assets/imgs/${animal.img}">`;*/
                manipularDOM.tabularAnimal(animal);
                //--------------------------------
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

// DOM
const manipularDOM = (()=>{
    const animalesEnInvestigacion = document.getElementById("Animales");
    return {
        tabularAnimal: (animal)=>{
            let card = document.createElement("div");
            card.setAttribute("class", "card col-3");
            //card.setAttribute("style", "width: 18rem;");
            
            let imagen = document.createElement("img");
            imagen.setAttribute('src', `./assets/imgs/${animal.img}`);
            imagen.setAttribute('class', 'card-img-top');

            let imgAudio = document.createElement("img");
            imgAudio.setAttribute('src', './assets/imgs/audio.svg');
            imgAudio.setAttribute('class', 'card-img-bottom');

            card.appendChild(imagen);
            card.appendChild(imgAudio);


            //Para que al hacer click en la card se muestre el modal
            card.setAttribute("data-toggle", "modal");
            card.setAttribute("data-target", "#exampleModal");
            //Pasar datos de este animal al modal
            card.addEventListener('click',(event)=>{
                let modal = document.querySelector(".modal-body");
                modal.innerHTML = `
                <img src="./assets/imgs/${animal.img}" alt="Imagen de ${animal.nombre}" id="modal_imagen">
                <h4>${animal.edad}</h4>
                <h4>Comentarios</h4>
                <p>${animal.comentarios}</p>
                `;
                //modal.appendChild(imagen);
                
            });

            animalesEnInvestigacion.appendChild(card);
            
           //ajustar detalles de estilo luego...
           

        }
    }
})();

/******************** */
// Probando
/*

let animalesRegistrados = [];
let menuAnimal = document.getElementById("animal");
(()=>{
    console.log("Testing\nᓀ‸ᓂ");

    let animalDePrueba1 = new Leon("León", "1 - 2 años", "Leon.png", "No existe.", "Aullido.mp3");
    console.log(animalDePrueba1);

    manipularDOM.tabularAnimal(animalDePrueba1);

    animalesRegistrados.push(animalDePrueba1);
    console.log(animalesRegistrados);
})();
*/

//para mostrar animal al seleccionarlo ... ?
menuAnimal.addEventListener('click',(event)=>{
    console.log(menuAnimal.value);
});