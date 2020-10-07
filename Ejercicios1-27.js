/* 
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ')
  devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo")
  devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro),
pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
  devolverá  "1, 2, 3, 4 y 5.
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) 
  devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos 
  los números enteros 10.545 9.8 .8. 7.4
  positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) 
  devolverá 35 años (en 2020).
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") 
  devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, 
pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y 
el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
La expresión regular que uso para el email en este video /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i

27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, 
director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película. 1332 

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,
Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, 
Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

*/

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
