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

// Se comprueba si el botón de activación de la alerta está presente en la página actual
if (alertTrigger) {
  // Si el botón está presente, agrega un 'Event Listener' para mostrar la alerta al hacer clic
  alertTrigger.addEventListener('click', function () {
    alert('¡Enhorabuena! Te has inscrito con éxito.', 'success')
  })
}