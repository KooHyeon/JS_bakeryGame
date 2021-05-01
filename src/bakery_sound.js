const bgAudio = new Audio('./assets/sound/bg.mp3')
const alertAudio = new Audio('./assets/sound/alert.wav')
const winAudio = new Audio('./assets/sound/game_win.mp3')
const runjiAudio = new Audio('./assets/sound/bug_pull.mp3')
const breadAudio = new Audio('./assets/sound/carrot_pull.mp3')

export function playBread() {
    playSound(breadAudio);
  }
  
  export function playRunji() {
    playSound(runjiAudio);
  }
  
  export function playWin() {
    playSound(winAudio);
  }
  
  export function playAlert() {
    playSound(alertAudio);
  }
  
  export function playBackground() {
    playSound(bgAudio);
  }
  
  export function stopBackground() {
    bgAudio.pause();
  }
  
  function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
  }