// Código Callback en forma de Promesa
function delay(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

// Crear SPAN
const span = document.createElement('span');
span.textContent = 'Loading';
document.body.append(span);

delay(3000).then(() => {
  span.textContent = 'Completed';
});
