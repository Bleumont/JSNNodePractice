const d = document;
export default function hamburguerMenu(panelBtn, panel, menuL) {
  d.addEventListener('click', (e) => {
    if (e.target.matches(panelBtn)) {
      d.querySelector(panel).classList.toggle('active');
    }
    if (e.target.matches(menuL)) {
      d.querySelector(panel).classList.remove('active');
    }
  });
}
