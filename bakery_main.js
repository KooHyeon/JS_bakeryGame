"use strict";


const game = function() {
    const bg = document.querySelector('.background');
    const imgs = document.querySelectorAll('img');
    
    const maxHeight = bg.offsetHeight / 3;
    const maxWidth = 800;

    function createImage () {
        for (let i = 0; i < 10; i++ ) {
            const x =  Math.floor( Math.random() * maxWidth );
            const y =  Math.floor( Math.random() * maxHeight );
            const r = [x, y];

            imgs[i].classList.remove("hidden");
            imgs[i].style.bottom = r[1] + 'px';
            imgs[i].style.left = r[0] + 'px';
        }
    };

    createImage();
};



window.addEventListener('load', game);