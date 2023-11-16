function correoError(entradaCampo) {
    /* El correo electrónico debe incluir un @ */
    return entradaCampo.value.indexOf("@") === -1;
}

function estiloInvalido(elemento) {
    elemento.style.backgroundColor = "#cf6e6e";
    elemento.style.color = "white";
}

function estiloReset(elemento) {
    elemento.style.backgroundColor = "#f5f5dc";
    elemento.style.color = "#2f4f4f";
}

let formulario = document.getElementById('formulario-contacto');
let entradasRequeridas = formulario.querySelectorAll("#formulario-contacto input");
let etiquetasSugerencia = formulario.querySelectorAll(".etiqueta-sugerencia");

formulario.onsubmit = function (event) {
    let invalido = false;

    for (let i = 0; i < entradasRequeridas.length; i++) {
        let entrada = entradasRequeridas[i];

        if (correoError(entrada)) {
            event.preventDefault();
            estiloInvalido(entrada);
            etiquetasSugerencia[i].textContent = "Ingresa de manera correcta tu correo";
            etiquetasSugerencia[i].classList.remove("oculto");
            invalido = true;
        } else {
            estiloReset(entrada);
            etiquetasSugerencia[i].classList.add("oculto");
        }
    }
};
//*este es el codigo de la ventana emergente*//
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});
