const d = document;
export default function isResponsive() {
  let url = d.getElementById('url-field').value,
    width = d.getElementById('width-field').value,
    height = d.getElementById('height-field').value;
  let winC;
  d.addEventListener('click', (e) => {
    if (e.target.matches('#submitbtn')) {
      console.log('opened');
      winC = window.open(url, '_blank', `width=${width}, height=${height}`);
    }
    if (e.target.matches('#close-btn')) {
      winC.close();
    }
  });
}
