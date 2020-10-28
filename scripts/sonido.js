const d = document;

export function alarma(sound, btnPlay, btnPause) {
  const $audio = d.createElement('audio');
  $audio.src = sound;
  d.addEventListener('click', (e) => {
    if (e.target.matches(btnPlay)) {
      $audio.play();
      e.target.disabled = true;
    }
    if (e.target.matches(btnPause)) {
      $audio.pause();
      $audio.currentTime = 0;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}

export function reloj(clock, btnPlay, btnStop) {
  let clockNow;
  d.addEventListener('click', (e) => {
    if (e.target.matches(btnPlay)) {
      clockNow = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);

      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      d.querySelector(clock).innerHTML = null;
      d.querySelector(btnPlay).disabled = false;
      clearInterval(clockNow);
    }
  });
}
