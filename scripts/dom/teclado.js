export default function teclas(objeto, contendor) {
  const d = document,
    $circulo = d.querySelector(objeto),
    $contenedor = d.querySelector(contendor);
  d.addEventListener('keydown', (e) => {
    let $posX = Number(
        getComputedStyle(d.documentElement).getPropertyValue('--posX')
      ),
      $posY = Number(
        getComputedStyle(d.documentElement).getPropertyValue('--posY')
      );
    const limitePelota = $circulo.getBoundingClientRect(),
      limiteContenedor = $contenedor.getBoundingClientRect();
    if (
      (e.key === 'w' || e.key === 'W') &&
      !(limiteContenedor.top + 20 > limitePelota.top)
    ) {
      d.documentElement.style.setProperty('--posY', `${$posY - 1}`);
      $circulo.innerHTML = e.key;
    }
    if (
      (e.key === 's' || e.key === 'S') &&
      !(limiteContenedor.bottom - 10 < limitePelota.bottom)
    ) {
      d.documentElement.style.setProperty('--posY', `${$posY + 1}`);
      $circulo.innerHTML = e.key;
    }
    if (
      (e.key === 'a' || e.key === 'A') &&
      !(limiteContenedor.left + 20 > limitePelota.left)
    ) {
      d.documentElement.style.setProperty('--posX', `${$posX - 1}`);
      $circulo.innerHTML = e.key;
    }
    if (
      (e.key === 'd' || e.key === 'D') &&
      !(limiteContenedor.right - 10 < limitePelota.right)
    ) {
      d.documentElement.style.setProperty('--posX', `${$posX + 1}`);
      $circulo.innerHTML = e.key;
    }
    $circulo.style.transform = `translate(${$posX * 10}px, ${$posY * 10}px)`;
  });
}

export function shorcuts(e) {
  const d = document;
  if (e.shiftKey && (e.key === 'R' || e.key === 'r')) {
    alert('Funciona!');
  }
}
