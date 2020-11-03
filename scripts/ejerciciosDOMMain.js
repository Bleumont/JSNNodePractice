import hamburguerMenu from './hamburguerMenu.js';
import { alarma, reloj } from './sonido.js';
import teclas, { shorcuts } from './teclado.js';
import cuentaRegresiva from './countdown.js';
import botonTop from './topButtonc.js';
import darkMode from './dark_mode.js';
import { darkModeCheck } from './dark_mode_check.js';
import { responsiveMedia } from './object_responsive.js';
import isResponsive from './responsive_check.js';

const d = document;
d.addEventListener('DOMContentLoaded', (e) => {
  hamburguerMenu('#panel-btn', '.panel', '.menu a');
  alarma('./assets/alarm.mp3', '#alarmInit', '#alarmStop');
  reloj('#reloj', '#clockStart', '#clockStop');
  teclas('.circle', '.box');
  cuentaRegresiva('#cuentaR', '2022-10-27T14:13', 'Estoy viejo :(');
  botonTop('#top-btn');
  darkMode('#light-btn', 'darkMode');
  darkModeCheck();
  responsiveMedia(
    'youtube',
    '(max-width:800px)',
    'Contenido Mobil',
    'Contenido Desktop'
  );
  responsiveMedia(
    'gmaps',
    '(max-width:800px)',
    'Contenido Mobil',
    'Contenido Desktop'
  );
  isResponsive();
});

d.addEventListener('keydown', (e) => {
  shorcuts(e);
});
