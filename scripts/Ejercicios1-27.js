// 27
class Pelicula {
  constructor({ id, title, director, year, country, genre, score }) {
    (this.id = id),
      (this.title = title),
      (this.director = director),
      (this.year = year),
      (this.country = country),
      (this.genre = genre),
      (this.score = score);

    this.validarAnio(year);
    this.validarDirector(director);
    this.validarGenero(genre);
    this.validarId(id);
    this.validarPais(country);
    this.validarPuntaje(score);
    this.validarTitulo(title);
  }

  static get genres() {
    return [
      'Action',
      'Adult',
      'Adventure',
      'Animation',
      'Biography',
      'Comedy',
      'Crime',
      'Documentary',
      'Drama',
      'Family',
      'Fantasy',
      'Film Noir',
      'Game-Show',
      'History',
      'Horror',
      'Musical',
      'Music',
      'Mystery',
      'News',
      'Reality-TV',
      'Romance',
      'Sci-Fi',
      'Short',
      'Sport',
      'Talk-Show',
      'Thriller',
      'War',
      'Western',
    ];
  }
  validarStrings(cadena, valor) {
    if (!valor) console.warn(`${cadena} "${valor}" no es valido`);
    if (typeof valor !== 'string') {
      return console.warn('El valor no es una cadena de texto');
    }
    return true;
  }
  validarId(id) {
    if (this.validarStrings('IMDB id', id)) {
      if (!/^([a-z]){2}([0-9]){7}$/i.test(id)) {
        return console.error(`El formato"${id}" no es valido`);
      }
    }
  }
  validarTitulo(title) {
    if (this.validarStrings('Titulo', title)) {
      if (!(title.length < 100)) {
        return console.error(`El titulo es demasiado largo`);
      }
    }
  }
  validarDirector(director) {
    if (this.validarStrings('Director', director)) {
      if (!(director.length <= 50)) {
        return console.error('El nombre del director es muy largo');
      }
    }
  }
  validarAnio(year) {
    if (!/^[0-9]{4}$/i.test(year) || year === undefined) {
      return console.error('El año no es valido.');
    }
  }
  validarPais(country) {
    if (!country instanceof Array || country === undefined) {
      return console.error('El pais debe ser ingresado en forma de arreglo');
    }
  }
  validarGenero(genre) {
    if (!(genre instanceof Array) || genre === undefined) {
      return console.error('El genero es invalido');
    }
    for (let ele of genre) {
      if (!Pelicula.genres.includes(ele)) {
        return console.error(
          `el genero "${ele}" no esta dentro de los generos aceptados.`
        );
      }
    }
  }
  validarPuntaje(score) {
    if (score > 10 || !/^[0-9]*([0-9]){1}\.([0-9]){1}$/i.test(score)) {
      return console.warn(
        'El puntaje debe ser un numero entre 0 y 10, debe tener un decimal.'
      );
    }
  }

  static generosAceptados = () => console.log(this.genres);

  fichaTecnica = () => {
    console.info(`
      Ficha Tecnica: 
      IMBD id: ${this.id},
      Titulo: ${this.title},
      Director: ${this.director},
      Año: ${this.year},
      Pais/es: ${this.country},
      Genero/s: ${this.genre},
      Puntaje: ${this.score}`);
  };
}
let peliculas = [
  {
    id: 'AA1234567',
    title: 'Tiburon',
    director: 'Harry Potter',
    year: 1912,
    country: ['Argentina', 'Canada'],
    genre: ['Action', 'Drama'],
    score: 8.9,
  },
  {
    id: 'AA1234567',
    title:
      'Tiqweq2eqewqwqwe123141234123412341234123412341234eqwbeqwbeqwebqwbeqwbeqwbqbwbqbqwebqwbeburon',
    director: 'Harryqwbeqeqwebqwbeqwbeq Potter',
    year: 1912,
    country: ['sdwdsd'],
    genre: ['Acddwadstion'],
    score: 9.9,
  },
  {
    id: 'rr1332275',
    title: 'Tiburon',
    director: 'Harry Potter',
    year: 1912,
    country: ['Argentina'],
    genre: ['Action'],
    score: 8.9,
  },
];
let peliOne = {
  id: 'AA1234567',
  title: 'Tiburon',
  director: 'Harry Potter',
  year: 1912,
  country: ['Argentina'],
  genre: ['Action'],
  score: 8.9,
};
imprimirPeliculas = (peli) => {
  for (let ele of peli) {
    ele = new Pelicula(ele);
    ele.fichaTecnica();
  }
};
// peliculas.forEach((ele) => new Pelicula(ele).fichaTecnica());

// 26
arrPromedio = (array) => {
  return console.info(
    array.reduce((total, num, index, array) => {
      total += num;
      if (index === array.length - 1) {
        return `El promedio es ${total / array.length}`;
      } else {
        return total;
      }
    })
  );
  // let suma = 0;
  // array.forEach((ele) => {
  //   suma += ele;
  // });
  // return suma / array.length;
};
// 25
eliminarDuplicados = (array) => {
  arr = [];
  for (let i = 0; i < array.length; i++) {
    if (!arr.includes(array[i])) {
      arr.push(array[i]);
    }
  }
  return arr;
};

