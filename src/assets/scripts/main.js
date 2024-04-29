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

document.addEventListener('DOMContentLoaded', function() {
  // Verificar si el elemento del carrusel está presente en la página actual
  var carouselElement = document.getElementById('carouselInterval');
  if (carouselElement) {
    // Si el elemento del carrusel está presente, inicializar el carrusel
    var myCarousel = new Carousel(carouselElement, {
      interval: 5000,
      wrap: true
    });
  }
});

var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="submit" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('¡Enhorabuena! Te has inscrito con éxito.', 'success')
  })
}