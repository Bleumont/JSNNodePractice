const d = document;
export default function scrollAreaIntersect() {}

var boxElement;
let menuElements;

window.addEventListener(
  'load',
  function (event) {
    boxElement = document.querySelectorAll('.section');
    menuElements = d.querySelectorAll('.menu a');
    createObserver();
  },
  false
);
function createObserver() {
  var observer;

  var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.75,
  };

  observer = new IntersectionObserver(handleIntersect, options);

  boxElement.forEach((boxElements) => {
    observer.observe(boxElements);
  });
}

function handleIntersect(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      d.querySelector(`a[href='#${entry.target['id']}']`).classList.add(
        'active'
      );
    } else {
      d.querySelector(`a[href='#${entry.target['id']}']`).classList.remove(
        'active'
      );
    }
  });
}
