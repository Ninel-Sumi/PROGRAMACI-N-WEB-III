function obtenerDatos() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Datos obtenidos"), 1000);
  });
}

async function ejecutar() {
  let datos = await obtenerDatos();
  console.log(datos);
}

ejecutar();