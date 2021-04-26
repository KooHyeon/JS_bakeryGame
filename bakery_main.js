"use strict";


const bg = document.querySelector('.background');
const imgs = document.querySelectorAll('img');
const breads = document.querySelectorAll('.bread');
const runjis = document.querySelectorAll('.runji');

    
const maxHeight = bg.offsetHeight / 3;
const maxWidth = 800;

const maxImg = 17

function createImage () {
    for (let i = 0; i < maxImg; i++ ) {
        const x =  Math.floor( Math.random() * maxWidth );
        const y =  Math.floor( Math.random() * maxHeight );
        const r = [x, y];

        imgs[i].classList.remove("hidden");
        imgs[i].style.bottom = r[1] + 'px';
        imgs[i].style.left = r[0] + 'px';
    }
};



const countTimer = document.querySelector('.count__timer');
countTimer.textContent = 10;
const countNumber = document.querySelector('.count__number');
const countFrom = 10;
let countSec = 0;

let presentNumber = 0;
const goalNumber = 10;


function countCatch () {
    countNumber.textContent = `${presentNumber} / ${goalNumber}`;
}

createImage();
countCatch ()

const countTime = window.setInterval(function() {

    countTimer.textContent = countFrom - countSec;

    countSec++;

    if (countSec > 10) {
        clearInterval(countTime);
        alert("Time's out!");}

} , 1000);
