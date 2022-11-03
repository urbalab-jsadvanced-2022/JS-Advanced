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
span.textContent = '0';
document.body.append(span);

delay(1000)
  .then(() => {
    span.textContent = '1';
    return delay(1000);
  })
  .then(() => {
    span.textContent = '2';
    return delay(1000);
  })
  .then(() => {
    span.textContent = '3';
    return delay(1000);
  })
  .then(() => {
    span.textContent = '4';
    return delay(1000);
  })
  .then(() => {
    span.textContent = '5';
  });

window.addEventListener('unhandledrejection', (error) => {
  span.textContent = error.reason;
});
