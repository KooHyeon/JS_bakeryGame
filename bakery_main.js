"use strict";

const imgContainer = document.querySelector('.img__container');
const bg = document.querySelector('.background');
const imgs = document.querySelectorAll('img');
const breads = document.querySelectorAll('.bread');
const runjis = document.querySelectorAll('.runji');
const playBtn = document.querySelector('.play__btn');
const replayBtn = document.querySelector('.replay__btn')

const MAXHEIGHT = bg.offsetHeight / 3;
const MAXWIDTH = 800;
const MAXNUMBER = 16;
const GOALCOUNT = 10;
const TIMELIMIT = 10;

const countTimer = document.querySelector('.count__timer');
const countScore = document.querySelector('.count__number');
const goalScore = 10;

const bgAudio = new Audio('./assets/sound/bg.mp3')
const alertAudio = new Audio('./assets/sound/alert.wav')
const winAudio = new Audio('./assets/sound/game_win.mp3')
const runjiAudio = new Audio('./assets/sound/bug_pull.mp3')
const breadAudio = new Audio('./assets/sound/carrot_pull.mp3')

let countSec = 0;
let gameStart = false;
let presentScore = 0;

imgContainer.addEventListener('click', (e) => {
    onFieldClick(e);
})

playBtn.addEventListener('click', () => {
    startGame();
})

replayBtn.addEventListener('click', () => {
    startGame();
})

function startGame() {
    gameStart = true;
    createImage();
    startTimer();
    showScoreAndTime();
    playGame();
}

function playGame () {
    presentScore = 0;
    bgAudio.play();
    imgContainer.classList.remove('hidden');
}


function finishGame(win) {
    bgAudio.pause();
    if (win) {
        winAudio.play();
    } else {
        runjiAudio.play();
    }
    showReplayBtn();
    gameStart = false;
    clearInterval(countTime);
    presentScore = 0;
    alert(win ? 'You Won' : 'You Lost');
}

function onFieldClick(e) {
    if (!gameStart) {
        return;
    }
    if (e.target.matches('.runji')) {
        finishGame(false);
    } else if (e.target.matches('.bread')) {
        presentScore++;
        updateScore();
        e.target.classList.add('hidden');
        breadAudio.play();
        console.log(presentScore);
        if (presentScore === GOALCOUNT) {
            finishGame(true);
        }
    }
} 


function createImage() {
    for (let i = 0; i < MAXNUMBER; i++ ) {
        const x =  Math.floor( Math.random() * MAXWIDTH );
        const y =  Math.floor( Math.random() * MAXHEIGHT );
        const r = [x, y];
        imgs[i].classList.remove("hidden"); 
        imgs[i].style.bottom = r[1] + 'px';
        imgs[i].style.left = r[0] + 'px';
    }
}

function showReplayBtn() {
    playBtn.classList.add('hidden');
    replayBtn.classList.remove('hidden');
    countTimer.classList.add('hidden');
    countScore.classList.add('hidden');
}

function showScoreAndTime() {
    playBtn.classList.add('hidden');
    replayBtn.classList.add('hidden');
    countTimer.classList.remove('hidden');
    countScore.classList.remove('hidden');
    updateScore()
}

function startTimer() {
    countTimer.textContent = 10;
    countSec = 0;
}

function updateScore() {
    countScore.textContent = `${presentScore} / ${goalScore}`;
}

const countTime = window.setInterval(function() {
    countTimer.textContent = TIMELIMIT - countSec;
    countSec++;
    if (countSec > 10) {
        finishGame(false);
    } else if (presentScore === 10) {
        finishGame(true);
    }
} , 1000);

