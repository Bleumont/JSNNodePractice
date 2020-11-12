(() => {
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById('xhr'),
    $fragment = document.createDocumentFragment();

  xhr.addEventListener('readystatechange', (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);
      json.forEach((ele) => {
        const $li = document.createElement('li');
        $li.innerHTML = `${ele.name} -- ${ele.email} -- ${ele.phone}`;
        $fragment.appendChild($li);
      });
      $xhr.appendChild($fragment);
    } else {
      let messaje = xhr.statusText || 'Ocurrio un error';
      $xhr.innerHTML = `Error ${xhr.status}: ${messaje}`;
    }
  });
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.send();
})();

(() => {
  const $fetch = document.getElementById('fetch'),
    $fragment = document.createDocumentFragment();

  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((json) => {
      json.forEach((ele) => {
        const $li = document.createElement('li');
        $li.innerHTML = `${ele.name} -- ${ele.email} -- ${ele.phone}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      let messaje = err.statusText || 'Ocurrio un error';
      $fetch.innerHTML = `Error ${err.status}: ${messaje}`;
    })
    .finally(() => {
      console.log('finally');
    });
})();

(() => {
  const $fetchAsync = document.getElementById('fetch-async'),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await fetch('https://jsonplaceholder.typicode.com/users'),
        json = await res.json();

      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      json.forEach((ele) => {
        const $li = document.createElement('li');
        $li.innerHTML = `${ele.name} -- ${ele.email} -- ${ele.phone}`;
        $fragment.appendChild($li);
      });
      $fetchAsync.appendChild($fragment);
    } catch (err) {
      let messaje = err.statusText || 'Ocurrio un error';
      $fetchAsync.innerHTML = `Error ${err.status}: ${messaje}`;
    } finally {
      // console.log('Fin')
    }
  }
  getData();
})();
