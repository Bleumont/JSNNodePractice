const d = document;

export default function textoAVoz() {
  const $voiceSelect = d.querySelector('#voice-selector'),
    $textBox = d.querySelector('#text-voice');

  let voices = window.speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    let option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if (voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    $voiceSelect.appendChild(option);
  }

  d.addEventListener('click', (e) => {
    if (e.target.matches('#voice-btn')) {
      var utterThis = new SpeechSynthesisUtterance($textBox.value);

      let selectedOption = $voiceSelect.selectedOptions[0].getAttribute(
        'data-name'
      );
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
          utterThis.voice = voices[i];
        }
      }
      window.speechSynthesis.speak(utterThis);

      $textBox.blur();
    }
    if (
      e.target.matches('#voice-btn-stop') &&
      window.speechSynthesis.speaking
    ) {
      window.speechSynthesis.pause();
    }
    if (e.target.matches('#voice-btn-stop') && window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
  });
}
