const d = document;
export default function scrollAreaIntersect() {
  const $target = d.querySelector('#geolocation');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  let observer = new IntersectionObserver(callback, options);
  observer.observe($target);

  function callback(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log('hola!');
        console.log(entry.target.classList);
      }
    });
  }
}

var boxElement;
let menuElements;
var prevRatio = 0.0;
var increasingColor = 'rgba(40, 40, 190, ratio)';
var decreasingColor = 'rgba(190, 40, 40, ratio)';

// Set things up.

window.addEventListener(
  'load',
  function (event) {
    boxElement = document.querySelectorAll('.section'); // also add the "all"
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
    threshold: 1.0,
  };

  observer = new IntersectionObserver(handleIntersect, options);

  // this is the multi fix
  boxElement.forEach((boxElements) => {
    observer.observe(boxElements);
  });
}

function handleIntersect(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      menuElements.forEach((ele) => {
        if (
          ele.href ===
          `http://127.0.0.1:5500/ejerciciosDOM.html#${entry.target['id']}`
        ) {
          ele.style.backgroundColor = 'black';
        } else {
          ele.style.backgroundColor = '';
        }
      });
    }

    prevRatio = entry.intersectionRatio;
  });
}
