var btnde =document.querySelector('.btn-de');
var btniz =document.querySelector('.btn-iz');
var slider= document.querySelector('#slider');
var listas= document.querySelectorAll('.lista');

btniz.addEventListener('click', ()=> moverizquierda());
btnde.addEventListener('click', ()=> moverderecha());

let contador=0;
var posicion=0;
var anchoimg=100/listas.length;
function moverderecha() {
    if (posicion>=listas.length-1) {
     contador=0;
     slider.style.transform=`translate(-${contador}%)`;
     slider.style.transition='none';
     posicion=0;
     
    }else{
    posicion++;
    
    contador=contador+anchoimg;
    slider.style.transform=`translate(-${contador}%)`;
    slider.style.transition='all ease .6s';

}
    
}
function moverizquierda() {
    posicion--;
    if (posicion<0) {
        posicion=listas.length-1;
        contador=anchoimg*(listas.length-1);
        slider.style.transform=`translate(-${contador}%)`;
        slider.style.transition='none';
    } else {
        
    contador=contador-anchoimg;
    slider.style.transform=`translate(-${contador}%)`;
    slider.style.transition='all ease .6s';

    }
}

//-----------------------------------------------------------------------------------
let btnarriba=document.querySelector('.boton-arriba')

btnarriba.addEventListener('click',subir);

function subir() {

    var arriba= document.documentElement.scrollTop;
    if (arriba > 0) {
        window.requestAnimationFrame(subir);
        window.scrollTo(0, arriba -(arriba/ 10));
    }
}



window.onscroll= function () {
    var scroll= document.documentElement.scrollTop;

    if (scroll > 500) {
        btnarriba.style.transform='scale(1)';
    }
    else{
        if (scroll<500) {
            btnarriba.style.transform='scale(0)';
        }
    }
}