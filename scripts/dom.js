// console.log(document.querySelector('#menu'));
// console.log(document.querySelectorAll('a'));
// console.log(document.querySelectorAll('.card'));
// console.log(document.querySelectorAll('#menu li')[2]);
// console.log(document.getElementById('menu'));

// setTimeout(function () {
//   document.documentElement.lang = 'en';
//   document.documentElement.setAttribute('lang', 'es-MX');
//   let texto = new SpeechSynthesisUtterance('How Are you? ');
//   speechSynthesis.speak(texto);
// }, 3000);

// setTimeout(function () {
//   document.documentElement.lang = 'es';
//   let texto = new SpeechSynthesisUtterance('¿qué hacés papá?');
//   speechSynthesis.speak(texto);
// }, 5000);

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute('lang'));
console.log(document.querySelector('.link-dom').href); // ruta completa https://127.0.0.1:5500/dom.html
console.log(document.querySelector('.link-dom').getAttribute('href')); // ruta especifica dom.html
