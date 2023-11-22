const videos = document.querySelectorAll(".video video");
const mostrarvideo = document.querySelector(".mostrarvideo");
const playvideo = document.getElementById("playvideo");
const cerrarvideo = document.getElementById('cerrarvideo');

videos.forEach(vid=>{
    vid.addEventListener('click',()=>{
        mostrarvideo.style.display='block';
        playvideo.src=vid.getAttribute('src');
       // console.log(playvideo)
    })
});


 cerrarvideo.addEventListener('click', () => {
     ocultarVideo();
});
function ocultarVideo() {
    mostrarvideo.style.display = 'none';
    playvideo.pause();
    playvideo.removeAttribute('src');
     videos.currentTime=0;
   //  console.log(playvideo)
}


//---------------------------
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