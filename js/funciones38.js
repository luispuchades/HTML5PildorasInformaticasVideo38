/*global window*/
/*jslint browser: true, for:true */

/**JavaScript Document
 * Curso: HMTL5 - Pildoras Informáticas - API CANVAS XIII
 * Origin: Video38.html ==> Animaciones en Canvas II
 */

// "use strict";

/**
 * TODO: Ralentizar la caida y acelerar el tiempo
 */

//1. Definición de Objetos y Variables
var elemento;
var vertical;
var alturaFinal;
var estado;
var arriba;
var horizontal;

//1.1 Extracción de elementos desde HTML y asignación de variables
elemento = document.getElementById('lienzo');
vertical = 300;
alturaFinal = 700;
estado = "bajando";
arriba = vertical;
horizontal = 300;

function animacion() {

    'use strict';

    var lienzo;

    // Indicamos que se trata de un canvas 2d
    lienzo = elemento.getContext('2d');

    if (vertical < alturaFinal && estado === "bajando") {


        // Borramos el canvas
        lienzo.clearRect(0, 0, 1000, 700);
        // Creamos un trazado
        lienzo.beginPath();
        // Dibujamos una esfera
        lienzo.arc(horizontal, vertical, 40, 0, Math.PI * 2, false);
        // La dibujamos rellena
        lienzo.fill();
        vertical = vertical + 50;
        horizontal = horizontal + 5;
    }

    if (vertical === alturaFinal) {
        arriba = arriba + 50;
        estado = "subiendo";
    }

    if (vertical > arriba && estado === "subiendo") {
        // Borramos el canvas
        lienzo.clearRect(0, 0, 1000, 700);
        // Creamos un trazado
        lienzo.beginPath();
        // Dibujamos una esfera
        lienzo.arc(horizontal, vertical, 40, 0, Math.PI * 2, false);
        // La dibujamos rellena
        lienzo.fill();
        vertical = vertical - 50;
        horizontal = horizontal + 5;
    }

    if (vertical === arriba) {
        estado = "bajando";
    }


}


function comenzar() {
    'use strict';

    //Llamamos repetidamente a la función animacion()
    setInterval(animacion, 75);
}

//3. Asignación de Eventos
document.addEventListener('DOMContentLoaded', comenzar, false);