eliminarDuplicadosDos = (array) => {
  return console.info({
    sinDuplicados: [...new Set(array)],
  });
};

// 24)
ordenarArreglos = (array) => {
  return console.info({
    array,
    asc: array.map((el) => el).sort(),
    desc: array
      .map((el) => el)
      .sort()
      .reverse(),
  });
};

// 23)
arrayParEImpar = (array) => {
  arrayPar = array.filter((a) => a % 2 === 0);
  arrayImpar = array.filter((a) => a % 2 === 1);
  return { 'los impares son:': arrayImpar, 'los pares son': arrayPar };
};

// 22)
numeroAltoBajo = (array) => {
  return `Max: ${Math.max(...array)}, Min: ${Math.min(...array)}`;
};

numeroAltoBajoDos = (array) => {
  arr = array.sort();
  return `Max: ${arr[0]}, Min: ${arr[-1]}`;
};

// 21
arrayCuadrado = (arrayo) => arrayo.map((a) => a * a);

//20
function mailValido(mail) {
  return /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
    mail
  );
}
// 19
function nombreValido(nombre) {
  return /^[A-Za-zñÑ\s]+$/gi.test(nombre)
    ? console.log(`${nombre} es un nombre valido`)
    : console.log(`${nombre} no es un nombre valido`);
}
// 18
function contarLetras(cadena) {
  let consonante = 0,
    vocal = 0;
  for (let ele of cadena) {
    if (/[aeiou]/gi.test(ele)) {
      vocal += 1;
    } else if (/[^aeiou\s]/gi.test(ele)) {
      consonante += 1;
    }
  }
  return `Hay ${vocal} vocales y ${consonante} consonantes`;
}

//17
function aniosPasados(fecha) {
  let ahora = new Date().getTime() - fecha.getTime();
  let aniosAMS = 1000 * 60 * 60 * 24 * 365;
  total = ahora / aniosAMS;
  return total;
}
// 16
descuento = (monto, descuento) => monto - (monto * descuento) / 100;

// 14
celsiusAFarenheit = (grados, unidad) => {
  if (unidad === 'C') {
    return Math.floor(grados * (9 / 5) + 32) + '°F';
  } else if (unidad === 'F') {
    return Math.floor((grados - 32) * (5 / 9)) + '°C';
  }
};

// 13
esPar = (numero) => {
  if (numero % 2 != 0) console.log('Impar');
  else console.log('Es par');
};

// 12
function esPrimo(numero) {
  if (numero === 2 || numero === 1) {
    return true;
  } else if (numero % 2 === 0 || numero % 3 === 0) {
    return false;
  } else return true;
}

// 11
function factorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// 9
random = (max, min) => Math.floor(Math.random() * (max - min) + min);

// 8
function eliminarCaracteres(texto, caracteres) {
  const regex = new RegExp(`${caracteres}`, 'ig');
  let tt = texto.split(' ');
  let ty = '';
  for (let word of tt) {
    ty += word.replace(regex, '').concat(' ');
  }
  return ty;
}

// 7
function esPalindromo(texto) {
  let pali = texto.split('').reverse().join('').replace(/ /g, '');
  if (pali === texto.replace(/ /g, '')) {
    return console.log(`'${pali}' es palindromo`);
  } else {
    return console.log(`El texto '${pali}' no es un palindromo`);
  }
}

// 6
function contarPalabras(original, termino) {
  let contador = 0;
  cadena = original.split(' ');
  for (let ele of cadena) {
    if (ele === termino) {
      contador += 1;
    }
  }
  return contador;
}
// Contar cantidad de veces que aparece una palabra en texto (reduce())
let palabras = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, earum consequatur unde 
  sequi nulla eos fuga ipsum dolor explicabo reiciendis quam ratione odio necessitatibus fuga. Animi dolorem 
  dolorum ab maxime pariatur? Tempore, labore?`;

let palabrasNormalizadas = palabras.toLowerCase().split(' ');
const cantidadPalabras = palabrasNormalizadas.reduce(
  (contadorPalabras, palabra) => {
    contadorPalabras[palabra] = (contadorPalabras[palabra] || 0) + 1;
    return contadorPalabras;
  },
  {}
);
console.log(cantidadPalabras);

// 5
function invertir(cadena) {
  return cadena.split('').reverse().join('');
}

// 4
function repetirTexto(texto, cantidad) {
  return texto.repeat(cantidad);
}

// 3
function cadenaToArray(cadena, separador) {
  return cadena.split(separador);
}

// 2
function recortado(texto, cantidad) {
  return texto.slice(0, cantidad);
}

// 1
function contador(cadena) {
  let contador = 0;
  if (typeof cadena === 'string') {
    for (let ele of cadena) {
      contador += 1;
    }
    return contador;
  } else {
    return console.error('El parametro no es un numero');
  }
}
