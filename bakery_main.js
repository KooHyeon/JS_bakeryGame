"use strict";

const playBtn = document.querySelector('.play__btn');

const bg = document.querySelector('.background');
const imgs = document.querySelectorAll('img');
const breads = document.querySelectorAll('.bread');
const runjis = document.querySelectorAll('.runji');

    
const maxHeight = bg.offsetHeight / 3;
const maxWidth = 800;

const maxImg = 16

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
countNumber.textContent = `${presentNumber} / ${goalNumber}`;


playBtn.addEventListener('click', () => {
    createImage();
    playBtn.classList.add('hidden');
    countTimer.classList.remove('hidden');
    countNumber.classList.remove('hidden');

    const countTime = window.setInterval(function() {
        countTimer.textContent = countFrom - countSec;
    
        countSec++;
    
        if (countSec > 10) {
            clearInterval(countTime);
            alert("Time's out!");}
    
    } , 1000);
})

const imgContainer = document.querySelector('.img__container');
imgContainer.addEventListener('click', (e) => {
    if (e.target.className === 'runji' && e.target.className !== 'disable') {
        alert("Lose!");
        clearInterval(countTime);
        e.target.classList.add('disable');
        console.log(e.target.className);
    } else if (e.target.className === 'bread' && e.target.className !== 'disable') {
        presentNumber = presentNumber + 1;
        e.target.classList.add('disable');
    } else if (presentNumber == goalNumber) {
        alert("WIN");
    }
    countNumber.textContent = `${presentNumber} / ${goalNumber}`;
});
