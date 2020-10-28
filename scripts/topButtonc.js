const d = document;

export default function botonTop(boton) {
  const $boton = d.querySelector(boton);
  d.addEventListener('click', (e) => {
    if (e.target.matches(boton)) {
      d.documentElement.scrollTop = 0;
    }
  });
  d.addEventListener('scroll', (e) => {
    if (window.scrollY > 400) {
      $boton.classList.remove('hidden');
    } else {
      $boton.classList.add('hidden');
    }
  });
}
