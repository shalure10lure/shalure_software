var agregarpedidobtn = document.getElementById('agregarpedido');
var cuerpotabla = document.getElementById('cuerpotabla');
var numpedidos=document.getElementById('numpedidos');
let contenedortabla=document.querySelector('.secciontabla');
var errorform =document.getElementById('error');

var totalped=0;
let filasagregadas = [];


const productoselect = document.getElementById('producto');
const precioinput = document.getElementById('precio');
const cantidadinput = document.getElementById('cantidad');


   productoselect.addEventListener('change', function () {
    actualizarprecio();
});

agregarpedidobtn.addEventListener('click', function () {

    if (validarFormulario()===true) {
       
       clickboton();
       errorform.textContent='todos los campos estan completos'
       
    } else {
        errorform.textContent = 'Completa todos los campos antes de agregar un pedido.';
        return false;
    }
});


function clickboton() {
    
    contenedortabla.style.display='block';
    const nombrecliente = document.getElementById('nombrecliente').value;
    const ci = document.getElementById('ci').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    
    const producto = productoselect.value;
    const precio = precioinput.value;
    const cantidad = cantidadinput.value;
    const total = (precio * cantidad);
   
    const nuevafila = cuerpotabla.insertRow();
    nuevafila.innerHTML = `
        <td>${nombrecliente}</td>
        <td> ${ci}</td>
        <td>${direccion}</td>
        <td>${telefono}</td>
        <td>${producto}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>${total+' Bs'}</td>  `;


    filasagregadas.push(nuevafila);
console.log('insertaste una fila'+ filasagregadas.length );
    

    document.getElementById('formulari').reset();
    totalped++;
    numpedidos.innerHTML=totalped;
   
    var btneliminarpedido=document.createElement('td');
    btneliminarpedido.textContent='eliminar pedido';
    btneliminarpedido.style.background='blue';
    btneliminarpedido.style.color='black';
    nuevafila.appendChild(btneliminarpedido);

  btneliminarpedido.addEventListener('click',eliminarfila)

  
function eliminarfila() {
    nuevafila.remove();
    totalped--;
    numpedidos.innerHTML=totalped;
   
}

};


function actualizarprecio() {
    const productosinfo = {
        'botellon20': { nombre: 'Botellon 20L', precio: 15.00 },
        'botellon10': { nombre: 'Botellon 10L', precio: 10.00 },
        'hielo3k': { nombre: 'Hielo 3 kilos', precio: 5.00 },
        'botellaagua': { nombre: 'Botella 6.2L', precio: 8.00 },
        'dispenserpequeño': { nombre: 'Dispenser pequeño', precio: 70.00 },
        'dispensergrande1': { nombre: 'maquina frio-caliente pequeño', precio: 500.00 },
        'dispensergrande2': { nombre: 'maquina frio-caliente grande', precio: 700.00 },
        
    };
    const infoproducto = productosinfo[productoselect.value];

    if (infoproducto) {
        precioinput.value = infoproducto.precio;
    } else {
        precioinput.preciovalue = '0.00';
    }


}


function validarFormulario() {
    const campos = ['nombrecliente', 'ci', 'direccion', 'telefono', 'producto', 'precio', 'cantidad'];

    for (const campo of campos) {
        if (document.getElementById(campo).value === '') {
            return false;
        }
    }
    return true;
}


//-----------------------------------------------------

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

