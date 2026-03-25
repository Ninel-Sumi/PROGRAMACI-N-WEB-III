function funcionCallback(callback) {
  setTimeout(() => callback("Resultado"), 1000);
}

function convertirAPromesa() {
  return new Promise(resolve => {
    funcionCallback(resolve);
  });
}

convertirAPromesa().then(res => console.log(res));