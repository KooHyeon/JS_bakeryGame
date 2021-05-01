import Image from './bakery_image.js';
import * as sound from './bakery_sound.js';

export const Reason = Object.freeze({
  win: 'win',
  lose: 'lose',
  cancel: 'cancel',
});

export class GameController {
    constructor(time, target) {
        this.playBtn = document.querySelector('.game__playbtn');
        this.countTimer = document.querySelector('.count__timer');
        this.countTimer.textContent = time;
        this.countNumber = document.querySelector('.count__number');        this.startSec = 10;
        this.endSec = 0;
        this.targetNumber = target;
        this.presentNumber = 0;
        this.started = false;

        this.image = new Image();
        this.image.setItemClickListener(this.onItemClick);

        this.playBtn.addEventListener('click',() => {
            if (this.started) {
                this.stop(cancel);
              } else {
                this.start();
                this.resetTimeAndCount();
            }
        });
    }

    start() {
        sound.playBackground();
        this.started = true;
        this.startTimer();
        this.updateCount();
        this.showTimerAndCount();
        this.image.create(14);
        
    }

    stop(reason) {
      this.started = false;
      this.showReplayBtn()
      this.stopTimer();
      if (reason === Reason.win) {
        sound.stopBackground();
        sound.playWin();
        alert('You Win!');
      } else if (reason === Reason.lose) {
        sound.stopBackground();
        sound.playAlert();
        alert('You Lose!');
      }
    }

    startTimer() {
        this.timer = setInterval(() => {
            this.countTimer.textContent = this.startSec;
            this.startSec--;
        }, 1000);
    }

    stopTimer() {
      clearInterval(this.timer);
    }

    showStartBtn() {
      this.playBtn.textContent = 'Play';
      this.playBtn.classList.remove('hidden');
      this.countTimer.classList.add('hidden');
      this.countNumber.classList.add('hidden');
    }

    showTimerAndCount() {
      this.playBtn.classList.add('hidden');
      this.countTimer.classList.remove('hidden');
      this.countNumber.classList.remove('hidden');
    }

    showReplayBtn() {
      this.playBtn.textContent = 'Replay';
      this.playBtn.classList.remove('hidden');
      this.countTimer.classList.add('hidden');
      this.countNumber.classList.add('hidden');
    }


    updateCount() {
        this.countNumber.textContent = ` ${this.presentNumber} / ${this.targetNumber}`;
    }


    resetTimeAndCount() {
      this.presentNumber = 0;
      this.countNumber.textContent = ` ${this.presentNumber} / ${this.targetNumber}`;
      this.startSec = 10;
    }

    onItemClick = (item) => {
      if(!this.started) {
        return;
      }

      if (item === 'bread') {
        sound.playBread();
        this.presentNumber++;
        this.updateCount();
        if (this.presentNumber === this.targetNumber) {
          this.stop(Reason.win);
        }
      } else {
        sound.playRunji();
        this.stop(Reason.lose);
        console.log(this.started);
      }
    }

}