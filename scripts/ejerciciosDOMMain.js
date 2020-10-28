import hamburguerMenu from './hamburguerMenu.js';
import { alarma, reloj } from './sonido.js';
import teclas, { shorcuts } from './teclado.js';

const d = document;
d.addEventListener('DOMContentLoaded', (e) => {
  hamburguerMenu('#panel-btn', '.panel', '.menu a');
  alarma('./assets/alarm.mp3', '#alarmInit', '#alarmStop');
  reloj('#reloj', '#clockStart', '#clockStop');
  teclas('.circle', '.box');
});

d.addEventListener('keydown', (e) => {
  shorcuts(e);
});
