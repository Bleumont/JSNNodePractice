import hamburguerMenu from './hamburguerMenu.js';
import { alarma, reloj } from './sonido.js';

const d = document;
d.addEventListener('DOMContentLoaded', (e) => {
  hamburguerMenu('#panel-btn', '.panel', '.menu a');
  alarma('.alarmInit', '.alarmStop');
  reloj('#reloj', '#clockStart', '#clockStop');
});
