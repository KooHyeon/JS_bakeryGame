"use strict";

const playBtn = document.querySelector('.play__btn');
const replayBtn = document.querySelector('.replay__btn')

const imgContainer = document.querySelector('.img__container');
const bg = document.querySelector('.background');
const imgs = document.querySelectorAll('img');
const breads = document.querySelectorAll('.bread');
const runjis = document.querySelectorAll('.runji');

const maxHeight = bg.offsetHeight / 3;
const maxWidth = 800;
const maxImg = 16

const countTimer = document.querySelector('.count__timer');
countTimer.textContent = 10;
const countNumber = document.querySelector('.count__number');
const countFrom = 10;
let countSec = 0;

let presentNumber = 0;
const goalNumber = 10;
countNumber.textContent = `${presentNumber} / ${goalNumber}`;

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


function playGame () {
    const bgAudio = new Audio('./assets/sound/bg.mp3')
    const alertAudio = new Audio('./assets/sound/alert.wav')
    const winAudio = new Audio('./assets/sound/game_win.mp3')
    const runjiAudio = new Audio('./assets/sound/bug_pull.mp3')
    const breadAudio = new Audio('./assets/sound/carrot_pull.mp3')

    bgAudio.play();

    playBtn.classList.add('hidden');
    countTimer.classList.remove('hidden');
    countNumber.classList.remove('hidden');
    imgContainer.classList.remove('hidden');

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
            imgContainer.classList.add('hidden');
            bgAudio.pause();
            alertAudio.play();
        } else if (presentNumber === 10) {
            clearInterval(countTime);
            alert("You Win!");
            replayBtn.classList.remove('hidden');
            countTimer.classList.add('hidden');
            countNumber.classList.add('hidden');
            presentNumber = 0;
            imgContainer.classList.add('hidden');
            bgAudio.pause();
            winAudio.play();
        }
    } , 1000);

imgContainer.addEventListener('click', (e) => {
    if (e.target.className === 'runji') {
        clearInterval(countTime);
        alert("Lose!");
        replayBtn.classList.remove('hidden');
        countTimer.classList.add('hidden');
        countNumber.classList.add('hidden');
        presentNumber = 0;
        imgContainer.classList.add('hidden');
        bgAudio.pause();
        runjiAudio.play();
    } else if (e.target.className === 'bread') {
        presentNumber = presentNumber + 1;
        e.target.classList.add("hidden");
        breadAudio.play();
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
