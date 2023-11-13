function campoVacio(entradaCampo){
    if(entradaCampo.value===''){
        return true;
    }
}
function nombreInvalido(entradaCampo){
/*Los nombres no deben contener espacios en blanco, comillas simples o comillas dobles*/
    if(entradaCampo.value.indexOf('\'')>0){
        return 1;
    }else if(entradaCampo.value.indexOf('\"')>0){
        return 2;
    }else if(entradaCampo.value.indexOf(' ')>0){
        return 3;
    }
    return false;
}

function estiloInvalido(elemento){
    elemento.style.backgroundColor='#cf6e6e';
    elemento.style.color='white';
}
function estiloReset(elemento){
    elemento.style.backgroundColor='#f5f5dc';
    elemento.style.color='#2f4f4f';
}

let formulario = document.getElementById('formulario-inicio-sesion');
let entradasRequeridas=formulario.querySelectorAll('#formulario-inicio-sesion input');
let etiquetasSugerencia=formulario.querySelectorAll('.etiqueta-sugerencia');


formulario.onsubmit=function(event){
    let invalido = false;
    let contador=0;

    for(let entrada of entradasRequeridas){
        if(campoVacio(entrada)){
            event.preventDefault();
            estiloInvalido(entrada);
            etiquetasSugerencia[contador].textContent='Ingresa el dato obligatorio';
            etiquetasSugerencia[contador].classList.remove('oculto');
            invalido=true;
        }else if(contador===0 && nombreInvalido(entrada)){
            event.preventDefault();
            estiloInvalido(entrada);
            switch(nombreInvalido(entrada)){
                case 1:
                    etiquetasSugerencia[contador].textContent='Nombre de usuario no válido, retira comilla \' ';
                    break;
                case 2:
                    etiquetasSugerencia[contador].textContent='Nombre de usuario no válido, retira comillas \" ';
                    break;
                case 3:
                    etiquetasSugerencia[contador].textContent='Nombre de usuario no válido, retira espacios en blanco ';
                    break;
                default:
            }
            etiquetasSugerencia[contador].classList.remove('oculto');
            invalido=true;
        }else{
            estiloReset(entrada);
            etiquetasSugerencia[contador].classList.add('oculto');
        }
        contador+=1;
    }
}
