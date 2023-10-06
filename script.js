//alert("Hola este es mi Javascript");
let nombreMi = "Fernando";

console.log("El nombre es:", nombreMi);

// seleccionar elmentos
let contenidoTitulo="Nombre";



// condicionales


//FUNCIONES

let nombre="Fernando";
let ciudad="Lima";
let gusto="Helados"

let parrafo = document.querySelector(".parrafo2");

function cambiarTexto(nombre, ciudad, gusto){
    let contenido= ` Me llamo ${nombre}, naci en ${ciudad}, y vivo en 
    Peru , me gusta el ${gusto}, y salir a pasear en días de Sol, me encantaria 
    aprender a programar ` ;

    return contenido;               
                       
}

parrafo.innerText = cambiarTexto(nombre,ciudad,gusto);

