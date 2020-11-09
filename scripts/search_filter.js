const d = document;

export default function filtroDeBusqueda(inputBox, searchArea) {
  const $inputBox = d.getElementById(inputBox),
    $filter = $inputBox.value.toUpperCase(),
    $searchArea = d.getElementById(searchArea),
    $searchItem = $searchArea.getElementsByTagName('figure');

  for (let ele of $searchItem) {
    let a = ele.getElementsByTagName('figcaption')[0];
    let txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf($filter) > -1) {
      ele.style.visibility = 'initial';
      ele.style.opacity = 1;
      ele.style.order = 0;
    } else {
      ele.style.visibility = 'hidden';
      ele.style.opacity = 0;
      ele.style.order = 1;
    }
  }
}
