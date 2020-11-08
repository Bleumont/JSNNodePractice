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
