const d = document,
  $table = d.querySelector('#crud-table'),
  $form = d.querySelector('.crud-form'),
  $title = d.querySelector('.crud-title'),
  $template = d.getElementById('crud-template').content,
  $fragment = d.createDocumentFragment();

const url = 'http://localhost:3000/santos';
data = {};

async function baseFetch(url, data = {}) {
  const response = await fetch(url, data)
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((json) => {
      json.forEach((el) => {
        $template.querySelector('.name').textContent = el.nombre;
        $template.querySelector('.constellation').textContent = el.constelacion;
        $template.querySelector('.edit').dataset.id = el.id;
        $template.querySelector('.edit').dataset.name = el.nombre;
        $template.querySelector('.edit').dataset.constellation =
          el.constelacion;
        $template.querySelector('.delete').dataset.id = el.id;

        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
      });
      $table.querySelector('tbody').appendChild($fragment);
    })
    .catch((err) => {
      console.log(err);
      $table.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`);
    });
}

d.addEventListener('DOMContentLoaded', baseFetch(url, data));

d.addEventListener('click', (e) => {
  if (e.target.matches('.edit')) {
    $title.textContent = 'Editar Santo';
    $form.nombre.value = e.target.dataset.name;
    $form.constelacion.value = e.target.dataset.constellation;
    $form.id.value = e.target.dataset.id;
  }
  if (e.target.matches('.delete')) {
    let isDelete = confirm(`Queres eliminar ${e.target.dataset.id}?`);
    if (isDelete) {
      fetch(`http://localhost:3000/santos/${e.target.dataset.id}`, {
        method: 'DELETE',
      });
    }
  }
});

d.addEventListener('submit', (e) => {
  if (e.target === $form) {
    e.preventDefault();
    if (!e.target.id.value) {
      let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: e.target.nombre.value,
          constelacion: e.target.constelacion.value,
        }),
      };
      fetch('http://localhost:3000/santos', options)
        .then((res) => res.json())
        .catch((err) =>
          $form.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`)
        );
    } else {
      let options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: e.target.nombre.value,
          constelacion: e.target.constelacion.value,
        }),
      };
      fetch(`http://localhost:3000/santos/${e.target.id.value}`, options)
        .then((res) => res.json())
        .catch((err) => {
          $form.insertAdjacentHTML('afterend', `<p><b>${err}</b></p>`);
        });
    }
  }
});
