// sessionStorage.setItem('user', 'xavi12p@hotmail');
// localStorage.setItem('age', '47');

// let user = sessionStorage.getItem('user');
// console.log(user);

// let age = sessionStorage.getItem('age');
// console.log(age);

// localStorage.removeItem('age');

// let userNew = sessionStorage.key(1);
// console.log(userNew);

window.onstorage = (event) => {
  console.log('HA CAMBIADO ALGO EN EL STORAGE');
};

//////// GUARDAR OBJ EN STORAGE
const usuario = {
  name: 'Isra Cambiado',
  male: true,
  time: Date.now(),
};

localStorage.setItem('userObject', JSON.stringify(usuario));

//////// RECUPERAR OBJ DESDE EL STORAGE
const userStored = localStorage.getItem('userObject');
const userStoredObj = JSON.parse(userStored);

console.log(userStoredObj.name);
