// console.log(document.querySelector('#menu'));
// console.log(document.querySelectorAll('a'));
// console.log(document.querySelectorAll('.card'));
// console.log(document.querySelectorAll('#menu li')[2]);
// console.log(document.getElementById('menu'));

// setTimeout(function () {
//   document.documentElement.lang = 'en';
//   let texto = new SpeechSynthesisUtterance('How Are you? ');
//   speechSynthesis.speak(texto);
// }, 3000);

// setTimeout(function () {
//   document.documentElement.lang = 'es';
//   let texto = new SpeechSynthesisUtterance('¿qué hacés papá?');
//   speechSynthesis.speak(texto);
// }, 5000);

// console.log(document.documentElement.lang);
// console.log(document.documentElement.getAttribute('lang'));
// console.log(document.querySelector('.link-dom').href); // ruta completa https://127.0.0.1:5500/dom.html
// console.log(document.querySelector('.link-dom').getAttribute('href')); // ruta especifica dom.html
// document.documentElement.setAttribute('lang', 'es-MX');
// const $backgroudColor = document.querySelector('body');
// $backgroudColor.style.backgroundColor = '#444';
// $backgroudColor.style.color = '#eee';
// const $linkDOM = document.querySelector('.link-dom');

// $linkDOM.setAttribute('target', '_blank');
// $linkDOM.setAttribute('rel', 'noopener noreferrer');
// $linkDOM.setAttribute('href', 'https://twitch.tv/bleumont');
// $linkDOM.hasAttribute('href'); // boolean
// $linkDOM.removeAttribute('rel');

// // Data-Attributes

// console.log($linkDOM.getAttribute('data-description'));
// console.log($linkDOM.dataset);
// console.log($linkDOM.dataset.description);

// const $cards = document.querySelector('.cards');
//   $newCard = document.createElement('figure');

// $newCard.insertAdjacentHTML('afterbegin', '<figcaption>Hola</figcaption>');
// $newCard.insertAdjacentHTML(
//   'afterbegin',
//   '<img src="https://placeimg.com/200/200/tech">'
// );

// $cards.appendChild($newCard);

// const $divs = document.querySelectorAll('.eventos-flujo div');
// const $links = document.querySelector('.eventos-flujo a');

// $divs.forEach((div) => {
//   div.addEventListener('click', flujoEventos, {
//     capture: false,
//     once: true,
//   });
// });

// $links.addEventListener('click', (e) => {
//   alert('Hola papá');
// });

function flujoEventos(e) {
  console.log(`Hola ${this.className} hizo click en ${e.target.className}`);
  e.stopPropagation();
}

document.addEventListener('click', (e) => {
  console.log('click en ', e.target);
  if (e.target.matches('.eventos-flujo a')) {
    alert('click en link!');
    e.preventDefault();
  }
  if (e.target.matches('.eventos-flujo div')) {
    flujoEventos(e);
  }
});
window.addEventListener('load', (e) => {
  console.log(window.screenY);
  console.log(window.screenX);
});

document.addEventListener('DOMContentLoaded', (e) => {
  console.log('Content Load');
  console.log(window.screenY);
  console.log(window.screenX);
});
