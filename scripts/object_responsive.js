const d = document,
  w = window;

export function responsiveMedia(id, mq, mobileContent, desktopContent) {
  let breakpoint = w.matchMedia(mq);
  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = mobileContent;
    } else {
      d.getElementById(id).innerHTML = desktopContent;
    }
  };
  breakpoint.addEventListener('change', responsive);
  responsive(breakpoint);
}
