 // SCROLL DEL BANNER SUPERIOR HOME
 
 let bg = document.querySelector('#bg');
    window.addEventListener('scroll', function(){
        let value = window.scrollY;
        bg.style.backgroundSize = 350 + value*2 + "px";
    })