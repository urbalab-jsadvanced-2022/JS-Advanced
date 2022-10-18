// let persona = {
//   nombre: 'Xavi',
//   edad: 47,
// };
// persona.altura=180;

// let coche = new Object();
// coche.color = 'rojo';
// coche.marca = 'volkswagen';

// let persona = {
//   nombre: 'Xavi',
//   edad: 47,
//   ubicacion: 'Gandia',
//   caminar() {
//     this.ubicacion = 'Oliva';
//   },
// };

// console.log(persona.nombre);
// console.log(persona.ubicacion);
// persona.caminar();
// console.log(persona.ubicacion);

// let persona = {
//   nombre: 'Xavi',
//   edad: 47,
//   ubicacion: 'Gandia',
//   caminar() {
//     this.ubicacion = 'Oliva';
//   },
// };

// persona.altura = 180;
// persona.crecer = function (cms) {
//   this.altura = this.altura + cms;
// };

// persona.crecer(5);

// console.log(persona.altura);

// let persona = {
//   nombre: 'Xavi',
//   edad: 47,
// };

// let persona2 = {
//   nombre: 'Martin',
//   edad: 24,
// };

// let persona3 = {
//   nombre: 'Paula',
//   edad: 31,
// };

function Persona(n, e) {
  this.name = n;
  this.edad = e;
  this.numHijos = 0;
  this.beParent = function (hijos) {
    this.numHijos += hijos;
  };
}

let persona1 = new Persona('Xavi', 47);
let persona2 = new Persona('Martin', 24);
let persona3 = new Persona('Paula', 31);

persona3.colorOjos = 'azules';

console.log(persona3.name);
console.log(persona3.edad);

persona2.beParent(3);
console.log(persona2.numHijos);
console.log(persona1.numHijos);
