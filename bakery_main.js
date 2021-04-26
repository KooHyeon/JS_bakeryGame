"use strict";

const playBtn = document.querySelector('.play__btn');
const replayBtn = document.querySelector('.replay__btn')

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

function playGame () {
    playBtn.classList.add('hidden');
    countTimer.classList.remove('hidden');
    countNumber.classList.remove('hidden');

    const countTime = window.setInterval(function() {
        countTimer.textContent = countFrom - countSec;
    
        countSec++;
    
        if (countSec > 10) {
            clearInterval(countTime);
            alert("Time's out!");
            replayBtn.classList.remove('hidden');
            countTimer.classList.add('hidden');
            countNumber.classList.add('hidden');
            presentNumber = 0;
        } else if (presentNumber === 10) {
            clearInterval(countTime);
            alert("You Win!");
            replayBtn.classList.remove('hidden');
            countTimer.classList.add('hidden');
            countNumber.classList.add('hidden');
            presentNumber = 0;
        }
    } , 1000);

const imgContainer = document.querySelector('.img__container');
imgContainer.addEventListener('click', (e) => {
    if (e.target.className === 'runji') {
        clearInterval(countTime);
        alert("Lose!");
        replayBtn.classList.remove('hidden');
        countTimer.classList.add('hidden');
        countNumber.classList.add('hidden');
        presentNumber = 0;
    } else if (e.target.className === 'bread') {
        presentNumber = presentNumber + 1;
        e.target.classList.add("hidden");
    } 
    countNumber.textContent = `${presentNumber} / ${goalNumber}`;
});
}


playBtn.addEventListener('click', () => {
    createImage();
    playGame();
})

replayBtn.addEventListener('click', () => {
    createImage();
    replayBtn.classList.add('hidden');
    countTimer.classList.remove('hidden');
    countNumber.classList.remove('hidden');
    playGame();
})
