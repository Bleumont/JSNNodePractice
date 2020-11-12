const d = document,
  $elementos = d.querySelectorAll('[data-dark]');
const $boton = d.querySelector('#light-btn');

export function darkModeCheck() {
  let isActive = window.localStorage.getItem('darkMode');

  if (isActive === 'off') {
    $elementos.forEach((ele) => ele.classList.add('darkMode'));
    $boton.innerHTML = '🌞';
  } else if (isActive === 'on') {
    $elementos.forEach((ele) => ele.classList.remove('darkMode'));
    $boton.innerHTML = '🌙';
  }
}
