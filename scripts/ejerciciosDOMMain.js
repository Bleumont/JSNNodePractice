$hamburguerMenu = document.querySelector('#haha');

$hamburguerMenu.style.display = 'none';
document.addEventListener('click', (e) => {
  if (
    e.target.matches('.hamburger') &&
    $hamburguerMenu.style.display === 'none'
  ) {
    $hamburguerMenu.style.display = 'initial';

    console.log('Clicked');
  } else {
    $hamburguerMenu.style.display = 'none';
  }
});
