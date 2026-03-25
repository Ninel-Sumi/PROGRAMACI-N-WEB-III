function promesa() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Resultado"), 1000);
  });
}

function usarCallback(callback) {
  promesa().then(resultado => callback(resultado));
}

usarCallback(res => console.log(res));