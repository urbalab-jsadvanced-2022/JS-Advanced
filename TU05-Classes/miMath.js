class MisArray extends Array {
  estaVacio() {
    return this.length === 0;
  }
}

const array = new MisArray();

console.log(MisArray.isArray([]));
