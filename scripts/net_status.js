const d = document,
  onLine = navigator.onLine;

export default function isOnline(element) {
  d.addEventListener('change', () => {
    if (onLine) {
      d.getElementById(element).classList.toggle('active');
      element.innerHTML = `<p>On Line</p>`;
    } else {
      d.getElementById(element).classList.remove('active');
      element.innerHTML = `<p>Sin Conexion</p>`;
    }
  });
}
