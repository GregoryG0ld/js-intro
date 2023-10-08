console.clear();

// user: name, age is married

const john = {
   isMarried: true,
   age: 99,
   name: 'John'
}

console.log(john);
console.log(john['name'], john.name);
console.log(john['age'], john.age);
console.log(john['isMarried'], john.isMarried);

const c = [1, 2];

const d = c;

console.log();