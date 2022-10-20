class User {
  // field
  isAdmin = false;

  constructor(name, age) {
    // Data Property
    this.name = name;
    this.age = age;
  }

  get description() {
    return `${this.name} tiene ${this.age} años. Es admin? ${this.isAdmin}`;
  }

  growUp(years) {
    this.age += years;
  }
}

const xavi = new User('Xavi', 47);

xavi.growUp(2);

console.log(xavi.description);
