document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('formulario-contacto');
    var emailInput = document.getElementById('email');
    var comentariosInput = document.getElementById('comentariosContacto');
    var mensajeError = document.querySelector('.etiqueta-sugerencia');
    var botonCancelar = document.getElementById('open');

    formulario.addEventListener('submit', function (event) {
        var emailValue = emailInput.value;

        if (!isValidEmail(emailValue)) {
            event.preventDefault(); // Evitar que el formulario se envíe

            // Mostrar mensaje de error y aplicar estilo de error al campo de email
            mensajeError.classList.remove('oculto');
            emailInput.classList.add('campo-error');
        } else {
            // Quitar el mensaje de error y el estilo de error
            mensajeError.classList.add('oculto');
            emailInput.classList.remove('campo-error');
        }
    });

    emailInput.addEventListener('input', function () {
        var emailValue = emailInput.value;

        // Ocultar el mensaje de error y el estilo de error al escribir en el campo de email
        if (isValidEmail(emailValue)) {
            mensajeError.classList.add('oculto');
            emailInput.classList.remove('campo-error');
        }
    });

    botonCancelar.addEventListener('click', function () {
        // Limpiar los campos al hacer clic en el botón Cancelar
        emailInput.value = '';
        comentariosInput.value = '';
        mensajeError.classList.add('oculto');
        emailInput.classList.remove('campo-error');
    });

    function isValidEmail(email) {
        // Verificar si hay una arroba y no hay espacios en blanco
        return /\S+@\S+\.\S+/.test(email);
    }
});
/*este es el codigo de la ventana emergente*/
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});
