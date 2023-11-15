let indice=0;
const time=2500;

//Cambiando la imagen
function deslizarImagen(){
    let imagenActual = document.getElementById('imagen-carrusel');
    imagenActual.src=LISTA_IMAGENES[indice];
    imagenActual.parentElement.href=LISTA_ENLACES[indice];

    if(indice<LISTA_IMAGENES.length-1){
        indice++;
    }else{
        indice=0;
    }

    setTimeout("deslizarImagen()",time);
}

window.onload = deslizarImagen();