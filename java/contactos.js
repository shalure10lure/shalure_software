var bienvenida=document.querySelector('.bienvenida')

var  nombre0=prompt('hola como te llamas 😊');
if (nombre0==='') {
    bienvenida.innerHTML=('BIENVENID@ amig@ ');

}else{
    bienvenida.innerHTML=('BIENVENID@ '+nombre0);

}




const formulario=document.querySelector('#form');
formulario.addEventListener('submit', (e)=> {
     e.preventDefault();
     
})

var error =document.getElementById('error');

let boton=document.querySelector('.btnform');
boton.addEventListener('click',function () {
    enviarfromulario();
   
})

function enviarfromulario() {
    
var nombre=document.getElementById('name').value;
var pais=document.getElementById('pais').value;
var email=document.getElementById('email').value;
var mensaje =document.getElementById('mensaje').value;

   
    console.log('enviando formulario...');

    let arraydatos=[nombre,pais,email,mensaje]
    console.log(arraydatos)

    var mensajeserror =[];
    if (nombre.value=== null|| nombre.value=== '') {
        mensajeserror.push('INGRESA TU NOMBRE');
    }
    if (pais.value=== null|| pais.value=== '') {
        mensajeserror.push('INGRESA TU PAIS');
    }
    if (email.value=== null|| email.value=== '') {
        mensajeserror.push('INGRESA TU EMAIL');
    }
    error.innerHTML=mensajeserror.join(' - ');

    formulario.reset();
    return false;
    
}

//-------------------------------
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