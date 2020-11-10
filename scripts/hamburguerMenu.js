const d = document,
  w = window;
export default function hamburguerMenu(panelBtn, panel, menuL) {
  let breakpoint = w.matchMedia('(min-width:1024px)');
  if (breakpoint.matches) {
    d.querySelector(panel).classList.toggle('active');
  }
  d.addEventListener('click', (e) => {
    if (e.target.matches(panelBtn)) {
      d.querySelector(panel).classList.toggle('active');
    }
    if (e.target.matches(menuL) && !breakpoint.matches) {
      d.querySelector(panel).classList.toggle('active');
    }
  });
}
