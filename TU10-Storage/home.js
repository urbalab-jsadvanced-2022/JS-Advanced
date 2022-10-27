// const listadoCookies = document.cookie.split(';');
// console.log(listadoCookies);

// const arrayClaveValor = listadoCookies[0].split('=');
// console.log(arrayClaveValor);

// const clave = arrayClaveValor[0];
// const valor = arrayClaveValor[1];

// if (clave === 'usuario') {
//   console.log(valor);
// }

//console.log(usuario);

const user = Cookies.get('user');
console.log(user);

Cookies.set('user', 'xavi', { expires: 0 });
