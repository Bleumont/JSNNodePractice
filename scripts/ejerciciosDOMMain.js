import hamburguerMenu from './hamburguerMenu.js';
import { alarma, reloj } from './sonido.js';
import teclas, { shorcuts } from './teclado.js';
import cuentaRegresiva from './countdown.js';
import botonTop from './topButtonc.js';

const d = document;
d.addEventListener('DOMContentLoaded', (e) => {
  hamburguerMenu('#panel-btn', '.panel', '.menu a');
  alarma('./assets/alarm.mp3', '#alarmInit', '#alarmStop');
  reloj('#reloj', '#clockStart', '#clockStop');
  teclas('.circle', '.box');
  cuentaRegresiva('#cuentaR', '2022-10-27T14:13', 'Estoy viejo :(');
  botonTop('#top-btn');
});

d.addEventListener('keydown', (e) => {
  shorcuts(e);
});
