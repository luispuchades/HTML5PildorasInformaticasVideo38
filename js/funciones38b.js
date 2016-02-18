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


//1.1 Extracción de elementos desde HTML y asignación de variables
elemento = document.getElementById('lienzo');


function animacion(event) {

    'use strict';

// Definición de Variables
    var lienzo;
    var xRaton;
    var yRaton;
    var xCentro;
    var yCentro;
    var anguloRad;
    var xRelativo;
    var yRelativo;
    var x;
    var y;

// ASIGNACION DE VARIABLES

// Capturamos los datos del evento desencadenado con window.addEventListener
//El evento se trata de mousemove. Por tanto capturamos las coordenadas del ratón.
    xRaton = event.clientX;
    yRaton = event.clientY;

// Definimos el centro de la página
    xCentro = 500;
    yCentro = 350;

// Calculamos la posición relativa del ratón respecto al centro definido
    xRelativo = xRaton - xCentro;
    yRelativo = yRaton - yCentro;

// Calculamos el ángulo en radianes de la posición relativa del ratón
    anguloRad = Math.atan2(xRelativo, yRelativo);

/** Calculamos unas nuevas coordenadas que son el resultante de añadir al centro
 * la distancia correspondiente al seno y coseno del ángulo calculado para
 * que añada esta distancia a las coordenadas del centro.
 */
    x = xCentro + Math.round(Math.sin(anguloRad)*10);
    y = yCentro + Math.round(Math.cos(anguloRad)*10);

// Indicamos que se trata de un canvas 2d
    lienzo = elemento.getContext('2d');

// Limpiamos el lienzo
    lienzo.clearRect(0, 0, 1000, 700);

// Inciamos el dibujo
    lienzo.beginPath();

// Dibujamos exterior el primer ojo (circunferencia)
    lienzo.arc(xCentro, yCentro, 20, 0, Math.PI*2, false);

// Dibujamos el exterior del segundo ojo (circunferencia)
    lienzo.moveTo(570,350);
    lienzo.arc(550, yCentro, 20, 0, Math.PI*2, false);
    lienzo.stroke();

// Indicamos que inicamos un nuevo trazado
    lienzo.beginPath();

// Dibujamos el interior de los ojos (círculos)
    lienzo.arc(x, y, 10, 0, Math.PI*2, false);
    lienzo.moveTo(x,y);
    lienzo.arc(x+50, y, 10, 0, Math.PI*2, false);
// Rellenamos el círculo
    lienzo.fill();

}


function comenzar() {
    'use strict';

    //Hacemos que la página este a la escucha de cualquier movimiento del ratón
    window.addEventListener("mousemove", animacion, false);

}

//3. Asignación de Eventos
document.addEventListener('DOMContentLoaded', comenzar, false);
