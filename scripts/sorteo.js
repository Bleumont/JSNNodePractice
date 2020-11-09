const d = document;

export default function sorteoRandom(boton, contenedor) {
  const $contenedor = d.getElementById(contenedor),
    $participantes = $contenedor.getElementsByTagName('li');
  let lista = [...$participantes];
  d.addEventListener('click', (e) => {
    let ganador = lista[random(lista.length, 0)].innerText;
    if (e.target.matches(boton)) {
      console.log(`El ganador es ${ganador}!`);
    }
  });
}
function random(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Comentarios de youtube
// const getWinnerComment = () => {
//   const $players = document.querySelectorAll('ytd-comment-thread-renderer'),
//     random = Math.floor(Math.random() * $players.length),
//     winner = $players[random],
//     winnerText = winner.querySelector('.style-scope #content-text').innerText,
//     winnerName = winner.querySelector('#author-text span').innerText;

//   return `El ganador es : ${winnerName}!!
//   COMENTARIO: ${winnerText}`;
// };
