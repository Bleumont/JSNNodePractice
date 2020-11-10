const d = document;
let videoBox = d.querySelector('#videoInt');
export default function videoInteligente() {
  window.addEventListener('visibilitychange', function () {
    document.visibilityState === 'visible' ? videoBox.play() : videoBox.pause();
  });
  const observer = new IntersectionObserver(handleIntersect, {
    threshold: 0.75,
  });
  observer.observe(videoBox);
}
function handleIntersect(entries, observer) {
  entries.forEach(function (entry) {
    entry.isIntersecting ? videoBox.play() : videoBox.pause();
  });
}

// export default function smartVideo() {
//   const $videos = d.querySelector('video[data-smart-video');

//   const cb = (entries) => {
//     if (entry.isIntersecting) {
//       entry.target.play();
//     } else {
//       entry.target.pause();
//     }
//     window.addEventListener('visibilitychange', (e) => {
//       d.visibilityState === 'visible'
//         ? entry.target.play()
//         : entry.target.pause();
//     });
//   };
//   const observer = new IntersectionObserver(cb, { threshold: 0.75 });
//   $videos.forEach((el) => observer.observe(el));
// }
