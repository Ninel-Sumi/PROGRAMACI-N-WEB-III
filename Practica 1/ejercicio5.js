function miFuncion(cad) {
  cad = cad.toLowerCase();
  return cad === cad.split('').reverse().join('');
}

let band1 = miFuncion("oruro");
console.log(band1);

let band2 = miFuncion("hola");
console.log(band2);