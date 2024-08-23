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

    // Validando asignación de los 3 datos
    if (nombreAnimal == "Seleccione un animal"){
        alert("Debe seleccionar el nombre del animal.");
        return;
    }
    if (edadAnimal == "Seleccione un rango de años"){
        alert("Debe seleccionar el rango de años del animal.");
        return;
    }
    if (comentarioAnimal == ""){
        alert("Debe ingresar un comentario.");
        return;
    }
    
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
                // Devolver formulario a estado inicial
                resetarFormulario();
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
            //Para el audio
            imgAudio.addEventListener('click',(event)=>{
                let contAudio = document.getElementById("contenedorAudio");
                contAudio.innerHTML = `
                <audio autoplay>
                    <source src="./assets/sounds/${animal.sonido}" type="audio/mp3">
                </audio> 
                `;
                
            });

            // Agregando card del animal a la tabla visible
            animalesEnInvestigacion.appendChild(card);
        }
    }
})();

// Setear valores iniciales del formulario
const resetarFormulario = ()=>{
    document.getElementById("animal").value = "Seleccione un animal";
    document.getElementById("edad").value = "Seleccione un rango de años";
    document.getElementById("comentarios").value = "";
}