function tarea1() {
  return new Promise(resolve => setTimeout(() => resolve("Tarea 1 completada"), 1000));
}

function tarea2() {
  return new Promise(resolve => setTimeout(() => resolve("Tarea 2 completada"), 1000));
}

tarea1()
  .then(resultado1 => {
    console.log(resultado1);
    return tarea2();
  })
  .then(resultado2 => console.log(resultado2));