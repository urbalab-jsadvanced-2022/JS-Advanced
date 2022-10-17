let checkAge = (age) => (age >= 18 ? true : false);
console.log(checkAge(20));

let checkAge2 = (age) => age >= 18 || false;
console.log(checkAge2(16));

let checkAge3 = (age) => age >= 18;
console.log(checkAge3(20));
