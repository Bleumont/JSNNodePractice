const d = document;
export default function cuentaRegresiva(selector, fecha, mensaje) {
  let tiempo = new Date(fecha).getTime();
  let tempo = setInterval(() => {
    let ahora = new Date().getTime();
    let future = tiempo - ahora;
    var days = Math.floor(future / (1000 * 60 * 60 * 24));
    var hours = Math.floor((future % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((future % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((future % (1000 * 60)) / 1000);

    d.querySelector(selector).innerHTML =
      days +
      ' dias ' +
      hours +
      ' horas ' +
      minutes +
      ' minutos ' +
      seconds +
      ' segundos ';
    if (future < 0) {
      d.querySelector(selector).innerHTML = `<h3>${mensaje}</h3>`;
      clearInterval(tempo);
    }
  }, 1000);
}
