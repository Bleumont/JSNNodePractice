const d = document;

export function alarma(btnPlay, btnPause) {
  const $audio = d.getElementById('audio');
  d.addEventListener('click', (e) => {
    if (e.target.matches(btnPlay)) {
      $audio.play();
    }
    if (e.target.matches(btnPause)) {
      $audio.pause();
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
