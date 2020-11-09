import hamburguerMenu, { responsiveMenu } from './hamburguerMenu.js';
import { alarma, reloj } from './sonido.js';
import teclas, { shorcuts } from './teclado.js';
import cuentaRegresiva from './countdown.js';
import botonTop from './topButtonc.js';
import darkMode from './dark_mode.js';
import { darkModeCheck } from './dark_mode_check.js';
import { responsiveMedia } from './object_responsive.js';
import isResponsive from './responsive_check.js';
import userDeviceInfo from './user_agent.js';
import isOnline from './net_status.js';
import playVideoFromCamera from './webcam.js';
import getGeolocation from './geolocalizacion.js';
import filtroDeBusqueda from './search_filter.js';
import sorteoRandom from './sorteo.js';
import sliderGallery from './slider.js';
import scrollAreaIntersect from './scroll_area_intersect.js';

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
  userDeviceInfo('nav-agent');
  playVideoFromCamera();
  getGeolocation('geolocation');
  sorteoRandom('#btn-sorteo', 'contenedor-participantes');
  sliderGallery();
  scrollAreaIntersect();
  responsiveMenu();
});

d.addEventListener('keydown', (e) => {
  shorcuts(e);
});
d.addEventListener('keyup', (e) => {
  filtroDeBusqueda('mySearch', 'search-area');
});

isOnline();
