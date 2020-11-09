const d = document,
  w = window;
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

export function responsiveMenu(id, mobileContent, desktopContent) {
  let breakpoint = w.matchMedia('(min-width:1024px)');
  const responsive = (e) => {
    if (e.matches) {
      d.querySelector('.panel').classList.toggle('active');
      d.querySelector('.panel').style.width = '30%';
      d.querySelector('.panel').style.left = '80%';
      d.querySelector('#top-btn').style.right = '21vw';
      d.querySelector('#panel-btn').style.display = 'none';
    } else {
      d.querySelector('#panel-btn').style.display = 'initial';
      d.querySelector('.panel').style.width = '100%';
      d.querySelector('.panel').style.left = '0';
      d.querySelector('#top-btn').style.right = '5vw';
    }
  };
  breakpoint.addEventListener('change', responsive);
  responsive(breakpoint);
}
