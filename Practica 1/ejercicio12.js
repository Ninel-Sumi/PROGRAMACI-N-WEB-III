function tarea(ms, mensaje) {
  return new Promise(resolve => setTimeout(() => resolve(mensaje), ms));
}

async function ejecutarTareas() {
  let resultado1 = await tarea(1000, "Tarea 1 completada");
  console.log(resultado1);
  let resultado2 = await tarea(1000, "Tarea 2 completada");
  console.log(resultado2);
}

ejecutarTareas();