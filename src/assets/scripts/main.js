/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import * as bootstrap from 'bootstrap';
import { Carousel } from 'bootstrap';
import 'animate.css';

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

// Esperamos a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
  // Se comprueba si el elemento del carrusel está presente en la página actual
  var carouselElement = document.getElementById('carouselInterval');
  if (carouselElement) {
    // Si el elemento del carrusel está presente, se inicializa el carrusel
    var myCarousel = new Carousel(carouselElement, {
      interval: 5000,
      wrap: true
    });
  }
});

// Obtenemos los elementos del DOM necesarios para mostrar alertas
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

// Función para mostrar una alerta con un mensaje y un tipo específicos
function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="submit" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

// Se obtiene el formulario
var form = document.querySelector('.container__form');

// Agregamos 'Event Listener' para escuchar el evento 'submit' del formulario
form.addEventListener('submit', function (event) {
  // Se evita el comportamiento predeterminado del formulario (enviar los datos)
  event.preventDefault();
  
  // Se comprueba si el formulario es válido
  if (form.checkValidity()) {
    // Si el formulario es válido, se muestra la alerta
    alert('¡Enhorabuena! Te has inscrito con éxito.', 'success');
  } else {
    // Si el formulario no es válido, no se muestra la alerta
    console.log('El formulario no es válido');
  }
});
