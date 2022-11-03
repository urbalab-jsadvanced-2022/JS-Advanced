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

const numMS = 2000;
const numLoop = 3;

async function createLoop(ms, loop, span) {
  for (let i = 0; i < loop; i++) {
    await delay(ms);
    span.textContent = i + 1;
  }
}

createLoop(numMS, numLoop, span);

window.addEventListener('unhandledrejection', (error) => {
  span.textContent = error.reason;
});
