class Animal {
  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
    this.peso = 70;
  }

  run(speed) {
    this.speed = speed;
  }

  stop() {
    this.speed = 0;
  }
}

class Conejo extends Animal {
  static comeZanahorias = true;

  constructor(name, speed) {
    super(name, speed);
    this.peso = 0.2;
  }

  static hide() {
    this.speed = 0;
    console.log('Estoy escondido');
  }

  stop() {
    super.stop();
    console.log('Ahora se ejecuta el stop');
    this.hide();
  }
}

console.log(Conejo.comeZanahorias);

const animal = new Animal('animalito', 30);
// console.log(`${animal.name} corre a ${animal.speed}`);

// animal.run(10);
// console.log(`${animal.name} corre a ${animal.speed}`);

// animal.stop();
// console.log(`${animal.name} corre a ${animal.speed}`);

// const rabbit = new Conejo('John', 10);
// rabbit.run(30);
// console.log(`${rabbit.name} corre a ${rabbit.speed}`);
// rabbit.stop();
// console.log(rabbit.speed);

const rabbit = new Conejo('John', 10);
console.log(`${rabbit.name} pesa ${rabbit.peso}`);

function mataConejo(conejo) {
  if (conejo instanceof Rabbit) {
    conejo.speed = 0;
    conejo.vivo = false;
  }
}

mataConejo(rabbit);

let user = {
  name: 'Xavi',
};
mataConejo(3);
