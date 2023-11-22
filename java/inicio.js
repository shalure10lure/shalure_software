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