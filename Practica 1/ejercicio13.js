function tarea(ms, mensaje) {
  return new Promise(resolve => setTimeout(() => resolve(mensaje), ms));
}

async function ejecutar() {
  let r1 = await tarea(1000, "Paso 1");
  console.log(r1);
  let r2 = await tarea(1000, "Paso 2");
  console.log(r2);
  let r3 = await tarea(1000, "Paso 3");
  console.log(r3);
}

ejecutar();