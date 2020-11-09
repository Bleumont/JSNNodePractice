const d = document;

export default function sliderGallery() {
  const $btnRight = d.querySelector('.slider-btns .next'),
    $btnLeft = d.querySelector('.slider-btns .prev'),
    $slide = d.querySelectorAll('.slider-slide');

  let i = 0;
  d.addEventListener('click', (e) => {
    if (e.target === $btnLeft) {
      e.preventDefault();
      $slide[i].classList.remove('active');
      i--;
      if (i > 0) {
        i = $slide.length - 1;
      }
      $slide[i].classList.add('active');
    }

    if (e.target === $btnRight) {
      e.preventDefault();
      $slide[i].classList.remove('active');
      i++;
      if (i >= $slide.length) {
        i = 0;
      }
      $slide[i].classList.add('active');
    }
  });
  setInterval(() => {
    $slide[i].classList.remove('active');
    i++;
    if (i >= $slide.length) {
      i = 0;
    }
    $slide[i].classList.add('active');
  }, 5000);
}
