const d = document;

export default function darkMode(boton, claseDark) {
  const $boton = d.querySelector(boton),
    $elementos = d.querySelectorAll('[data-dark]');
  let isActive = null;
  d.addEventListener('click', (e) => {
    if (e.target.matches(boton) && !isActive) {
      $elementos.forEach((ele) => ele.classList.add(claseDark));
      $boton.innerHTML = '🌞';
      isActive = true;
      localStorage.setItem('darkMode', 'off');
    } else if (e.target.matches(boton)) {
      $elementos.forEach((ele) => ele.classList.remove(claseDark));
      $boton.innerHTML = '🌙';
      isActive = false;
      localStorage.setItem('darkMode', 'on');
    }
  });
}
