/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import * as bootstrap from 'bootstrap';

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

document.addEventListener('DOMContentLoaded', function() {
  // Inicializar el carrusel
  var myCarousel = new Carousel(document.getElementById('carouselExampleInterval'), {
      interval: 2000,
      wrap: true
  });
});

