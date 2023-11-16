const checkboxes = document.getElementsByClassName('checkbox');
const seccionOculta = document.getElementById('seccionOculta');
const botonElegir1 = document.getElementById('boton1');
const botonElegir2 = document.getElementById('boton2');
const botonElegir3 = document.getElementById('boton3');

// Inicializamos las variables de cantidadSeleccionada en 1 para cada botón
let cantidadSeleccionada1 = 1;
let cantidadSeleccionada2 = 1;
let cantidadSeleccionada3 = 1;

botonElegir1.addEventListener('click', function() {
  cantidadSeleccionada1++;
  actualizarSeccionOculta(cantidadSeleccionada1);
});

botonElegir2.addEventListener('click', function() {
  cantidadSeleccionada2++;
  actualizarSeccionOculta(cantidadSeleccionada2);
});

botonElegir3.addEventListener('click', function() {
  cantidadSeleccionada3++;
  actualizarSeccionOculta(cantidadSeleccionada3);
});

function actualizarSeccionOculta(cantidadSeleccionada) {
  // Captura la información del producto y la muestra en la sección oculta
  var productosSeleccionados = Array.from(checkboxes).filter(function(checkbox) {
    return checkbox.checked;
  });

  var contenidoHTML = '';

  productosSeleccionados.forEach(function(producto) {
    var imagen = producto.parentElement.querySelector('img').src;
    var precioUnitario = parseFloat(producto.parentElement.querySelector('.precio-item').innerText.trim());
    var precioTotal = precioUnitario * cantidadSeleccionada;

    contenidoHTML += `
      <div>
        <img src="${imagen}" alt="Descripción del producto" width="200" height="200">
        <p>Precio unitario: $${precioUnitario.toFixed(2)}</p>
        <p>Cantidad seleccionada: ${cantidadSeleccionada}</p>
        <p>Precio total: $${precioTotal.toFixed(2)}</p>
      </div>
    `;
  });

  seccionOculta.innerHTML = contenidoHTML;
}

for (var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('change', function() {
    // Verifica si al menos un checkbox está marcado
    var alMenosUnoMarcado = Array.from(checkboxes).some(function(checkbox) {
      return checkbox.checked;
    });

    // Muestra u oculta la sección basado en el estado de los checkboxes
    if (alMenosUnoMarcado) {
      seccionOculta.style.display = 'block';
      actualizarSeccionOculta(cantidadSeleccionada1);
      if (botonElegir1.checked) {
        actualizarSeccionOculta(cantidadSeleccionada1);
      } else if (botonElegir2.checked) {
        actualizarSeccionOculta(cantidadSeleccionada2);
      } else if (botonElegir3.checked) {
        actualizarSeccionOculta(cantidadSeleccionada3);
      } 
    } else {
      // Oculta la sección si no hay checkboxes marcados
      seccionOculta.style.display = 'none';
    }
  });
}
